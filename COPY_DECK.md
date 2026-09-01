# Valo Copy Deck

Spec version: 0.8.1 (single-page site). Working draft for brand copy, reconciled to the live
site and `CLAUDE.md`. If this file and `CLAUDE.md` ever disagree, **`CLAUDE.md` and the live
site win** — update this deck to match.

How to use
- Draft and refine copy here, then copy approved text into `index.html` / `data/menu.json` /
  `data/locations.json` and keep the FAQ JSON-LD in sync 1:1 with the on-page philosophy.
- Location names are explicit: **Valo Curbside** (drive-thru) and **Valo Lab** (the sit-down /
  tasting location inside the Prescott Resort lobby). Never "Valo" alone for the sit-down
  location, never "Valo Resort", never "Valo Sit-Down" (retired name).
- "Inside the Prescott Resort" is a wayfinding sub-line, never the location's name.
- The site is **one page** (`/`). `locations.html`, `menu.html`, `philosophy.html` are
  redirect stubs with no visitor-facing copy.

---

## Global Brand Copy

### Core message
- Primary claim: The best coffee in Arizona.
- Retired (do not reintroduce): Chosen by flavor. Made with precision.
- Retired (do not reintroduce): We make the cup around the coffee you want to taste.
- Retired (do not reintroduce): Choose your drink. Choose your bean. The menu uses
  non-imperative category labels (Coffee, Bean Menu, Optional) instead.

The page opens light: the hero grounds the visitor in who Valo is and that it is open daily.
The sections below answer where, when, what's on the menu, and why the coffee is different.
The philosophy is no longer behind a click; it lives in the **Our Philosophy** section near
the bottom of the page as collapsible questions, present but never forced.

### Location naming standard
- Preferred labels: **Valo Curbside** (drive-thru), **Valo Lab** (sit-down / tasting location
  inside the Prescott Resort lobby).
- The sit-down location is **always Valo Lab**. Never "Valo" alone, never "Valo Resort", never
  "Valo Sit-Down" (retired), never "Valo at the Prescott Resort" as the primary name.
- "Inside the Prescott Resort" is a wayfinding sub-line only; never the name or positioning.
- Use Valo Lab consistently in eyebrows, headings, schema.org @name fields, and the
  tasting-experience availability note.
- `#resort` element/anchor IDs and `data-location="resort"` are internal compatibility
  handles and stay as-is (not visitor-facing).

### Menu scope rule
- The Coffee list is: latte (7), cappuccino (7), flat white (7), cortado (5), black coffee (5),
  espresso (5). The $5 black drink is **black coffee** (never just "coffee"). **Cortado is a
  flat $5.** There are **no "traditional or extra milk" sub-lines** anywhere (milk is decided
  at the counter / curbside).
- The homepage preview is intentionally simpler: Coffee = latte 7 / black coffee 5, plus the
  six Beans with the bean note.
- Latte and black coffee are our most popular. We can make any specialty espresso drink to
  order. Never claim drink scope ("just two drinks", "only six drinks").

### Status + hours format
- Status is a quiet **two-line** block: a display line over a smaller sub-line.
  - Open: `Open now` / `Closes at 2 PM`
  - Open but closing in 30 minutes or less: `Open` (prominent) + a quiet "Closing soon" note (subtle/grayed, like the sub-line) / `Closes at 2 PM`
  - Closed: `Closed` / `Opens at 7 AM` (primary line is just "Closed", no "now"; next actual opening: same day `Opens at 7 AM`;
    next day `Opens tomorrow at 7 AM`; further out `Opens Wednesday at 7 AM`).
- Weekly hours list, generated from `data/locations.json`:
  - **Curbside (uniform week):** collapses to two lines, `Open daily` / `7 AM to 2 PM` (the
    word "to" here is a deliberate exception to the en-dash range format).
  - **Valo Lab (varied week):** `Mon – Tue: Closed` / `Wed – Fri: 7 AM – 10 AM` / `Sat – Sun: 7 AM – 2 PM`.
  - Day/range labels use 3-letter abbreviations and an en-dash with spaces (`Mon – Sun`,
    `7 AM – 2 PM`). Omit `:00` minutes (`7 AM`, not `7:00 AM`).

