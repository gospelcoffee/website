# Valo Coffee — Backlog / Potential To-Dos

Not visitor-facing. Items here are **not scheduled** — they need decisions before work starts.
`CLAUDE.md` and the live site remain the source of truth.

---

## POTENTIAL — Map / "Get directions" link strategy

**Status:** idea, not approved. Needs the questions below answered first.

**Today:** every directions button (Visit Valo cards + Visit modal) points at a Google Maps
short link (`https://maps.app.goo.gl/…`, stored as `directionsUrl` in `data/locations.json`):
- Curbside: `https://maps.app.goo.gl/pQiKMV2w1YkQii3p9`
- Valo Lab: `https://maps.app.goo.gl/BHweLz91EeAwYa32A`

**Current behavior:** functional for everyone, but never opens Apple Maps. iPhone with the
Google Maps app → opens that app. iPhone without it → Google Maps **mobile web** in Safari
(works, but shows "get the app" nags and pushes hard toward installing for directions).
Desktop/Android → Google Maps web/app. So no dead end, but a worse experience for the
"Apple-Maps-only iPhone" visitor, and Apple Maps is bypassed entirely.

**Possible direction:** keep the single button, but choose the destination on click —
iOS/macOS → an Apple Maps URL, everything else → the existing Google link. No visual change.

### Open questions to resolve before doing this
1. **iOS user who has deleted Apple Maps** (removable since iOS 15): what does a
   `maps.apple.com/…` link do then — error page, silent fail, or OS fallback? Need a defined
   fallback chain (e.g., Apple Maps → Google Maps web) and a way to trigger it without being
   able to detect an app-open failure in JS.
2. **Platform detection reliability:** iPadOS reports as macOS Safari; in-app browsers
   (Instagram/Facebook/TikTok webviews) handle universal links and `maps:`/`geo:` schemes
   inconsistently and may not open native apps at all. What detection strategy is acceptable?
3. **No-JS behavior:** the button is a plain anchor today and works without JS. A
   click-time swap must keep a sensible default `href` for the JS-off / crawler case (which
   one — Google?).
4. **Pin precision:** Apple Maps by address/name can mis-resolve, especially "Valo Lab"
   inside the Prescott Resort. We likely need exact lat/long per location (resolve from the
   Google short links or owner-provided) and a chosen URL format.
5. **Intent:** should the link *show the location* or *start turn-by-turn navigation*
   (`daddr`/`destination`)? Differs per platform and changes the URL.
6. **Android without Google Maps app:** confirm the geo/Google link still degrades cleanly
   in the mobile browser.
7. **macOS/desktop:** keep opening Google Maps web in a new tab (current behavior) or route
   Mac users to the Apple Maps app too? Decide desktop policy.
8. **Analytics:** the directions events (`data-ga` `visit_directions_*` / `directions_*`)
   must still fire regardless of which maps target is chosen. **Do not rename existing
   tags/events.**
9. **Maintainability:** if we store both an Apple and a Google URL per location in
   `data/locations.json`, they must be kept in sync; decide the data shape.

---

## PARKED — awaiting owner-supplied copy (tracked in CLAUDE.md v0.8.1 note)

- **#1 "How do we make espresso?" rewrite** (revision item 6) — owner will provide exact
  text (modern espresso, ~50% greater dose, intentional testing, clarity, balance,
  recipe-per-bean/drink; no off-gassing — that lives in "Where does our coffee come from?";
  no flavor-credit verbs; lexicon rules apply).
- **#2 Tighten "Why is the menu so simple?"** (revision item 8) — owner will provide exact
  edits (drop the long "Our cocoa is just… honey is just… maple is just…" enumeration; show
  how to choose, not what to order; retired "Choose your drink. Choose your bean." stays
  retired).

When copy arrives: wire each into `index.html` on-page `<details>` **and** the matching FAQ
JSON-LD answer (kept 1:1, same order) **and** `COPY_DECK.md`; then mark done in `CLAUDE.md`.
