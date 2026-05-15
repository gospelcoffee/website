# Valo Copy Deck

Use this file as the single working draft for brand copy updates.

How to use
- Edit copy in this file first.
- Keep location references explicit: Valo Curbside (drive-thru) or Valo Sit-Down (the sit-down location inside the Prescott Resort). Never write "Valo" alone for the sit-down location. Never write "Valo Resort".
- "Inside the Prescott Resort" is a wayfinding sub-line, not the location's name.
- After edits are approved, copy updates into page files and publish.

---

## Global Brand Copy

### Core message
- Primary claim: The best coffee in Arizona.
- Retired (do not reintroduce): Chosen by flavor. Made with precision.
- Retired (do not reintroduce): We make the cup around the coffee you want to taste.
- Retired (do not reintroduce): Choose your drink. Choose your bean. The menu uses non-imperative category labels (Drinks, Bean Menu, Optional) instead.

The home page stays light. It does not try to explain the philosophy — it grounds the visitor in who Valo is, where Valo is, when Valo is open, and what is on the menu. The philosophy page is where the deeper why lives.

### Location naming standard
- Preferred labels: Valo Curbside (drive-thru), Valo Sit-Down (sit-down location inside the Prescott Resort).
- The sit-down location is **always Valo Sit-Down**. Never "Valo" alone, never "Valo Resort", never "Valo at the Prescott Resort" as the primary name.
- "Inside the Prescott Resort" is a wayfinding sub-line that can appear on an address card. It is never the location's name or positioning line.
- Use Valo Sit-Down consistently in titles, eyebrows, headings, footer labels, page titles, schema.org @name fields, and the tasting-experience availability note.

### Menu scope rule
- The Coffee list now includes latte, coffee, cappuccino, flat white, cortado, and espresso. Only latte (7) and coffee (5) carry printed prices. Cappuccino and flat white show "traditional or extra milk" as a sub-line.
- Latte and coffee are our most popular. We can make any specialty espresso drink to order.
- Never claim drink scope ("just two drinks", "only six drinks"). The menu is short, not prohibitive.

### Hours format
- Always show AM/PM on both sides of a time range, separated by an en-dash with spaces: "7 AM – 6 PM", not "7–6 PM", not "7 AM to 6 PM".
- Omit minutes when they are :00 ("7 AM", not "7:00 AM"). Show minutes only when non-zero ("6:30 AM").
- Day-range abbreviations (Wed–Fri, Sat–Sun) keep their en-dash without spaces. Hour ranges use spaces.

### Dashes rule (site copy)
- Never use en-dash (–) or em-dash (—) anywhere in site copy: prose, headlines, eyebrows, notes, status text, captions, alt text. Only exceptions: time ranges (7 AM – 6 PM) and number ranges ($5–10), where the en-dash is required.
- For pauses or asides, use a comma, colon, period, or rephrase ("Nothing added before or after the roast." not "Nothing added — before or after the roast.").
- For separators between a title and a price, use a middot (·) or restructure into separate elements ("Tasting experiences · 19" not "Tasting experiences — 19").

---

## Home Page (`/index.html`)

### Metadata
- Page title: Valo Coffee | The Best Coffee in Arizona
- Meta description: Valo Coffee serves the best coffee in Arizona. A simple menu, precise recipes, and two locations in Prescott: drive-up at Valo Curbside or sit-down at Valo Sit-Down inside the Prescott Resort.
- OG title: Valo Coffee | The Best Coffee in Arizona
- OG description: Specialty coffee in Prescott, Arizona. Two locations: Valo Curbside for drive-thru, or Valo Sit-Down inside the Prescott Resort.

