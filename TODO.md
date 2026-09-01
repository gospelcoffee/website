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

---

## PARKED — bean roster follow-ups (tracked in CLAUDE.md v0.8.4 note)

### New bean: lemon drop / burundi — confirmed, deliberately NOT on the site

**Status:** lot detail in hand, held back by owner decision. Do not add it to `data/menu.json`,
the JSON-LD, the homepage preview, or the no-JS fallbacks until the owner says it is live.

- Name: `lemon drop` · Origin: `burundi`
- Farm: Masha · Region: Gatara, Kayanza · Variety: Bourbon · Process: washed
- Elevation: 1672 MASL · Microlot
- Price: assumed 22 (half pound bag), same as every other bean — **confirm before shipping**.
- Slot in the fixed bean order is undecided. Today's order is dark & smoky, peanut butter,
  strawberry, apple spice, tropical, decaf (decaf always last).
- **A seventh bean breaks the "six beans" wording** in `CLAUDE.md` sections 6 and 10 and in
  `COPY_DECK.md` — those lines must be updated in the same pass. CSS needs no change:
  `.beans-card .menu-list { columns: 2 }` auto-balances 7 items as 4 + 3.
- Open question: does lemon drop replace another bean, or does the roster grow to seven?

### Peach / colombia — temporarily unavailable, NOT retired

Removed from all seven live surfaces in v0.8.4. Unlike Jamaica it may return, so it is not on
the retired list. If it comes back it goes into all seven surfaces at an owner-chosen slot,
with this attribution:

- Producer: Diego Bermudez · Farm: Finca El Paraiso · Region: Cauca, Colombia
- Variety and process: **TBC** (not lot-confirmed)

Note the philosophy answer "Where does our coffee come from?" still names peach as an example
flavor note, in `index.html` (on-page `<details>` and the FAQ JSON-LD, kept 1:1) and
`COPY_DECK.md`. That is deliberate — it describes sourcing criteria, not current stock — and it
preserves the only indexable "peach" token on the site.

### Outstanding bean attributions

Producer metadata (see CLAUDE.md section 10) is incomplete:

- `tropical` (papua new guinea) — no attribution at all.
- `decaf` (mexico) — no attribution at all.
- `apple spice` (colombia) — "Castillo variety, thermal shock fermentation" is inferred from
  Finca El Paraiso's documented house method, **not confirmed for this lot**. Verify or replace.

Supplying a supplier lot page resolves each the same way lots `P614006-2` (Covoya, Peru Selva
Norte) and `39429` (Royal, Brazil Cerrado) did: a few keys in `data/menu.json` plus one
JSON-LD `description` string per bean. No restructuring needed.
