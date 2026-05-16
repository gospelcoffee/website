/* Valo Coffee — hash-free in-page navigation
 * Same-page anchor links (e.g. href="#menu") scroll to their section without
 * writing "#menu" into the address bar — the URL stays valocoffee.com/.
 * If a visitor arrives with a hash (e.g. from a legacy redirect stub like
 * /#today), we scroll there once and then strip the hash.
 * No-JS fallback: anchors work normally (the hash appears, which is fine).
 */
(function () {
  "use strict";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  function scrollToId(id, smooth) {
    const target = document.getElementById(id);
    if (!target) return false;
    target.scrollIntoView({
      behavior: smooth && !reduce.matches ? "smooth" : "auto",
      block: "start",
    });
    // Move focus for keyboard / screen-reader users without re-scrolling.
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    return true;
  }

  function stripHash() {
    if (!location.hash) return;
    history.replaceState(null, "", location.pathname + location.search);
  }

  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey ||
        e.shiftKey || e.altKey) return;

    const link = e.target.closest('a[href]');
    if (!link) return;

    // Leave dedicated handlers (Visit modal CTA, full-menu opener) alone.
    if (link.hasAttribute("data-visit-open") ||
        link.hasAttribute("data-menu-open")) return;

    const href = link.getAttribute("href");
    // Same-page fragment only: "#id" or "/#id" (defensive for stub-style).
    const m = href && href.match(/^\/?#(.+)$/);
    if (!m) return;

    if (scrollToId(m[1], true)) {
      e.preventDefault(); // ...so the "#id" is never added to the URL
      stripHash();
    }
  });

  // Arrived with a hash (legacy stub redirect / shared old link): honor it
  // once, then clean the URL so it reads valocoffee.com/.
  window.addEventListener("load", function () {
    const id = location.hash ? location.hash.slice(1) : "";
    if (id) {
      scrollToId(id, false);
      stripHash();
    }
  });
})();
