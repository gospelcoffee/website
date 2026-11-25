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

  const DAY_MS = 24 * 60 * 60 * 1000;

  function pad(n) { return String(n).padStart(2, "0"); }

  function formatTime(hhmm) {
    if (!hhmm) return "";
    const [h, m] = hhmm.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return m === 0 ? `${h12} ${period}` : `${h12}:${pad(m)} ${period}`;
  }

  function nowInTz(tz, now) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).formatToParts(now);
    const get = (t) => parts.find((p) => p.type === t)?.value;
    return {
      // Store the local calendar date at UTC midnight for date-only arithmetic.
      date: Date.UTC(Number(get("year")), Number(get("month")) - 1, Number(get("day"))),
      minuteOfDay: Number(get("hour")) * 60 + Number(get("minute")),
    };
  }

  function minutes(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
  }

  function specialHoursForDate(location, date) {
    return location.specialHours?.[date.toISOString().slice(0, 10)];
  }

  function hoursForDate(location, date) {
    return specialHoursForDate(location, date) ??
      location.hours.find((h) => h.day === DAY_NAMES[date.getUTCDay()]);
  }

  function nextOpenDay(location, fromDate) {
    // A dated closure can hide an opening for up to another full week.
    const searchDays = 7 * (1 + Object.keys(location.specialHours ?? {}).length);
    for (let daysAway = 1; daysAway <= searchDays; daysAway++) {
      const date = new Date(fromDate + daysAway * DAY_MS);
      const hours = hoursForDate(location, date);
      if (hours?.open && hours.close) {
        const dayLabel = daysAway === 1 ? "tomorrow" : DAY_NAMES[date.getUTCDay()];
        return { time: hours.open, dayLabel };
      }
    }
    return null;
  }

  // A location counts as "closing soon" when it closes in 30 minutes or less.
  const CLOSING_SOON_MINUTES = 30;

  /* Two-line status. Returns:
   *   { isOpen, primary, primaryNote, secondary, closesInMinutes, closesSoon }
   * primary     : "Open now" | "Open" | "Closed" (the prominent display word)
   * primaryNote : null, or "Closing soon" (a quiet inline note rendered in the
   *               same subtle style as the secondary line, after `primary`)
   * secondary   : "Closes at 2 PM" | "Opens at 7 AM" | "Opens tomorrow at 7 AM"
   *               | "Opens Wednesday at 7 AM"
   * closesSoon is true when open and closing in <= 30 minutes.
   */
  function getStatus(location, now = new Date()) {
    const { date, minuteOfDay: nowMin } = nowInTz(location.timezone, now);
    const today = hoursForDate(location, new Date(date));

    if (today && today.open && today.close) {
      const openMin = minutes(today.open);
      const closeMin = minutes(today.close);
      if (nowMin >= openMin && nowMin < closeMin) {
        const closesInMinutes = closeMin - nowMin;
        const closesSoon = closesInMinutes <= CLOSING_SOON_MINUTES;
        return {
          isOpen: true,
          primary: closesSoon ? "Open" : "Open now",
          primaryNote: closesSoon ? "Closing soon" : null,
          secondary: `Closes at ${formatTime(today.close)}`,
          closesInMinutes,
          closesSoon,
        };
      }
    }

    let openLabel = null;
    if (today?.open && today.close && nowMin < minutes(today.open)) {
      openLabel = { time: today.open, dayLabel: "" }; // later today
    } else {
      openLabel = nextOpenDay(location, date);
    }
    const secondary = openLabel
      ? `Opens ${openLabel.dayLabel ? openLabel.dayLabel + " " : ""}at ${formatTime(openLabel.time)}`
      : "";
    return {
      isOpen: false,
      primary: "Closed",
      primaryNote: null,
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
        : `${DAY_ABBR[g.start]} – ${DAY_ABBR[g.end]}`;
      const hoursLabel = g.key === "closed"
        ? "Closed"
        : `${formatTime(g.open)} – ${formatTime(g.close)}`;
      return `${dayLabel}: ${hoursLabel}`;
    });
  }

  /* Hours list lines. When every day shares the same open hours, collapse to a
   * calm two-line summary ("Open daily" / "7 AM to 2 PM"); otherwise the
   * grouped weekly schedule with the en-dash range format.
   */
  function specialHoursLine(location, now) {
    const { date } = nowInTz(location.timezone, now);
    const hours = specialHoursForDate(location, new Date(date));
    if (!hours) return null;
    const range = hours.open && hours.close
      ? `${formatTime(hours.open)} – ${formatTime(hours.close)}`
      : "Closed";
    return `${hours.label}: ${range}`;
  }

  function buildHoursLines(location, now = new Date()) {
    const special = specialHoursLine(location, now);
    if (special) return [special];
    const first = location.hours[0];
    const uniform = first && first.open && first.close &&
      location.hours.every((d) => d.open === first.open && d.close === first.close);
    if (uniform) {
      return ["Open daily", `${formatTime(first.open)} to ${formatTime(first.close)}`];
    }
    return buildHoursGroups(location);
  }

  function renderLines(el, lines) {
    if (el.children.length === lines.length &&
        lines.every((line, index) => el.children[index].textContent === line)) return;
    el.textContent = "";
    for (const line of lines) {
      const li = document.createElement("li");
      li.textContent = line;
      el.appendChild(li);
    }
  }

  function updateBlock(el, location, now = new Date()) {
    const status = getStatus(location, now);
    const headlineEl = el.querySelector("[data-status-headline]");
    const subEl = el.querySelector("[data-status-sub]");
    const hoursEl = el.querySelector("[data-status-hours]");
    const headline = status.primaryNote
      ? `${status.primary} ${status.primaryNote}`
      : status.primary;
    if (headlineEl && headlineEl.textContent !== headline) {
      headlineEl.textContent = status.primary;
      if (status.primaryNote) {
        const note = document.createElement("span");
        note.className = "status-soft";
        note.textContent = status.primaryNote;
        headlineEl.appendChild(document.createTextNode(" "));
        headlineEl.appendChild(note);
      }
    }
    if (subEl && subEl.textContent !== status.secondary) subEl.textContent = status.secondary;
    if (hoursEl) renderLines(hoursEl, buildHoursLines(location, now));
    el.setAttribute(
      "data-status-state",
      status.isOpen ? (status.closesSoon ? "closing-soon" : "open") : "closed"
    );
  }

  function refresh(data) {
    const now = new Date();
    const blocks = document.querySelectorAll("[data-location]");
    blocks.forEach((el) => {
      const id = el.getAttribute("data-location");
      const location = data.locations.find((l) => l.id === id);
      if (location) updateBlock(el, location, now);
    });
    const hero = document.querySelector("[data-hero-hours]");
    if (hero) {
      const [first, ...others] = data.locations.map((location) => specialHoursLine(location, now));
      hero.textContent = first && others.every((line) => line === first) ? first : "Open daily";
    }
    document.dispatchEvent(new CustomEvent("valo:status-refresh", { detail: now }));
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
    .then((data) => {
      function tick() {
        refresh(data);
        window.setTimeout(tick, 60000 - (Date.now() % 60000));
      }
      tick();
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden) refresh(data);
      });
    })
    .catch(() => { /* leave hard-coded fallback in place */ });

  // Shared API for the Visit modal + bottom smart CTA (see visit.js).
  window.ValoStatus = {
    load: () => dataPromise,
    getStatus,
    buildHoursLines,
    updateBlock,
    formatTime,
  };
})();
