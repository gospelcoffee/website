/* Valo Coffee — bottom smart CTA + Visit modal
 * Sets the CTA label from live status and renders a two-location Visit modal
 * (same design language as the full-menu modal). Reuses window.ValoStatus.
 * No-JS fallback: the CTA is an anchor to #today; the modal ships a static
 * two-location body in the HTML.
 */
(function () {
  "use strict";

  const modal = document.getElementById("visit-modal");
  const cta = document.querySelector("[data-visit-open]");
  if (!modal || !cta || !window.ValoStatus) return;

  const body = modal.querySelector("[data-visit-body]");
  const closers = modal.querySelectorAll("[data-visit-close]");
  let lastFocused = null;
  let locations = null;

  // Button labels only. The location description is sourced from
  // data/locations.json (loc.blurb) so the Visit modal and the Visit Valo
  // section describe each location with one canonical wording.
  const CTA = {
    curbside: "Visit Valo Curbside",
    resort: "Visit Valo Lab",
  };

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function byId(id) {
    return locations.find((l) => l.id === id);
  }

  function updateCta() {
    // "Visit Valo today" only if a location is open and stays open > 1 hour.
    const openLong = locations.some((loc) => {
      const s = window.ValoStatus.getStatus(loc);
      return s.isOpen && s.closesInMinutes !== null && s.closesInMinutes > 60;
    });
    cta.textContent = openLong ? "Visit Valo today" : "Visit Valo";
  }

  function locCard(loc) {
    const s = window.ValoStatus.getStatus(loc);
    const hours = window.ValoStatus
      .buildHoursLines(loc)
      .map((line) => `<li>${esc(line)}</li>`)
      .join("");
    const cta = CTA[loc.id] || "Visit Valo";
    return `
      <section class="visit-loc" data-status-state="${s.isOpen ? (s.closesSoon ? "closing-soon" : "open") : "closed"}">
        <span class="today-name">${esc(loc.name)}</span>
        <div class="today-status">
          <p class="status-line">${esc(s.primary)}</p>
          <p class="status-sub">${esc(s.secondary)}</p>
        </div>
        <ul class="today-hours">${hours}</ul>
        <p class="today-blurb">${esc(loc.blurb)}</p>
        <div class="button-row">
          <a class="button" href="${esc(loc.directionsUrl)}" target="_blank" rel="noopener" data-ga="visit_directions_${esc(loc.id)}">${esc(cta)}</a>
        </div>
      </section>`;
  }

  function renderModal() {
    const curbside = byId("curbside");
    const resort = byId("resort");
    if (!curbside || !resort) return;
    // Valo Lab first only when it is open; otherwise Curbside first.
    const labOpen = window.ValoStatus.getStatus(resort).isOpen;
    const order = labOpen ? [resort, curbside] : [curbside, resort];
    body.innerHTML =
      '<article class="menu-card menu-card-warm visit-card-stack">' +
      order.map(locCard).join("") +
      "</article>";
  }

  function openModal(e) {
    if (e) e.preventDefault();
    if (!modal.hasAttribute("hidden")) return;
    renderModal();
    lastFocused = document.activeElement;
    modal.removeAttribute("hidden");
    document.body.classList.add("menu-modal-open");
    const closeBtn = modal.querySelector(".menu-modal-close");
    if (closeBtn) closeBtn.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function closeModal() {
    if (modal.hasAttribute("hidden")) return;
    modal.setAttribute("hidden", "");
    document.body.classList.remove("menu-modal-open");
    document.removeEventListener("keydown", onKeydown);
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  function onKeydown(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      closeModal();
      return;
    }
    if (e.key === "Tab") trapFocus(e);
  }

  function trapFocus(e) {
    const focusables = modal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  window.ValoStatus.load()
    .then((data) => {
      locations = data.locations;
      updateCta();
      cta.addEventListener("click", openModal);
      closers.forEach((b) => b.addEventListener("click", closeModal));
    })
    .catch(() => {
      /* CTA stays a plain #today anchor; static modal body remains */
    });
})();