### Dashes rule (site copy)
- Never use en-dash (–) or em-dash (—) anywhere in visitor copy: prose, headlines, eyebrows,
  notes, status text, captions, alt text. Only exceptions: time ranges and number ranges
  (`$5 – 10`) and the weekly hours/day-range format above, where the en-dash is required.
- For pauses or asides, use a comma, colon, period, or rephrase.
- For separators between a title and a price, use a middot (·) or separate elements.

### Flavor-credit voice rule
- We don't "highlight," "bring out," or "enhance" the flavor. The flavor is already there.
  Our role is restraint: we don't add anything that would distract. The point of that
  restraint is the customer's enjoyment. Use verbs about the customer's experience (enjoyed
  clearly), what the flavor does (comes through, stays clear), and what we don't do (never
  add). Avoid highlight / bring out / enhance / draw out / accentuate / amplify. (The old
  approved-brief verbatim lock on philosophy copy was retired in v0.8.1; philosophy copy is
  edited like the rest of the site.)
- **Required lexicon:** "flavor notes" (never "tasting notes" or "flavor profiles");
  "naturally occurring flavor notes" (never "naturally occurring flavors"); "variety /
  varieties" (never "varietal / varietals"). Avoid the bare "natural flavor(s)" (the
  FDA ingredient-list term). Never "smoothness" for espresso (use "balance").

---

## Home Page (`/index.html`) — the entire site

### Metadata
- Page title: Valo Coffee | The Best Coffee in Arizona
- Meta description: Valo Coffee serves the best coffee in Arizona. A simple menu, precise
  recipes, and two locations in Prescott: drive-up at Valo Curbside or sit-down at Valo Lab
  inside the Prescott Resort.
- OG description: Specialty coffee in Prescott, Arizona. Two locations: Valo Curbside for
  drive-thru, or Valo Lab inside the Prescott Resort.
