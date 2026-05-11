/* Valo Coffee — open/closed status
 * Reads /data/locations.json and updates each [data-location] block.
 * No-JS fallback: each block ships with hard-coded text in the HTML.
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

  function computeStatus(location) {
    const { dayIndex, hour, minute } = nowInTz(location.timezone);
    const nowMin = hour * 60 + minute;
    const today = hoursForDay(location, dayIndex);

    if (today && today.open && today.close) {
      const openMin = minutes(today.open);
      const closeMin = minutes(today.close);
      if (nowMin >= openMin && nowMin < closeMin) {
        return {
          open: true,
          headline: "Open now",
          meta: `Today, ${formatTime(today.open)} – ${formatTime(today.close)}`,
        };
      }
      if (nowMin < openMin) {
        return {
          open: false,
          headline: "Closed now",
          meta: `Opens today at ${formatTime(today.open)}`,
        };
      }
    }

    for (let i = 1; i <= 7; i++) {
      const next = (dayIndex + i) % 7;
      const day = hoursForDay(location, next);
      if (day && day.open) {
        const label = i === 1 ? "Opens tomorrow at" : `Opens ${day.day} at`;
        return {
          open: false,
          headline: "Closed now",
          meta: `${label} ${formatTime(day.open)}`,
        };
      }
    }

    return {
      open: false,
      headline: "Closed",
      meta: "Hours unavailable",
    };
  }

  function updateBlock(el, location) {
    const status = computeStatus(location);
    const headlineEl = el.querySelector("[data-status-headline]");
    const metaEl = el.querySelector("[data-status-meta]");
    if (headlineEl) headlineEl.textContent = status.headline;
    if (metaEl) metaEl.textContent = status.meta;
    el.setAttribute("data-status-state", status.open ? "open" : "closed");
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

  fetch(dataPath(), { cache: "no-cache" })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error("status fetch failed"))))
    .then(init)
    .catch(() => { /* leave hard-coded fallback in place */ });

  // Simple nav toggle for mobile
  document.addEventListener("click", function (e) {
    const t = e.target.closest("[data-nav-toggle]");
    if (!t) return;
    const header = t.closest(".site-header");
    if (!header) return;
    const open = header.getAttribute("data-nav-open") === "true";
    header.setAttribute("data-nav-open", open ? "false" : "true");
    t.setAttribute("aria-expanded", open ? "false" : "true");
  });
})();
