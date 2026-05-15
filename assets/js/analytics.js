/* Valo Coffee — analytics
 * Sends a uniquely named GA4 event for every meaningful interaction.
 * Event names are declared via data-ga on the element; modal-Escape and the
 * ?menu=full deep link are handled explicitly. No-ops if gtag is unavailable
 * (e.g. blocked), so it never breaks the page.
 */
(function () {
  "use strict";

  function track(name, params) {
    if (!name) return;
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params || {});
    }
  }

  /* Click-driven events: any element (or ancestor) carrying data-ga.
     <details data-ga> is skipped here — its open/close is tracked via the
     toggle event below so we record state, not raw clicks. */
  document.addEventListener("click", function (e) {
    const el = e.target.closest("[data-ga]");
    if (!el || el.tagName === "DETAILS") return;
    track(el.getAttribute("data-ga"));
  });

  /* Philosophy collapsibles: one unique event name per question, with the
     open/closed state as a parameter. */
  document.querySelectorAll("details[data-ga]").forEach(function (d) {
    d.addEventListener("toggle", function () {
      track(d.getAttribute("data-ga"), { state: d.open ? "open" : "closed" });
    });
  });

  /* Full-menu modal closed via the Escape key. Capture phase so we observe
     the modal while it is still open, before menu.js handles the close. */
  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key !== "Escape") return;
      const modal = document.getElementById("menu-modal");
      if (modal && !modal.hasAttribute("hidden")) {
        track("full_menu_close_escape");
      }
    },
    true
  );

  /* Full menu opened via the /?menu=full deep link (no click to catch). */
  if (new URLSearchParams(location.search).get("menu") === "full") {
    track("menu_deeplink_opened");
  }
})();
