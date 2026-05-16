/* Valo Coffee — open/closed status
 * Reads /data/locations.json and updates each [data-location] block.
 * No-JS fallback: each block ships with hard-coded text in the HTML.
 * Exposes window.ValoStatus for the Visit modal + bottom smart CTA.
 */
(function () {
  "use strict";

  const DAY_NAMES = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const DAY_ABBR = {
    Sunday: "Sun",
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
    Friday: "Fri",
    Saturday: "Sat",
  };

  function pad(n) { return String(n).padStart(2, "0"); }

  function formatTime(hhmm) {
    if (!hhmm) return "";
    const [h, m] = hhmm.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return m === 0 ? `${h12} ${period}` : `${h12}:${pad(m)} ${period}`;
  }

  function nowInTz(tz) {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour12: false,
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).formatToParts(now);
    const get = (t) => parts.find((p) => p.type === t)?.value;
    const weekdayShort = get("weekday");
    const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return {
      dayIndex: weekdayMap[weekdayShort],
      hour: parseInt(get("hour"), 10),
      minute: parseInt(get("minute"), 10),
    };
  }

  function minutes(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
  }

  function hoursForDay(location, dayIndex) {
    const dayName = DAY_NAMES[dayIndex];
    return location.hours.find((h) => h.day === dayName);
  }

  function nextOpenDay(location, fromDayIndex) {
    for (let i = 1; i <= 7; i++) {
      const next = (fromDayIndex + i) % 7;
      const day = hoursForDay(location, next);
      if (day && day.open) {
        return { day, daysAway: i };
      }
    }
    return null;
  }

  /* Two-line status. Returns:
   *   { isOpen, primary, secondary, closesInMinutes, closesSoon }
   * primary  : "Open now" | "Closed now"
   * secondary: "Closes at 6 PM" | "Opens at 7 AM" | "Opens tomorrow at 7 AM"
   *            | "Opens Wednesday at 7 AM"
   */
  function getStatus(location) {
    const { dayIndex, hour, minute } = nowInTz(location.timezone);
    const nowMin = hour * 60 + minute;
    const today = hoursForDay(location, dayIndex);

    if (today && today.open && today.close) {
      const openMin = minutes(today.open);
      const closeMin = minutes(today.close);
      if (nowMin >= openMin && nowMin < closeMin) {
        const closesInMinutes = closeMin - nowMin;
        return {
          isOpen: true,
          primary: "Open now",
          secondary: `Closes at ${formatTime(today.close)}`,
          closesInMinutes,
          closesSoon: closesInMinutes < 60,
        };
      }
    }

    let openLabel = null;
    if (today && today.open && nowMin < minutes(today.open)) {
      openLabel = { time: today.open, dayLabel: "" }; // later today
    } else {
      const next = nextOpenDay(location, dayIndex);
      if (next) {
        openLabel = {
          time: next.day.open,
          dayLabel: next.daysAway === 1 ? "tomorrow" : next.day.day,
        };
      }
    }
    const secondary = openLabel
      ? `Opens ${openLabel.dayLabel ? openLabel.dayLabel + " " : ""}at ${formatTime(openLabel.time)}`
      : "";
    return {
      isOpen: false,
      primary: "Closed now",
      secondary,
      closesInMinutes: null,
      closesSoon: false,
    };
  }

  function buildHoursGroups(location) {
    const groups = [];
    let cur = null;
    for (const day of location.hours) {
      const key = day.open && day.close ? `${day.open}-${day.close}` : "closed";
      if (cur && cur.key === key) {
        cur.end = day.day;
      } else {
        if (cur) groups.push(cur);
        cur = { key, start: day.day, end: day.day, open: day.open, close: day.close };
      }
    }
    if (cur) groups.push(cur);
    return groups.map((g) => {
      const dayLabel = g.start === g.end
        ? DAY_ABBR[g.start]
        : `${DAY_ABBR[g.start]}–${DAY_ABBR[g.end]}`;
      const hoursLabel = g.key === "closed"
        ? "Closed"
        : `${formatTime(g.open)}–${formatTime(g.close)}`;
      return `${dayLabel}: ${hoursLabel}`;
    });
  }

  /* Hours list lines. When every day shares the same open hours, collapse to a
   * calm two-line summary ("Open daily" / "7 AM to 6 PM"); otherwise the
   * grouped weekly schedule with the en-dash range format.
   */
  function buildHoursLines(location) {
    const first = location.hours[0];
    const uniform = first && first.open && first.close &&
      location.hours.every((d) => d.open === first.open && d.close === first.close);
    if (uniform) {
      return ["Open daily", `${formatTime(first.open)} to ${formatTime(first.close)}`];
    }
    return buildHoursGroups(location);
  }

  function renderLines(el, lines) {
    el.textContent = "";
    for (const line of lines) {
      const li = document.createElement("li");
      li.textContent = line;
      el.appendChild(li);
    }
  }

  function updateBlock(el, location) {
    const status = getStatus(location);
    const headlineEl = el.querySelector("[data-status-headline]");
    const subEl = el.querySelector("[data-status-sub]");
    const hoursEl = el.querySelector("[data-status-hours]");
    if (headlineEl) headlineEl.textContent = status.primary;
    if (subEl) subEl.textContent = status.secondary;
    if (hoursEl) renderLines(hoursEl, buildHoursLines(location));
    el.setAttribute("data-status-state", status.isOpen ? "open" : "closed");
  }

  function init(data) {
    const blocks = document.querySelectorAll("[data-location]");
    blocks.forEach((el) => {
      const id = el.getAttribute("data-location");
      const location = data.locations.find((l) => l.id === id);
      if (location) updateBlock(el, location);
    });
  }

  function dataPath() {
    const script = document.currentScript;
    if (script && script.dataset && script.dataset.locations) {
      return script.dataset.locations;
    }
    return "data/locations.json";
  }

  const dataPromise = fetch(dataPath(), { cache: "no-cache" })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error("status fetch failed"))));

  dataPromise
    .then(init)
    .catch(() => { /* leave hard-coded fallback in place */ });

  // Shared API for the Visit modal + bottom smart CTA (see visit.js).
  window.ValoStatus = {
    load: () => dataPromise,
    getStatus,
    buildHoursLines,
    formatTime,
  };
})();