- Twitter: same title/description as OG; summary_large_image.
- JSON-LD: WebSite, Organization, two CafeOrCoffeeShop (`#curbside`, `#resort` named "Valo
  Curbside" / "Valo Lab"), Menu, and FAQPage. Addresses stay in the JSON-LD for SEO even
  though the visible cards no longer show them. The CafeOrCoffeeShop `description` for each
  location matches its canonical card blurb.

### Header
- The Valo wordmark only, on a clean white bar. **No navigation links, no hamburger.** The
  page is one scroll; section CTAs do the moving. Do not reintroduce nav items.

### In-page navigation (hash-free)
- Same-page anchor links (hero/card buttons, skip link) scroll to their section but do **not**
  write `#section` into the address bar; the URL stays `valocoffee.com/`. If a visitor arrives
  with a hash (e.g. from a redirect stub), the page scrolls there once, then strips the hash.
  With JS off, anchors fall back to normal hash behavior.

### Hero (carousel)
- Layout: full-bleed crossfade carousel (3 slides, same approved placeholder image for now,
  distinct alt text per slide), dark gradient overlay, headline + sub + buttons layered on top.
- Headline: The best coffee in Arizona (no trailing period; headline, not sentence)
- Subline: Open daily (quiet uppercase status eyebrow)
- Primary CTA: Visit Valo (scrolls to the Visit Valo section, does not navigate)
- Secondary CTA: See the menu (scrolls to the menu preview, does not navigate)
- Slide alt text (current): "Espresso and milk poured into a Valo coffee cup." / "A coffee
  handoff at Valo Curbside." / "Inside Valo Lab at the Prescott Resort."

### Visit Valo
- Section eyebrow: Visit Valo
- Section anchor: `#today` (internal id kept stable)
- Goal: everything a visitor needs to make the visit: status, hours, brief positioning,
  directions. Curbside card first in source order. **No visible street address on the cards**
  (the address lives only in the JSON-LD for SEO).
- The status line, sub-line, and weekly hours are generated by `status.js` from
  `data/locations.json`; hard-coded fallback strings ship in the HTML for the JS-off case and
  should track the JSON. The card blurb is the canonical wording sourced from
  `data/locations.json` (`loc.blurb`) so the card and the Visit modal read identically.

#### Card: Valo Curbside (`#curbside`)
- Location label: Valo Curbside
- Status fallback: `Open now` / `Closes at 2 PM`
- Hours fallback: `Open daily` / `7 AM to 2 PM`
- Body (canonical): Drive up, stay in your car, and we bring your coffee to you. Specialty
  coffee at drive-thru speeds.
- Voice note: use "drive-thru" (not "drive-through") and "speeds" (plural). Never "the best
  coffee at drive-thru speeds" (that narrows the claim). Best overall, served at drive-thru
  speeds.
- Primary CTA: Get directions (opens Google Maps in a new tab)
- Secondary CTA: View menu (scrolls to the menu preview, does not navigate)

#### Card: Valo Lab (`#resort`)
- Location label: Valo Lab (never "Valo" alone, never "Valo Resort", never "Valo Sit-Down")
- Status fallback: `Open now` / `Closes at 10 AM`
- Hours fallback: `Mon – Tue: Closed` / `Wed – Fri: 7 AM – 10 AM` / `Sat – Sun: 7 AM – 2 PM`
- Body (canonical): Sit down, take in the view. Valo Lab is where we serve the full tasting
  experience and help customers discover the coffee they want.
- Primary CTA: Get directions (opens Google Maps in a new tab)
- Secondary CTA: View menu (scrolls to the menu preview, does not navigate)

### Menu preview
- Section anchor: `#menu`
- **No eyebrow / no heading.** Opens directly with the Coffee group so it reads as a menu,
  not a labeled website section. Warm paper background.
- Coffee-only preview: only Coffee and Beans appear here. The full menu lives in the modal.
  Never claim drink scope.

#### Group: Coffee
- Group label: Coffee
- Items: latte — 7, black coffee — 5
- No support note; no specialty-drink disclaimer here.

#### Group: Beans
- Group label: Beans
- Items (in order): dark & smoky / peru, peanut butter / brazil, strawberry / honduras,
  apple spice / colombia, tropical / papua new guinea, decaf / mexico
- Bean note: Each flavor note listed here is naturally occurring in the bean. Nothing has
  ever been added to the coffee beans.

#### Bottom CTA of the preview
- "View full menu" opens the full-menu **modal** in place (does not navigate). Real
  `<button>`, not a link.

### Full-menu modal
- Accessible name: Full menu (the dialog's `aria-label`).
- Header: Valo wordmark on the left, X close button ("Close menu") on the right. Both close
  the modal; the wordmark is mouse-convenience only (not keyboard-focusable, not announced).
- Layout: a single **stacked** column, never side-by-side major sections. Reading order:
  Coffee drink list → Bean Menu → Optional → Not coffee → Tasting experience → Coffee beans,
  each block separated by the standard spacing rhythm.
- Behavior: focus moves to the X on open and back to the trigger on close; Tab is trapped;
  Escape and a backdrop click close it; background scroll is locked. Deep link
  `/?menu=full` auto-opens it.
- Rendered from `data/menu.json`, with an identical static copy as the no-JS fallback.

### Bottom smart CTA + Visit modal
- **Smart CTA** (`#visit-cta`): a single centered primary button, no other buttons.
  - Label is **"Visit Valo today"** only when at least one location is open and stays open
    for more than one hour; otherwise **"Visit Valo"**.
  - It opens the Visit modal (does not open directions). With JS off it is a plain anchor to
    the Visit Valo section.
- **Visit modal** (`#visit-modal`): reuses the full-menu modal chrome (same width, header,
  X/wordmark close, backdrop, Escape, scroll lock, focus trap).
  - Two location cards stacked vertically. **Valo Lab is listed first only when it is open;
    otherwise Valo Curbside is first.**
  - Each card: location name, two-line status, hours, the same canonical blurb as the Visit
    Valo card (sourced from `data/locations.json`), and one primary button:
    **Visit Valo Lab** / **Visit Valo Curbside**, which opens that location's Google Maps
    directions in a new tab. Both buttons must be visible without scrolling.

### Our Philosophy (on the homepage)
- Position: last content section, anchor `#philosophy`, before the footer.
- Section eyebrow: Our Philosophy
- Opening lede: Every drink on our menu is made with pure, raw ingredients. We do not add
  anything else, so the bean's naturally occurring flavor notes can be enjoyed clearly.
- Five collapsible questions (`<details>`), all collapsed by default, in this exact order.
  Each `<summary>` is the question; the body is the answer. All five are populated and mapped
  1:1 (same order) in the FAQ JSON-LD.

#### 1. What is coffee?
- Body: Coffee, to us, is any drink where you can clearly taste the naturally occurring flavor
  notes of the coffee bean. Every drink you order from our coffee menu follows this philosophy.

#### 2. Where do the flavor notes come from?
- Body: Coffee is the seed of a coffee cherry. Like any fruit, it comes in many varieties.
  For example, a Honeycrisp and a Granny Smith naturally have their own unique flavor notes.
  The same is true of coffee. Every variety carries its own naturally occurring flavor notes.
  The best way to discover how this works is to try our coffee tasting experience at our Valo
  Lab location.

#### 3. Where does our coffee come from?
- Body (two paragraphs):
  1. We sample coffees from around the world looking for beans with clear, recognizable
     flavor notes like strawberry, peach, peanut butter, and apple spice. When we find a
     coffee with those clear, recognizable flavor notes, we buy it as green coffee and roast
     it at our offsite facility.
  2. After roasting, we vacuum seal the coffee in opaque bags so it can offgas with very
     little oxygen, away from light and heat. This protects the beans and helps preserve
     their naturally occurring flavor notes.
- Off-gassing lives only here (it was removed from the espresso answer).

#### 4. How do we make espresso?
- Body: We've questioned every parameter. Heavier doses for clarity. Colder brew temps for
  sweetness. Lower pressure for balance. We even brew each shot differently depending on the
  bean and drink type. We have 21 steps to prep a single puck of espresso. Every detail is
  intentionally tested, and we only keep what proves to be meaningfully better. Each choice
  lets the bean's naturally occurring flavor notes come through so that we can serve you the
  best cup of coffee we know how to make.
- Outstanding (owner to supply exact copy): the modern-espresso rebuild (50% greater dose,
  "pushing modern espresso to the next level", clarity/balance, recipe-per-bean).

#### 5. Why is the menu so simple?
- Body: The fewer things in your cup, the more clearly you can taste the bean. So we keep
  things short, starting with our menu. It lists our most popular drinks, but we're happy to
  make any other drink you might want to order, like a cortado or a cappuccino. Our add-ins
  are just as short: cocoa, vanilla, honey, and maple. Each one is just as simple. Our cocoa
  is just cacao, salt, and water. Our honey is just honey. Our maple is 100% pure maple. Our
  vanilla is pure vanilla extract. And our sweetener list is just as pure and simple. The
  bean stays the choice that matters most.
- Accuracy note: do NOT name specific drinks we "don't sell" (e.g., chai); we do sell a chai
  latte. Keep it about what we use, not what we forbid.
- Outstanding (owner will supply exact copy): tighten this so it does not over-explain the
  add-ins. The retired imperative line "Choose your drink. Choose your bean." stays retired
  (owner: skip / considered satisfied); do not reintroduce it.

- Retired (do not reintroduce): the "How do we make the perfect drink?" question. Also
  retired: a separate philosophy page and any "Read our philosophy" link.
- Stand-alone rule: every question must make sense collapsed; name the subject, end with "?",
  keep it short.
- Cross-answer voice/cadence harmonization is not pursued (owner accepts the per-answer
  voice). Only objective lexicon / flavor-credit rule-fixes apply.

### Footer
- `.footer-simple`: three items only, no headings, no location blocks.
- Phone: 928-910-6087 · Email: support@valocoffee.com · Copyright: © Valo Coffee
- Do not reintroduce location names, addresses, hours, "Get directions" links, or "Prescott,
  Arizona" in the footer; the Visit Valo section already carries that.

---

## Full Menu Content (modal + `data/menu.json`)

Single paper-style card, one stacked column, sections in order: Coffee (drink list + Bean
Menu + Optional) → Not coffee → Tasting experience → Coffee beans.

### Coffee
- Drink list (name bold, price bold), in order: latte 7, cappuccino 7, flat white 7,
  cortado 5, black coffee 5, espresso 5. **No "traditional or extra milk" sub-lines.**
- Bean Menu (sub-label "Bean Menu"; bean bold, origin regular meta): dark & smoky / peru,
  peanut butter / brazil, strawberry / honduras, apple spice / colombia,
  tropical / papua new guinea, decaf / mexico.
- Bean note: Each flavor note listed here is naturally occurring in the bean. Nothing has
  ever been added to the coffee beans.
- Optional (sub-label "Optional"; single flat list, regular weight): vanilla, mocha, caramel,
  sugar, brown sugar, raw sugar, honey, maple, agave, splenda, stevia.
- Voice rule: plain noun-phrase category labels only. Never "pick a drink", "choose your
  bean", "pick add-ins".

### Not coffee
- Section label: Not coffee.
- Items (name regular, price bold): cocoa latte 5, chai latte 7, matcha latte 7, ube latte 7,
  golden latte 7, butterfly lemonade 7, hibiscus lime 7.
- Retired (do not reintroduce): Jamaica. Hibiscus lime already covers that style.

### Tasting experience (Valo Lab only)
- Section label: Tasting experience.
- Availability note at the top (italic, quiet): Tasting experiences are available at Valo
  Lab only.
- Item 1 — coffee tasting experience · 19 · Four coffees of your choice, served as a
  pour-over flight, then any full-size drink from the menu.
- Item 2 — not coffee tasting experience · 19 · Four not coffee lattes of your choice, served
  as a sample flight, then any full-size drink from the menu.
- Verbiage rule: the two descriptions use identical sentence structure; only the
  option-specific words differ.
- Wording rule: always "Tasting experiences are available at Valo Lab only." Never "inside
  the Prescott Resort only" as the primary wording.

### Coffee beans
- Section label: Coffee beans.
- Unit label: half pound bag (italic, lowercase).
- Items: all six beans at 22 each, same labels and order as the Bean Menu (dark & smoky,
  peanut butter, strawberry, apple spice, tropical, decaf). Names regular, prices bold.
- Footnote (italic, quiet): Available at both locations. For custom grinding and vacuum
  sealing, visit Valo Lab.

---

## Legacy redirect stubs (no visitor copy)

`locations.html` → `/#today` · `menu.html` → `/?menu=full#menu` (opens the modal) ·
`philosophy.html` → `/#philosophy`. Each is meta-refresh + canonical to `/` + `noindex` +
`location.replace()` fallback. No headlines, no body copy. On arrival, the hash-free nav
strips the hash so the URL settles at `valocoffee.com/`. Do not turn these back into pages.

`404.html`: the site-wide catch-all. GitHub Pages serves it for any unmatched path, and an
inline script immediately redirects to `/` (or to `/#today`, `/?menu=full#menu`,
`/#philosophy` when the path's first segment looks like a known section:
locations/location/visit/today, menu, philosophy/approach), so `valocoffee.com/anything`
lands on the homepage and section-style paths snap to the section. Brand-only header,
`noindex, follow`, title "Not Found | Valo Coffee"; the visible "Go home" / "View menu" body
is the no-JS fallback only.

---

## Sign-off Checklist
- The site is one page; no standalone Locations/Menu/Philosophy pages.
- The sit-down location is "Valo Lab" everywhere; no "Valo Sit-Down" in visitor copy.
- Curbside appears first in source order; the Visit modal puts Valo Lab first only when open.
- No visible street address on the location cards; addresses remain in the JSON-LD.
- Status is two-line; closing-soon shows `Open` + a quiet "Closing soon" note at ≤30 min to close; Curbside hours read
  "Open daily" / "7 AM to 2 PM".
- Menu: black coffee (not "coffee"), cortado $5, no "traditional or extra milk" sub-lines;
  full menu is one stacked column.
- Bottom smart CTA is one button ("Visit Valo today" only when a location stays open >1 hour,
  else "Visit Valo") and opens the Visit modal.
- Our Philosophy has five collapsibles in order, all populated and 1:1 in the FAQ JSON-LD;
  no "perfect drink" section.
- Lexicon: "flavor notes", "naturally occurring flavor notes", "variety/varieties"; no
  "tasting notes", "flavor profiles", "naturally occurring flavors", "varietal/varietals",
  or "smoothness". No discouraged flavor-credit verbs ("highlight" etc.) in visitor copy.
- No en-dash/em-dash in visitor prose (only the time/number/hours-range exceptions).
- In-page links scroll without putting `#section` in the URL.
- Footer is phone, email, copyright only.
- Copy is concise, inviting, elegant, and direct. No prescriptive recommendation language.
