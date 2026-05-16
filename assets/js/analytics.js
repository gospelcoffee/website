/* Valo Coffee — analytics
 * Sends a uniquely named GA4 event for every meaningful interaction, each
 * enriched with a consistent parameter schema so the user journey is
 * unambiguous in reporting:
 *   ux_area   - region of the page the interaction happened in
 *   ux_action - the verb (what the user did), shared across related events
 *               so they roll up (e.g. every way of closing the menu)
 *   ux_detail - the exact trigger (which button / location / question)
 *   state     - philosophy collapsibles only: "open" or "closed"
 *
 * Location-specific events also carry location_id / location_name.
 *
 * GA4 Key events are matched by event NAME, not parameter value, so the
 * granular events additionally emit a stable rollup event (view_menu /
 * view_location / get_directions) that can be marked as a Key event while
 * source_event / key_event_group retain the exact origin.
 *
 * Event names are declared via data-ga on the element; modal-Escape and the
 * ?menu=full deep link are handled explicitly. No-ops if gtag is unavailable
 * (e.g. blocked), so it never breaks the page.
 */
(function () {
  "use strict";

  /* name -> { ux_area, ux_action, ux_detail }
     Same ux_action across related events lets GA4 group them (e.g. filter
     ux_action = close_full_menu, break down by ux_detail to see whether
     people use the X, the wordmark, the backdrop, or Escape). */
  const META = {
    hero_visit_valo:          { ux_area: "hero",         ux_action: "scroll_to_visit_valo", ux_detail: "hero_button" },
    hero_see_menu:            { ux_area: "hero",         ux_action: "scroll_to_menu",       ux_detail: "hero_button" },
    viewmenu_curbside:        { ux_area: "visit_valo",   ux_action: "scroll_to_menu",       ux_detail: "curbside_card", location_id: "curbside", location_name: "Valo Curbside" },
    viewmenu_sitdown:         { ux_area: "visit_valo",   ux_action: "scroll_to_menu",       ux_detail: "sitdown_card",  location_id: "sitdown",  location_name: "Valo Sit-Down" },
    directions_curbside:      { ux_area: "visit_valo",   ux_action: "get_directions",       ux_detail: "curbside",      location_id: "curbside", location_name: "Valo Curbside" },
    directions_sitdown:       { ux_area: "visit_valo",   ux_action: "get_directions",       ux_detail: "sitdown",       location_id: "sitdown",  location_name: "Valo Sit-Down" },
    full_menu_open:           { ux_area: "menu_preview", ux_action: "open_full_menu",       ux_detail: "view_full_menu_button" },
    menu_deeplink_opened:     { ux_area: "full_menu",    ux_action: "open_full_menu",       ux_detail: "deeplink" },
    full_menu_close_x:        { ux_area: "full_menu",    ux_action: "close_full_menu",      ux_detail: "x_button" },
    full_menu_close_wordmark: { ux_area: "full_menu",    ux_action: "close_full_menu",      ux_detail: "wordmark" },
    full_menu_close_backdrop: { ux_area: "full_menu",    ux_action: "close_full_menu",      ux_detail: "backdrop" },
    full_menu_close_escape:   { ux_area: "full_menu",    ux_action: "close_full_menu",      ux_detail: "escape_key" },
    philosophy_what_is_coffee:{ ux_area: "philosophy",   ux_action: "toggle_question",      ux_detail: "what_is_coffee" },
    philosophy_tasting_notes: { ux_area: "philosophy",   ux_action: "toggle_question",      ux_detail: "tasting_notes" },
    philosophy_menu_simple:   { ux_area: "philosophy",   ux_action: "toggle_question",      ux_detail: "menu_simple" },
    philosophy_espresso:      { ux_area: "philosophy",   ux_action: "toggle_question",      ux_detail: "espresso" },
    contact_phone:            { ux_area: "footer",       ux_action: "contact",              ux_detail: "phone" },
    contact_email:            { ux_area: "footer",       ux_action: "contact",              ux_detail: "email" }
  };

  /* Granular event name -> stable rollup name. GA4 Key events match on name,
     so marking these three rollups as Key events captures every entry point
     while source_event / key_event_group preserve the exact origin. */
  const ROLLUP_EVENTS = {
    hero_visit_valo:      "view_location",
    hero_see_menu:        "view_menu",
    viewmenu_curbside:    "view_menu",
    viewmenu_sitdown:     "view_menu",
    full_menu_open:       "view_menu",
    menu_deeplink_opened: "view_menu",
    directions_curbside:  "get_directions",
    directions_sitdown:   "get_directions"
  };

  function track(name, extra) {
    if (!name || typeof window.gtag !== "function") return;
    const params = Object.assign({}, META[name] || {}, extra || {});
    window.gtag("event", name, params);

    const rollupName = ROLLUP_EVENTS[name];
    if (rollupName) {
      window.gtag(
        "event",
        rollupName,
        Object.assign({}, params, {
          source_event: name,
          key_event_group: rollupName
        })
      );
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

  /* Philosophy collapsibles: one unique event name per question, plus the
     open/closed direction so you can see what people actually expand. */
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