### Header / Navigation
- Per-page nav rule: the current page is never present in its own header nav. On non-home pages, "Home" is added as the first nav item so the visitor can get back. Order is always: Home (when shown) → Locations → Menu → Philosophy, with the current page omitted.
  - Home page (/): Locations, Menu, Philosophy. No "Home" item. All three are in-page anchors (#today, #menu, #philosophy).
  - Locations page: Home, Menu, Philosophy. Home leads; Locations is omitted.
  - Menu page: Home, Locations, Philosophy. Home leads; Menu is omitted.
  - Philosophy page: Home, Locations, Menu. Home leads; Philosophy is omitted.
- "Home" links to `/` (the site root).
- A previous "Get directions" nav item was removed because it duplicated Locations. Do not reintroduce it. Directions are still reachable via the Get directions buttons inside each location card and footer.
- Dual-mode rule: on the home page every nav link stays on the page (in-page anchors). On every other page, the nav navigates between pages. Visitors reach the deeper pages on the home page via section CTAs (View full menu, Get directions on each location card, Read our philosophy).

### Hero
- Layout: full-width banner. Featured image covers the section edge-to-edge with a dark gradient overlay so the headline and buttons read with strong contrast.
- Headline: The best coffee in Arizona (no trailing period - headline, not sentence)
- Subline: Open daily (styled as a quiet status eyebrow - uppercase, letter-spaced, small, white at ~90% opacity)
- Primary CTA: View locations (scrolls to #today on the same page, does not navigate)
- Secondary CTA: View menu (scrolls to #menu on the same page, does not navigate) (scrolls to #menu on the same page, does not navigate)

### Visit Valo
- Section eyebrow: Visit Valo
- Section anchor: #today (the hero "View locations" button scrolls here)
- Goal: this section gives a visitor everything they need to make the visit - status, hours, address, brief positioning, directions.

#### Card: Valo Curbside
- Location label: Valo Curbside
- Status headline fallback: Open daily
- Status meta fallback: 7 AM – 6 PM
- Address line 1: 1500 AZ-69D
- Address line 2: Prescott, Arizona
- Body: Drive up, stay in your car, and we bring your coffee to you. Specialty coffee at drive-thru speeds.
- Voice note: use "drive-thru" (not "drive-through") and "speeds" (plural). Never write "the best coffee at drive-thru speeds" — "best" in that phrase narrows the claim to "best for a drive-thru" rather than best overall. Valo's claim is best overall, served at drive-thru speeds.
- Primary CTA: Get directions
- Secondary CTA: View menu (scrolls to #menu on the same page, does not navigate)

#### Card: Valo Sit-Down
- Location label: Valo Sit-Down (never "Valo" alone, never "Valo Resort")
- Status headline fallback: Open Wed-Sun
- Status meta fallback: Wed-Fri, 7 AM – 10 AM · Sat-Sun, 7 AM – 2 PM
- Address line 1: 1500 AZ-69
- Address line 2: Prescott, Arizona · Inside the Prescott Resort
- Body: Sit down, take in the view of Prescott, and try our coffees. The Valo tasting experience lives here.
- Length convention: Visit Valo card blurbs are sized to roughly match each other (about 100 characters).
- Primary CTA: Get directions
- Secondary CTA: View menu (scrolls to #menu on the same page, does not navigate)

### Menu preview
- Section eyebrow: Menu
- Section anchor: #menu (the hero "View menu" button scrolls here)
- Background: warm paper (section-warm), so the menu reads like a menu page and provides a visual split between the white sections above and below. No dividers needed around it.
- No headline. The eyebrow plus the menu groups speak for themselves. Never claim drink scope ("two drinks", "six beans", etc.) - see global copy rules.
- Coffee-only preview: only Coffee and Beans appear here. Not coffee, the tasting feature, and the beans note all live on /menu.html. The home page menu is intentionally coffee-centric to keep the page focused.

#### Group: Coffee (left column)
- Group label: Coffee
- Item: latte - 7
- Item: black coffee - 5
- No support note on the home page. The previous "Ask for any specialty drink" line was removed because it cluttered the menu. The home page preview shows the most popular two; visitors who want the full picture click "View full menu" or speak with a barista. Do not reintroduce a specialty-drink disclaimer here.

#### Group: Beans (right column)
- Group label: Beans
- Items (in order): dark & smoky / colombia, peanut butter / brazil, peach / colombia, strawberry / honduras, apple spice / colombia, decaf / mexico
- Support note: Each tasting note listed here is naturally occurring in the bean. Nothing has ever been added to the coffee beans.
- The deeper explanation (roasting, sourcing, why this matters) lives on the philosophy page. Do not over-explain here.

#### Bottom CTA
- CTA: View full menu (still navigates out to /menu.html for the complete card)

### Coffee philosophy preview
- Position: last section on the home page, before the footer.
- Section eyebrow: Our approach
- Headline: A simpler menu (no trailing period - headline, not sentence)
- Body: Every drink on our menu is made with pure, raw ingredients. We do not add anything else, so the bean's naturally occurring flavors can be enjoyed clearly.
- Voice note: We don't "highlight" or "enhance" the flavor. The flavor is already there. Our role is restraint: we don't add anything that would distract. The point of that restraint is the customer's enjoyment, not just the mechanical fact that the flavor comes through. Use verbs that describe the customer's experience (enjoyed clearly, enjoyed purely), what the flavor does (comes through, stays clear), and what we don't do (never add, don't distract). Avoid verbs that imply we make the flavor stand out (highlight, bring out, enhance).
- Word note: avoid the noun phrase "natural flavor(s)" - it reads as the FDA-regulated ingredient-list term, which can include chemically extracted concentrates that we never use. Use "naturally occurring flavors" or "naturally occurring tasting notes" instead.
- Link CTA: Read our philosophy

### Footer
- Location heading: Valo Curbside
- Address: 1500 AZ-69D, Prescott, AZ
- Hours line: Daily, 7 AM – 6 PM
- Link CTA: Get directions

- Location heading: Valo Sit-Down (never "Valo" alone, never "Valo Resort")
- Address: 1500 AZ-69, Prescott, AZ
- Location context line: Inside the Prescott Resort
- Hours line 1: Wed-Fri, 7 AM – 10 AM
- Hours line 2: Sat-Sun, 7 AM – 2 PM
- Link CTA: Get directions

- Contact label: Contact
- Phone: 928-910-6087
- Email: support@valocoffee.com

---

## Locations Page (`/locations.html`)

### Metadata
- Page title: Locations | Valo Coffee in Prescott, Arizona
- Meta description: Two Valo Coffee locations in Prescott, Arizona. Valo Curbside for drive-thru specialty coffee, or Valo Sit-Down inside the Prescott Resort with a view of Prescott.

### Intro
- Header: a single small "Locations" label, rendered as `<h1 class="eyebrow">Locations</h1>` (matches the menu page pattern). No huge display headline, no lede.

### Location section: Valo Curbside
- Eyebrow: Valo Curbside
- Positioning line: Specialty coffee at drive-thru speeds.
- Status headline fallback: Open daily
- Status meta fallback: 7 AM – 6 PM
- Address line 1: 1500 AZ-69D
- Address line 2: Prescott, Arizona
- Body: Drive up, stay in your car, and we bring your coffee to you.
- Primary CTA: Get directions (opens Google Maps in a new tab)
- Secondary CTA: View menu (navigates to menu.html)

### Location section: Valo Sit-Down
- Eyebrow: Valo Sit-Down (never "Valo" alone, never "Valo Resort")
- Positioning line: The Valo tasting experience lives here.
- Status headline fallback: Open Wed-Sun
- Status meta fallback: Wed-Fri, 7 AM – 10 AM · Sat-Sun, 7 AM – 2 PM
- Address line 1: 1500 AZ-69
- Address line 2: Prescott, Arizona · Inside the Prescott Resort
- Body: Sit down, take in the view of Prescott, and try our coffees.
- Primary CTA: Get directions (opens Google Maps in a new tab)
- Secondary CTA: View menu (navigates to menu.html)

### Footer
- Use same footer copy as Home.

---

## Menu Page (`/menu.html`)

### Metadata
- Page title: Coffee Menu | Valo Coffee in Prescott, Arizona
- Meta description: The Valo Coffee menu. Specialty coffee drinks, single-origin beans, not-coffee lattes, and an in-person tasting experience at Valo Sit-Down.

### Menu intro
- Header: a single small "Coffee" label, rendered as `<h1 class="eyebrow">Coffee</h1>`. This labels the first card on the page (the main coffee menu). Each card below has its own eyebrow header (Not coffee, Tasting experience, Coffee beans), so the page reads as a sequence of labeled paper cards rather than one big "Menu" page.
- No lede.

### Page structure
- The menu page has four separate paper-style cards, each with its own small-caps eyebrow header above it: **Coffee** → **Not coffee** → **Tasting experience** → **Coffee beans**. The cards are siblings, not nested. Each header uses the same `<...class="eyebrow">` treatment and the same `margin-bottom: var(--space-6)` so the spacing rhythm is identical down the page.

### Main coffee card (paper-style)
- The digital menu does NOT display temp or milk as separate steps. Those still live on the in-person paper menu and are handled at the counter/curbside.
- The main coffee card does NOT contain "not coffee" — it lives in its own card below.
- Visible sections inside the main coffee card, in order: Drinks, Bean Menu, Optional.
- Desktop (≥900px): three columns horizontally — Drinks | Bean Menu | Optional.
- Mobile (<900px): stacks vertically.
- Bold weight = drink/bean name; regular weight = sub-line / origin / optional list items.
- Drinks: latte (7) bold, coffee (5) bold, cappuccino bold (with "traditional or extra milk" regular sub-line), flat white bold (with "traditional or extra milk" regular sub-line), cortado bold, espresso bold. Only latte and coffee have printed prices.
- Bean Menu: all bold (dark & smoky, peanut butter, peach, strawberry, apple spice, decaf); origins as regular-weight meta (colombia, brazil, colombia, honduras, colombia, mexico).
- Bean note beneath the bean list: "Each tasting note listed here is naturally occurring in the bean. Nothing has ever been added to the coffee beans."
- Optional: single flat list, all regular weight — vanilla, mocha, caramel, sugar, brown sugar, honey, maple, splenda, stevia. No sub-headings like "pick add-ins" or "pick a sweetener".
- Voice rule for category labels: use plain noun-phrase categories ("Drinks", "Bean Menu", "Optional"). Never imperatives ("pick a drink", "choose your experience"). The structure does the guiding.

### Not coffee card (paper-style)
- Section header above the card: `<h2 class="eyebrow">Not coffee</h2>`.
- The card has no internal label — the eyebrow above already names the section, so the items start directly inside the card.
- Desktop: two CSS columns. Mobile: one column.
- Items (item names regular, prices bold): cocoa latte 5, chai latte 7, matcha latte 7, ube latte 7, golden latte 7, butterfly lemonade 7, hibiscus yuzu 7.
- Retired (do not reintroduce): Jamaica. Hibiscus yuzu already covers that style of drink.

### Tasting experience card (paper-style, exclusive to Valo Sit-Down)
- Visual: same warm-paper menu card as the main menu, so the tasting experience reads as an extension of the menu, not a separate marketing block.
- Section header above the card: `<h2 class="eyebrow">Tasting experience</h2>`.
- The card opens with the availability note at the top: "Tasting experiences are available at Valo Sit-Down only." (italic, quiet)
- Each option is a menu-row: bold lowercase label on the left, price `19` on the right. A short description sits as subtext beneath each row.
- Item 1 — label: coffee tasting experience · price: 19 · description: Four coffees of your choice, served as a pour-over flight, then any full-size drink from the menu.
- Item 2 — label: not coffee tasting experience · price: 19 · description: Four not coffee lattes of your choice, served as a sample flight, then any full-size drink from the menu.
- Verbiage rule: the two descriptions must use identical sentence structure. Only the option-specific words differ.
- Scope note: the not coffee tasting experience covers the latte-format items on the not coffee menu (cocoa, chai, matcha, ube, golden lattes). It does not include the non-latte items (butterfly lemonade, hibiscus yuzu) — those don't fit the tasting-flight format.
- Wording rule: always "Tasting experiences are available at Valo Sit-Down only." Never "inside the Prescott Resort only" as the primary wording — use the location name consistently.

### Coffee beans card (paper-style)
- Section header above the card: `<h2 class="eyebrow">Coffee beans</h2>`.
- Step label inside the card: half pound bag (italic, lowercase — describes the unit being sold).
- Items: all six beans at 22 each. Same labels and order as the bean column in the main menu (dark & smoky, peanut butter, peach, strawberry, apple spice, decaf). Bean names regular weight, prices bold.
- Desktop: two CSS columns. Mobile: one column.
- Footnote: "Available at both locations. For custom grinding and vacuum sealing, visit Valo Sit-Down." (italic, quiet)

### Bottom CTA row
- Primary CTA: View locations
- Secondary CTA: Why we built the menu this way

### Footer
- Use same footer copy as Home.

---

## Philosophy Page (`/philosophy.html`)

### Metadata
- Page title: Our Coffee Philosophy | Valo Coffee in Prescott, Arizona
- Meta description: Valo's coffee philosophy. Coffee is any drink where you can clearly taste the natural flavor notes of the bean. Pure ingredients, naturally occurring flavor notes, and modern espresso.

### Page header + opening lede (always expanded at the top)
- Header: rendered as `<h1 class="eyebrow">What is coffee?</h1>`. The page header is a philosophical QUESTION that the lede answers. No huge display headline.
- Opening lede (immediately below the header, separated by `margin-bottom: var(--space-6)`): "Coffee, to us, is any drink where you can clearly taste the natural flavor notes of the coffee bean. Any drink you order from our coffee menu highlights this philosophy."
- This is the only section that is always visible. The other three questions sit below as collapsibles.

### Section format (applies to every section below)
- Every section is a `<details class="philosophy-detail">` collapsible. The `<summary>` is the question; the body inside is the answer.
- Questions render in the same small-caps eyebrow style as the page header, plus a `+` indicator on the right that flips to `−` when open.
- Sections start collapsed so the page reads light. Visitors expand the ones they care about.
- Every question must be a real philosophical question, end with a question mark, and be short (roughly 4-7 words) so it reads cleanly in the small-caps style.
- **Stand-alone rule:** because answers are collapsed by default, each question must make sense on its own without the answer visible. Avoid vague subjects like "Why so simple?" (simple what — the menu? the website? the ingredients?). Always name the subject in the question so the reader knows what you're asking about before they decide whether to expand.
- The questions are how Valo "thinks out loud" — the page reads as a conversation the brand has with itself, not a list of principles or marketing assertions.

### Section: Where do the tasting notes come from?
- Eyebrow: Where do the tasting notes come from?
- Body: Coffee is the seed of a coffee cherry. Like any fruit, it comes in many varietals. For example, a Honeycrisp and a Granny Smith naturally have their own unique flavor profiles. The same is true of coffee. Every variety carries its own naturally occurring flavor notes. We source beans with relatable and recognizable flavor notes such as strawberry, peach, and peanut butter. The best way to discover how this works is to try our coffee tasting experience at our Valo Sit-Down location.
- Voice note: this section should read as confidence-building and lightly scientific (varietals, naturally occurring flavor notes) without being jargony. The apple analogy is the anchor, and the section ends by inviting the reader to experience this firsthand at Valo Sit-Down.

### Section: Why is the menu so simple?
- Eyebrow: Why is the menu so simple?
- Body: The fewer things in your cup, the more clearly you can taste the bean. So we keep things short, starting with our menu. It lists our most popular drinks, but we're happy to make any other drink you might want to order, like a cortado or a cappuccino. Our add-ins are just as short: cocoa, vanilla, honey, and maple. Each one is just as simple. Our cocoa is just cacao, salt, and water. Our honey is just honey. Our maple is 100% pure maple. Our vanilla is pure vanilla extract. And our sweetener list is just as pure and simple. The bean stays the choice that matters most.
- Flow rule: every sentence in this section must serve the simplicity thread. The menu sentence flows in via "starting with our menu" — that transition links the philosophy ("we keep things short") to the first concrete example (the menu). The "Our add-ins are just as short" sentence pivots to the second example. Do not drop in a menu/offering sentence that isn't tied to the simplicity claim; if a sentence reads as informational rather than illustrative, either reframe it or remove it.
- Consistency rule: when describing the ingredients we use, lead each one with "Our X is..." (not "The X is..."). The possessive emphasizes that this is what Valo specifically uses, and it pairs cleanly with "our sweetener list" later in the sentence.
- Opening rule: the section must answer the question "why" before it lists the "what." The opening sentence ("The fewer things in your cup, the more clearly you can taste the bean.") states the reason simplicity matters. Do not lead with "we keep things short" — that's the action, not the answer.
- Structural note: this section is the merge of what used to be two near-duplicate sections (short menu + few add-ins). The combined point: simplicity runs through the whole offering — short menu, short add-in list, AND each add-in's ingredient list is short too. The single-ingredient detail is what makes the section earn its space.
- Accuracy note: do NOT name specific drinks we "don't sell" (e.g., chai latte) in this section. We do sell a chai latte as a not-coffee drink. Keep the section about what we use, not what we forbid.

### Section: How do we make espresso?
- Eyebrow: How do we make espresso?
- Body: We've questioned every parameter. Heavier doses for clarity. Colder brew temps for sweetness. Lower pressure for smoothness. We even brew each shot differently depending on the bean and drink type. We offgas our beans because trapped carbon dioxide from roasting causes the coffee to taste bitter. We have 21 steps to prep a single puck of espresso. Every detail is intentionally tested, and we only keep what proves to be meaningfully better. Each choice lets us highlight the bean's naturally occurring flavor notes so that we can serve you the best cup of coffee we know how to make.
- Structural rule: the section has two distinct rhythm zones. First, three short "[parameter] for [benefit]" fragments (heavier doses for clarity, colder brew temps for sweetness, lower pressure for smoothness). Then a group of longer "We [do X]" sentences. Do not drop a long descriptive sentence into the fragment list.
- Closing-line rule: the section closes by tying our experimentation rigor (testing, proving) to the customer outcome ("the best cup of coffee we know how to make"). Both halves must be present.

### Retired section: How do we make the perfect drink?
- Do not reintroduce. The "How do we make the perfect drink?" section and its body paragraph were removed from the philosophy page.

### Bottom CTA row
- Primary CTA: Visit Valo (links to /locations.html)
- Secondary CTA: View the menu (links to /menu.html)

### Footer
- Use same footer copy as Home.

---

## Sign-off Checklist
- Every location mention is explicit or clearly anchored by section context.
- Curbside appears first in dual-location contexts.
- Resort is clearly positioned as the tasting experience destination.
- Copy is concise, inviting, elegant, and direct.
- No prescriptive recommendation language.
