# Valo Copy Deck

Spec version: 0.7 (single-page site). Use this file as the single working draft for brand copy.

> **Out of date:** the live site and `CLAUDE.md` are the source of truth (now v0.8.1). This draft still reflects v0.7 in places (old "Valo Sit-Down" name, pre-v0.8 menu, on-card addresses). Only the philosophy / lexicon copy below has been re-synced for the v0.8.1 pass; treat everything else here as historical until a full reconciliation.

How to use
- Edit copy in this file first.
- Keep location references explicit: Valo Curbside (drive-thru) or Valo Sit-Down (the sit-down location inside the Prescott Resort). Never write "Valo" alone for the sit-down location. Never write "Valo Resort".
- "Inside the Prescott Resort" is a wayfinding sub-line, not the location's name.
- After edits are approved, copy updates into `index.html` / `data/menu.json` / `data/locations.json` and publish.
- The site is **one page** (`/`). `locations.html`, `menu.html`, `philosophy.html` are redirect stubs with no visitor-facing copy.

---

## Global Brand Copy

### Core message
- Primary claim: The best coffee in Arizona.
- Retired (do not reintroduce): Chosen by flavor. Made with precision.
- Retired (do not reintroduce): We make the cup around the coffee you want to taste.
- Retired (do not reintroduce): Choose your drink. Choose your bean. The menu uses non-imperative category labels (Coffee, Bean Menu, Optional) instead.

The page opens light: the hero grounds the visitor in who Valo is and that it is open daily. The sections below answer where, when, what's on the menu, and why the coffee is different. The philosophy is no longer behind a click — it lives in the **Our Philosophy** section near the bottom of the page as collapsible questions, present but never forced.

### Location naming standard
- Preferred labels: Valo Curbside (drive-thru), Valo Sit-Down (sit-down location inside the Prescott Resort).
- The sit-down location is **always Valo Sit-Down**. Never "Valo" alone, never "Valo Resort", never "Valo at the Prescott Resort" as the primary name.
- "Inside the Prescott Resort" is a wayfinding sub-line that can appear on an address card. It is never the location's name or positioning line.
- Use Valo Sit-Down consistently in eyebrows, headings, schema.org @name fields, and the tasting-experience availability note.

### Menu scope rule
- The Coffee list includes latte (7), coffee (5), cappuccino (7), flat white (7), cortado (5–7), and espresso (5). Cappuccino, flat white, and cortado each show "traditional or extra milk" as a regular-weight sub-line. Cortado's 5–7 price varies by traditional vs. extra milk.
- Latte and coffee are our most popular. We can make any specialty espresso drink to order.
- Never claim drink scope ("just two drinks", "only six drinks"). The menu is short, not prohibitive.

### Hours format
- Always show AM/PM on both sides of a time range, separated by an en-dash with spaces in prose ("7 AM – 6 PM"); the dynamically rendered weekly-hours list uses an en-dash with no spaces ("7 AM–6 PM"). Never "7–6 PM", never "7 AM to 6 PM".
- Omit minutes when they are :00 ("7 AM", not "7:00 AM"). Show minutes only when non-zero ("6:30 AM").
- Day-range abbreviations (Mon–Sun, Wed–Fri, Sat–Sun) keep their en-dash without spaces.

### Dashes rule (site copy)
- Never use en-dash (–) or em-dash (—) anywhere in site copy: prose, headlines, eyebrows, notes, status text, captions, alt text. Only exceptions: time ranges (7 AM – 6 PM) and number ranges ($5–10), where the en-dash is required.
- For pauses or asides, use a comma, colon, period, or rephrase.
- For separators between a title and a price, use a middot (·) or restructure into separate elements.

### Flavor-credit voice rule
- We don't "highlight," "bring out," or "enhance" the flavor. The flavor is already there. Our role is restraint: we don't add anything that would distract. The point of that restraint is the customer's enjoyment. Use verbs about the customer's experience (enjoyed clearly), what the flavor does (comes through, stays clear), and what we don't do (never add). Avoid highlight/bring out/enhance/draw out/accentuate/amplify.
- **Verbatim lock retired (v0.8.1):** the old "approved-brief verbatim lock" on the Our Philosophy copy no longer applies; the owner has directed the lexicon below and philosophy copy is edited like the rest of the site.
- **Required lexicon (v0.8.1):** "flavor notes" (never "tasting notes" or "flavor profiles"); "naturally occurring flavor notes" (never "naturally occurring flavors"); "varietal/varietals" (never "variety/varieties"). Still avoid the bare "natural flavor(s)" (FDA ingredient-list term).

