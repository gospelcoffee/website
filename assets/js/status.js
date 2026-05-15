/* Valo Coffee — open/closed status + menu state toggle
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

  function findNextOpen(location, dayIndex) {
    for (let i = 1; i <= 7; i++) {
      const next = (dayIndex + i) % 7;
      const day = hoursForDay(location, next);
      if (day && day.open) {
        const label = i === 1 ? "tomorrow" : day.day;
        return { label, open: day.open };
      }
    }
    return null;
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
          headline: `Open today until ${formatTime(today.close)}`,
        };
      }

      if (nowMin < openMin) {
        return {
          open: false,
          headline: `Opens today at ${formatTime(today.open)}`,
        };
      }

      // Closed for the day (was open earlier)
      const nextOpen = findNextOpen(location, dayIndex);
      if (nextOpen) {
        return {
          open: false,
          headline: `Closed now · Opens ${nextOpen.label} at ${formatTime(nextOpen.open)}`,
        };
      }
      return { open: false, headline: "Closed" };
    }

    // Closed all day today
    const nextOpen = findNextOpen(location, dayIndex);
    if (nextOpen) {
      return {
        open: false,
        headline: `Closed today · Opens ${nextOpen.label} at ${formatTime(nextOpen.open)}`,
      };
    }
    return { open: false, headline: "Closed" };
  }

  function updateBlock(el, location) {
    const status = computeStatus(location);
    const headlineEl = el.querySelector("[data-status-headline]");
    if (headlineEl) headlineEl.textContent = status.headline;
    el.setAttribute("data-status-state", status.open ? "open" : "closed");
  }

  function initStatus(data) {
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
    .then(initStatus)
    .catch(() => { /* leave hard-coded fallback in place */ });

  // Menu state toggle (simplified <-> full) on the homepage
  document.addEventListener("click", function (e) {
    const trigger = e.target.closest("[data-menu-toggle]");
    if (!trigger) return;
    const target = trigger.getAttribute("data-menu-toggle"); // "full" or "simplified"
    const state = trigger.closest(".menu-state");
    if (!state || (target !== "full" && target !== "simplified")) return;
    state.setAttribute("data-menu-state", target);
    // Scroll the menu section back into view so the user lands at the top
    const section = state.closest("#menu");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // On load: if URL is /?menu=full or hash is #menu-full, open the full menu
  function applyInitialMenuState() {
    const state = document.querySelector(".menu-state");
    if (!state) return;
    const params = new URLSearchParams(window.location.search);
    const wantFull = params.get("menu") === "full" || window.location.hash === "#menu-full";
    if (wantFull) {
      state.setAttribute("data-menu-state", "full");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyInitialMenuState);
  } else {
    applyInitialMenuState();
  }
})();