---

## Home Page (`/index.html`) — the entire site

### Metadata
- Page title: Valo Coffee | The Best Coffee in Arizona
- Meta description: Valo Coffee serves the best coffee in Arizona. A simple menu, precise recipes, and two locations in Prescott: drive-up at Valo Curbside or sit-down at Valo Sit-Down inside the Prescott Resort.
- OG title: Valo Coffee | The Best Coffee in Arizona
- OG description: Specialty coffee in Prescott, Arizona. Two locations: Valo Curbside for drive-thru, or Valo Sit-Down inside the Prescott Resort.
- Twitter: same title/description as OG; summary_large_image.

### Header
- The Valo wordmark only, on a clean white bar. **No navigation links, no hamburger.** The page is one scroll; section CTAs do the moving. Do not reintroduce nav items.

### Hero (carousel)
- Layout: full-bleed crossfade carousel (3 slides, same approved placeholder image for now, distinct alt text per slide), dark gradient overlay, headline + sub + buttons layered on top.
- Headline: The best coffee in Arizona (no trailing period — headline, not sentence)
- Subline: Open daily (quiet status eyebrow — uppercase, letter-spaced, small, white ~90% opacity)
- Primary CTA: Visit Valo (scrolls to #today, does not navigate)
- Secondary CTA: See the menu (scrolls to #menu, does not navigate)
- Slide alt text (current): "Espresso and milk poured into a Valo coffee cup." / "A coffee handoff at Valo Curbside." / "Inside Valo Sit-Down at the Prescott Resort."

### Visit Valo
- Section eyebrow: Visit Valo
- Section anchor: #today (the hero "Visit Valo" button scrolls here)
- Goal: everything a visitor needs to make the visit — status, hours, address, brief positioning, directions. Curbside card first.

#### Card: Valo Curbside (`#curbside`)
- Location label: Valo Curbside
- Status line fallback: Open today until 6 PM
- Weekly hours fallback: Mon–Sun: 7 AM–6 PM
- Address line 1: 1500 AZ-69D
- Address line 2: Prescott, Arizona
- Body: Drive up, stay in your car, and we bring your coffee to you. Specialty coffee at drive-thru speeds.
- Voice note: use "drive-thru" (not "drive-through") and "speeds" (plural). Never "the best coffee at drive-thru speeds" — that narrows the claim. Valo's claim is best overall, served at drive-thru speeds.
- Primary CTA: Get directions (opens Google Maps in a new tab)
- Secondary CTA: View menu (scrolls to #menu, does not navigate)

#### Card: Valo Sit-Down (`#resort`)
- Location label: Valo Sit-Down (never "Valo" alone, never "Valo Resort")
- Status line fallback: Open today until 10 AM
- Weekly hours fallback: Mon–Tue: Closed / Wed–Fri: 7 AM–10 AM / Sat–Sun: 7 AM–2 PM
- Address line 1: 1500 AZ-69
- Address line 2: Prescott, Arizona · Inside the Prescott Resort
- Body: Sit down, take in the view of Prescott, and try our coffees. The Valo tasting experience lives here.
- Length convention: Visit Valo card blurbs are sized to roughly match each other (about 100 characters).
- Primary CTA: Get directions (opens Google Maps in a new tab)
- Secondary CTA: View menu (scrolls to #menu, does not navigate)

> The live status line and weekly hours are generated by `status.js` from `data/locations.json`. The fallback strings above ship in the HTML for the JS-off case and should track the JSON.

### Menu preview
- Section anchor: #menu (the hero "See the menu" button and both card "View menu" buttons scroll here)
- **No eyebrow / no heading.** The section opens directly with the Coffee group so it reads as a menu, not a labeled website section. Do not reintroduce a "Menu" label here.
- Background: warm paper (section-warm), so the menu reads like a menu and provides a visual split between the white sections above and below. No dividers needed around it.
- Coffee-only preview: only Coffee and Beans appear here. The full menu (Not coffee, Tasting experience, Coffee beans, Optional) lives in the modal. Never claim drink scope.

#### Group: Coffee (left column)
- Group label: Coffee
- Item: latte — 7
- Item: black coffee — 5
- No support note. Do not reintroduce a specialty-drink disclaimer here.

#### Group: Beans (right column)
- Group label: Beans
- Items (in order): dark & smoky / colombia, peanut butter / brazil, peach / colombia, strawberry / honduras, apple spice / colombia, decaf / mexico
- Support note: Each flavor note listed here is naturally occurring in the bean. Nothing has ever been added to the coffee beans.

#### Bottom CTA
- CTA: View full menu — opens the full-menu **modal** in place (does not navigate). The button is a real `<button>`, not a link.

### Full-menu modal
- Accessible name: Full menu (the dialog's `aria-label`).
- Header: Valo wordmark on the left, X close button on the right. Both close the modal. The X is labeled "Close menu" (its `aria-label`); the wordmark is a mouse-convenience close target only (not keyboard-focusable, not announced).
- Body content is the full menu — see "Full Menu Content" below. Rendered from `data/menu.json`, with an identical static copy as the no-JS fallback.
- No visitor-facing prose beyond the menu itself and the close affordance.

### Our Philosophy (on the homepage)
- Position: last content section, anchor #philosophy, before the footer.
- Section eyebrow: Our Philosophy
- Opening lede: Every drink on our menu is made with pure, raw ingredients. We do not add anything else, so the bean's naturally occurring flavor notes can be enjoyed clearly.
- Then five collapsible questions (`<details>`), all collapsed by default, in this order. Each `<summary>` is the question; the body is the answer.

#### 1. What is coffee?
- Body: Coffee, to us, is any drink where you can clearly taste the natural flavor notes of the coffee bean. Any drink you order from our coffee menu highlights this philosophy.

#### 2. Where do the flavor notes come from?
- Body: Coffee is the seed of a coffee cherry. Like any fruit, it comes in many varietals. For example, a Honeycrisp and a Granny Smith naturally have their own unique flavor notes. The same is true of coffee. Every varietal carries its own naturally occurring flavor notes. We source beans with relatable and recognizable flavor notes such as strawberry, peach, and peanut butter. The best way to discover how this works is to try our coffee tasting experience at our Valo Lab location.

#### 3. Where does our coffee come from?
- Body: **(empty placeholder — owner to supply copy.)** Shipped as a summary-only collapsible; excluded from the FAQ JSON-LD until it has body copy. Deferred here: moving the off-gassing explanation in (revision item 5).

#### 4. Why is the menu so simple?
- Body: The fewer things in your cup, the more clearly you can taste the bean. So we keep things short, starting with our menu. It lists our most popular drinks, but we're happy to make any other drink you might want to order, like a cortado or a cappuccino. Our add-ins are just as short: cocoa, vanilla, honey, and maple. Each one is just as simple. Our cocoa is just cacao, salt, and water. Our honey is just honey. Our maple is 100% pure maple. Our vanilla is pure vanilla extract. And our sweetener list is just as pure and simple. The bean stays the choice that matters most.
- Accuracy note: do NOT name specific drinks we "don't sell" (e.g., chai). We do sell a chai latte. Keep it about what we use, not what we forbid.

#### 5. How do we make espresso?
- Body: We've questioned every parameter. Heavier doses for clarity. Colder brew temps for sweetness. Lower pressure for balance. We even brew each shot differently depending on the bean and drink type. We offgas our beans because trapped carbon dioxide from roasting causes the coffee to taste bitter. We have 21 steps to prep a single puck of espresso. Every detail is intentionally tested, and we only keep what proves to be meaningfully better. Each choice lets us highlight the bean's naturally occurring flavor notes so that we can serve you the best cup of coffee we know how to make.

- Retired (do not reintroduce): the "How do we make the perfect drink?" question and its paragraph. Also retired: a separate philosophy page and any "Read our philosophy" link.
- Stand-alone rule: every question must make sense collapsed — name the subject, end with "?", keep it ~4–7 words.

### Footer
- `.footer-simple`: three items only, no headings, no location blocks.
- Phone: 928-910-6087
- Email: support@valocoffee.com
- Copyright: © Valo Coffee
- Do not reintroduce location names, addresses, hours, "Get directions" links, or "Prescott, Arizona" in the footer — the Visit Valo section already carries that.

---

## Full Menu Content (modal + `data/menu.json`)

One paper-style card, sections in order: Coffee (Drinks + Bean Menu + Optional) → Not coffee → Tasting experience → Coffee beans.

### Coffee
- Drinks (name bold, price bold): latte 7, coffee 5, cappuccino 7 (regular sub-line "traditional or extra milk"), flat white 7 (sub-line "traditional or extra milk"), cortado 5–7 (sub-line "traditional or extra milk"), espresso 5.
- Bean Menu (sub-label "Bean Menu"; bean bold, origin regular meta): dark & smoky / colombia, peanut butter / brazil, peach / colombia, strawberry / honduras, apple spice / colombia, decaf / mexico.
- Bean note: Each flavor note listed here is naturally occurring in the bean. Nothing has ever been added to the coffee beans.
- Optional (sub-label "Optional"; single flat list, regular weight, no sub-headings): vanilla, mocha, caramel, sugar, brown sugar, honey, maple, splenda, stevia.
- Voice rule: plain noun-phrase category labels only. Never "pick a drink", "choose your bean", "pick add-ins".

### Not coffee
- Section label: Not coffee.
- Items (name regular, price bold): cocoa latte 5, chai latte 7, matcha latte 7, ube latte 7, golden latte 7, butterfly lemonade 7, hibiscus yuzu 7.
- Retired (do not reintroduce): Jamaica. Hibiscus yuzu already covers that style.

### Tasting experience (Valo Sit-Down only)
- Section label: Tasting experience.
- Availability note at the top (italic, quiet): Tasting experiences are available at Valo Sit-Down only.
- Item 1 — coffee tasting experience · 19 · Four coffees of your choice, served as a pour-over flight, then any full-size drink from the menu.
- Item 2 — not coffee tasting experience · 19 · Four not coffee lattes of your choice, served as a sample flight, then any full-size drink from the menu.
- Verbiage rule: the two descriptions use identical sentence structure; only the option-specific words differ.
- Wording rule: always "Tasting experiences are available at Valo Sit-Down only." Never "inside the Prescott Resort only" as the primary wording.

### Coffee beans
- Section label: Coffee beans.
- Unit label: half pound bag (italic, lowercase).
- Items: all six beans at 22 each, same labels and order as the Bean Menu (dark & smoky, peanut butter, peach, strawberry, apple spice, decaf). Names regular, prices bold.
- Footnote (italic, quiet): Available at both locations. For custom grinding and vacuum sealing, visit Valo Sit-Down.

---

## Legacy redirect stubs (no visitor copy)

`locations.html` → `/#today` · `menu.html` → `/?menu=full#menu` (opens the modal) · `philosophy.html` → `/#philosophy`. Each is meta-refresh + canonical to `/` + `noindex` + `location.replace()` fallback. No headlines, no body copy. Do not turn these back into pages.

`404.html`: brand-only header, `noindex, follow`, title "Not Found | Valo Coffee", a short not-found message, "Go home" (`/`) and "View menu" (`/?menu=full#menu`) buttons.

---

## Sign-off Checklist
- The site is one page; no standalone Locations/Menu/Philosophy pages.
- Every location mention is explicit or clearly anchored by section context.
- Curbside appears first in dual-location contexts.
- Sit-Down is clearly positioned as the tasting-experience destination.
- Footer is phone, email, copyright only.
- Full menu opens in the modal; menu/preview use category labels, never imperatives or scope claims.
- Our Philosophy is on the homepage with five collapsible questions (the fifth an empty placeholder, excluded from FAQ JSON-LD); no "perfect drink" section.
- Copy is concise, inviting, elegant, and direct. No prescriptive recommendation language.
