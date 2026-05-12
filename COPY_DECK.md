# Valo Copy Deck

Use this file as the single working draft for brand copy updates.

How to use
- Edit copy in this file first.
- Keep location references explicit: Valo Curbside (drive-up) or Valo at the Prescott Resort (sit-down). Never write "Valo Resort" together as a title.
- Use inside the Prescott Resort as supporting context when needed.
- After edits are approved, copy updates into page files and publish.

---

## Global Brand Copy

### Core message
- Primary claim: The best coffee in Arizona.
- Choice line (menu page only): Choose your drink. Choose your bean.
- Retired (do not reintroduce on home): Chosen by flavor. Made with precision.
- Retired (do not reintroduce on home): We make the cup around the coffee you want to taste.

The home page stays light. It does not try to explain the philosophy — it grounds the visitor in who Valo is, where Valo is, when Valo is open, and what is on the menu. The philosophy page is where the deeper why lives.

### Location naming standard
- Preferred labels: Valo Curbside (drive-up), Valo (sit-down, inside the Prescott Resort)
- Never write "Valo Resort" together as a title, heading, eyebrow, footer label, page title, or schema.org @name. Valo is not a resort - it's a coffee brand with a location inside the Prescott Resort.
- Disambiguate the sit-down location with surrounding context: "inside the Prescott Resort", "at the Prescott Resort", or by listing the address (1500 AZ-69).

### Menu scope rule (important)
- Never claim drink scope. Copy must not say "two drinks", "only two coffees", or anything that implies the printed coffee list is the limit.
- Latte and black coffee are our two most popular coffee drinks. We can make any specialty espresso drink to order - cortado, cappuccino, flat white, and more.
- When the coffee list appears in marketing copy, pair it with language like "Our most popular. Ask for any specialty drink." or similar.

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
- Meta description: Valo Coffee serves the best coffee in Arizona through a simple menu, precise recipes, and two ways to visit: Curbside and Resort.
- OG title: Valo Coffee | The Best Coffee in Arizona
- OG description: Valo Coffee in Prescott, Arizona. Two locations: Curbside and Resort.

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
- Address line 1: 1500 Heather Heights
- Address line 2: Prescott, Arizona
- Body: Drive up, stay in your car, and we bring your coffee to you. Specialty coffee at drive-through speed.
- Voice note: never write "the best coffee at drive-through speed." "Best" in that phrase reads as "best for a drive-through" which sounds like a limited claim. Valo's claim is best overall, served at drive-through speed. Always "Specialty coffee at drive-through speed" or similar.
- Primary CTA: Get directions
- Secondary CTA: View menu (scrolls to #menu on the same page, does not navigate)

#### Card: Valo (inside the Prescott Resort)
- Location label: Valo (never "Valo Resort")
- Status headline fallback: Open Wed-Sun
- Status meta fallback: Wed-Fri, 7 AM – 10 AM · Sat-Sun, 7 AM – 2 PM
- Address line 1: 1500 AZ-69
- Address line 2: Prescott, Arizona · Inside the Prescott Resort
- Body: Sit down, take in the view of Prescott, and try our coffees. The Valo tasting experience lives here.
- Length convention: Visit Valo card blurbs are sized to roughly match each other (about 100 characters). Curbside is the reference length; this card should land between 98-102 chars to feel visually uniform.
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
- Support note: Each tasting note listed here is naturally occurring in the bean. We've never added anything to the coffee beans.
- The deeper explanation (roasting, sourcing, why this matters) lives on the philosophy page. Do not over-explain here.

#### Bottom CTA
- CTA: View full menu (still navigates out to /menu.html for the complete card)

### Coffee philosophy preview
- Position: last section on the home page, before the footer.
- Section eyebrow: Our approach
- Headline: A simpler menu (no trailing period - headline, not sentence)
- Body: Every drink on our menu is made with pure ingredients. We never add anything else, so their naturally occurring flavors can be enjoyed clearly.
- Voice note: We don't "highlight" or "enhance" the flavor. The flavor is already there. Our role is restraint: we don't add anything that would distract. The point of that restraint is the customer's enjoyment, not just the mechanical fact that the flavor comes through. Use verbs that describe the customer's experience (enjoyed clearly, enjoyed purely), what the flavor does (comes through, stays clear), and what we don't do (never add, don't distract). Avoid verbs that imply we make the flavor stand out (highlight, bring out, enhance).
- Word note: avoid the noun phrase "natural flavor(s)" - it reads as the FDA-regulated ingredient-list term, which can include chemically extracted concentrates that we never use. Use "naturally occurring flavors" or "naturally occurring tasting notes" instead.
- Link CTA: Read our philosophy

### Footer
- Location heading: Valo Curbside
- Address: 1500 Heather Heights, Prescott, AZ
- Hours line: Daily, 7 AM – 6 PM
- Link CTA: Get directions

- Location heading: Valo (never "Valo Resort")
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
- Page title: Locations | Valo Coffee
- Meta description: Two ways to visit Valo. Curbside for drive-up coffee, or inside the Prescott Resort for a sit-down experience with a view of Prescott.

### Intro
- Header: a single small "Locations" label, rendered as `<h1 class="eyebrow">Locations</h1>` (matches the menu page pattern). No huge display headline, no lede.

### Location section: Valo Curbside
- Eyebrow: Valo Curbside
- Positioning line: Specialty coffee at drive-through speed.
- Status headline fallback: Open daily
- Status meta fallback: 7 AM – 6 PM
- Address line 1: 1500 Heather Heights
- Address line 2: Prescott, Arizona
- Body: Drive up, stay in your car, and we bring your coffee to you.
- Primary CTA: Get directions (opens Google Maps in a new tab)
- Secondary CTA: View menu (navigates to menu.html)

### Location section: Valo (inside the Prescott Resort)
- Eyebrow: Valo (never "Valo Resort")
- Positioning line: Inside the Prescott Resort
- Status headline fallback: Open Wed-Sun
- Status meta fallback: Wed-Fri, 7 AM – 10 AM · Sat-Sun, 7 AM – 2 PM
- Address line 1: 1500 AZ-69
- Address line 2: Prescott, Arizona
- Body: Sit down inside the Prescott Resort and explore the coffees we are serving.
- Primary CTA: Get directions (opens Google Maps in a new tab)
- Secondary CTA: View menu (navigates to menu.html)

### Footer
- Use same footer copy as Home.

---

## Menu Page (`/menu.html`)

### Metadata
- Page title: Menu | Valo Coffee
- Meta description: The Valo Coffee menu. Pick a drink, temp, milk, and bean. Plus our not coffee menu.

### Menu intro
- Header: a single small "Coffee" label, rendered as `<h1 class="eyebrow">Coffee</h1>`. This labels the first card on the page (the main coffee menu). Each card below has its own eyebrow header (Not coffee, Tasting experience, Coffee beans), so the page reads as a sequence of labeled paper cards rather than one big "Menu" page.
- No lede. The previous "Choose your drink. Choose your bean. Or choose from our other beverages." line was removed because it cluttered the page. The menu card itself is the page's content.

### Page structure
- The menu page has four separate paper-style cards, each with its own small-caps eyebrow header above it: **Menu** → **Not coffee** → **Tasting experience** → **Coffee beans**. The cards are siblings, not nested. Each header uses the same `<...class="eyebrow">` treatment and the same `margin-bottom: var(--space-6)` so the spacing rhythm is identical down the page.

### Main menu card (paper-style)
- The digital menu does NOT display step numbers and does NOT display temp or milk. Those still live on the in-person paper menu and are handled at the counter/curbside. Stripping them on the website makes the page easier to scan.
- The main menu card does NOT contain "not coffee" — it lives in its own card below.
- Visible sections inside the main menu card, in order: pick a drink, pick a bean, optional (pick add-ins, pick a sweetener).
- Desktop (≥900px): three columns horizontally — pick a drink | pick a bean | optional (which splits into add-ins + sweetener).
- Mobile (<900px): stacks vertically. Add-ins and sweetener stay side-by-side as two columns under the optional header.
- Bold weight = standard option; regular weight = secondary/accommodation option.
- "optional" italic label sits above the add-ins + sweetener sub-grid with a thin horizontal rule below it.
- pick a drink: latte (7) bold, coffee (5) bold
- pick a bean: all bold (dark & smoky, peanut butter, peach, strawberry, apple spice, decaf); origins as regular-weight meta (colombia, brazil, colombia, honduras, colombia, mexico)
- pick add-ins (optional): vanilla, mocha, caramel (all regular)
- pick a sweetener (optional): sugar, brown sugar, honey, maple, splenda | stevia (all regular)
- Voice rule: every step label leads with a verb. Never just a noun like "bean" — too ambiguous, no directive. "pick a [noun]" is the pattern.

### Not coffee card (paper-style)
- Section header above the card: `<h2 class="eyebrow">Not coffee</h2>`.
- The card has no internal label — the eyebrow above already names the section, so the items start directly inside the card.
- Desktop: two CSS columns. Mobile: one column.
- Items (item names regular, prices bold): cocoa latte 5, chai latte 7, matcha latte 7, ube latte 7, golden latte 7, Jamaica 7, butterfly lemonade 7, hibiscus yuzu 7.

### Tasting experience card (paper-style, exclusive to the Prescott Resort location)
- Visual: same warm-paper menu card as the main menu, so the tasting experience reads as an extension of the menu, not a separate marketing block. Lives in its own `.menu-card.menu-card-warm.paper-menu-card.resort-tasting-card` article right beneath the main menu card.
- Section header (above the card, same style as the main menu's "Menu" header): `<h2 class="eyebrow">Tasting experience</h2>` — renders as "TASTING EXPERIENCE" in small caps, with the same margin-bottom as the main menu header so the spacing pattern is identical.
- Step label inside the card: choose your experience (italic, lowercase, like other menu step labels)
- Each option is a menu-row: bold lowercase label on the left, price `19` on the right (same `.meta meta-strong` styling as other prices). A short description sits as subtext beneath each row.
- Item 1 — label: coffee tasting experience · price: 19 · description: Four coffees of your choice, served as a pour-over flight, then any full-size drink from the menu.
- Item 2 — label: not coffee tasting experience · price: 19 · description: Four not coffee lattes of your choice, served as a sample flight, then any full-size drink from the menu.
- Verbiage rule: the two descriptions must use identical sentence structure. Only the option-specific words differ (coffees vs. not coffee lattes; pour-over vs. sample flight). If one description changes, the other should change to match.
- Scope note: the not coffee tasting experience covers the latte-format items on the not coffee menu (cocoa, chai, matcha, ube, golden lattes). It does not include the non-latte items (butterfly lemonade, Jamaica, hibiscus yuzu) — those don't fit the tasting-flight format.
- Footnote at the bottom of the card: "Available inside the Prescott Resort only." (italic, quiet)

### Coffee beans card (paper-style)
- Section header above the card: `<h2 class="eyebrow">Coffee beans</h2>`.
- Step label inside the card: half pound bag (italic, lowercase — describes the unit being sold).
- Items: all six beans at 22 each. Same labels and order as the bean column in the main menu (dark & smoky, peanut butter, peach, strawberry, apple spice, decaf). Bean names regular weight, prices bold.
- Desktop: two CSS columns. Mobile: one column. (Same pattern as the Not coffee card.)
- Footnote: "Available at both locations. For custom grinding and vacuum sealing, visit us inside the Prescott Resort." (italic, quiet)

### Bottom CTA row
- Primary CTA: View locations
- Secondary CTA: Why we built the menu this way

### Footer
- Use same footer copy as Home.

---

## Philosophy Page (`/philosophy.html`)

### Metadata
- Page title: Philosophy | Valo Coffee
- Meta description: Valo's philosophy. Coffee is any drink where you can clearly taste the bean. If sweetener, milk, and added flavors drown it out, that's coffee flavoring, not coffee.

### Page header + opening lede (always expanded at the top)
- Header: rendered as `<h1 class="eyebrow">What is coffee?</h1>`. The page header is a philosophical QUESTION that the lede answers. No huge display headline.
- Opening lede (immediately below the header, separated by `margin-bottom: var(--space-6)`): "Coffee, to us, is any drink where you can clearly taste the bean. If sweetener, milk, and added flavors drown it out, that's coffee flavoring, not coffee. Coffee is the bean coming through clearly."
- Three-beat structure: (1) definition, (2) counter-definition / what isn't coffee, (3) reiteration of the definition. The closing sentence should restate the position more tightly than the opening, so the section ends on a punch rather than a counter-example.
- This is the only section that is always visible. The other four questions sit below as collapsibles.

### Section format (applies to every section below)
- Every section is a `<details class="philosophy-detail">` collapsible. The `<summary>` is the question; the body inside is the answer.
- Questions render in the same small-caps eyebrow style as the page header, plus a `+` indicator on the right that flips to `−` when open.
- Sections start collapsed so the page reads light. Visitors expand the ones they care about.
- Every question must be a real philosophical question, end with a question mark, and be short (roughly 4-7 words) so it reads cleanly in the small-caps style.
- **Stand-alone rule:** because answers are collapsed by default, each question must make sense on its own without the answer visible. Avoid vague subjects like "Why so simple?" (simple what — the menu? the website? the ingredients?). Always name the subject in the question so the reader knows what you're asking about before they decide whether to expand.
- The questions are how Valo "thinks out loud" — the page reads as a conversation the brand has with itself, not a list of principles or marketing assertions.

### Section: Where do the tasting notes come from?
- Eyebrow: Where do the tasting notes come from?
- Body: Coffee is a fruit, and like any fruit, it comes in many varietals. A Honeycrisp apple tastes nothing like a Granny Smith. The same is true of coffee: every variety carries its own naturally occurring flavor. We source beans whose flavor matches a tasting note you'd recognize: strawberry, peach, peanut butter. We don't add anything to make them taste that way, before or after the roast.
- Voice note: this section should read as confidence-building and lightly scientific (varietals, naturally occurring flavor) without being jargony. The apple analogy is the anchor.

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
- Body: Most of what's considered standard in espresso is dogma. We've questioned every parameter. Heavier doses for clarity. Colder brew temps for sweetness. Lower pressure for smoothness. We even brew each shot differently depending on the bean and drink type. We offgas our beans because trapped carbon dioxide from roasting causes the coffee to taste bitter. We have 21 steps to prep a single puck of espresso. Every detail is intentionally tested, and we only keep what proves to be meaningfully better. Each choice lets the bean's naturally occurring tasting notes come through and gives you the best cup of coffee we know how to make.
- Structural rule: the section has two distinct rhythm zones. First, three short "[parameter] for [benefit]" fragments (heavier doses for clarity, colder brew temps for sweetness, lower pressure for smoothness). Then a group of longer "We [do X]" sentences (we brew each shot differently, we offgas our beans because…, we have 21 steps). Do not drop a long descriptive sentence into the fragment list — definitions and reasons belong in the second group, not the first.
- Closing-line rule: the section closes by tying our experimentation rigor (testing, proving) to the customer outcome (bean's tasting notes + best cup). Both halves must be present. We don't just choose intentionally — we test, and we keep what proves to be meaningfully better.
- Retired phrase (do not reintroduce anywhere on the site): "Every detail is chosen for the cup, not for tradition." The against-tradition framing was wrong; the closing line should connect intention to the bean's naturally occurring tasting notes and to the customer's cup.

### Section: How do we make the perfect drink?
- Eyebrow: How do we make the perfect drink?
- Body: Every drink starts the same way: made exactly the way we know to be best. From there, it gets personal. We'll ask you to taste your drink before you go, and we're happy to adjust anything to make it perfectly yours.
- Pronoun rule: this section addresses the visitor directly in second person (you / your / yours). Do not switch to third person ("every customer / their / they") mid-section — the shift from "their drink" to "perfectly yours" is jarring and was caught and removed.
- Framing rule: this section is about how we achieve a *perfect* drink, not how we fix mistakes. Every drink is made exactly right; the personalization step is about the individual's preference, not about correcting an error. **Do not use "make it right" or "if anything needs adjusting" or other language that implies the drink was wrong.** The structure: we make it right → then we make it yours.
- Voice note: customer-led and feedback-driven, not stubbornly principled. Do not reintroduce "we could make it more appealing but we won't" framing.
- Retired question (do not reintroduce): "What if it isn't right?" — the question itself implied we serve imperfect drinks. The correct framing is the perfect drink, then personalized.

### Bottom CTA row
- Primary CTA: View the menu
- Secondary CTA: Visit Valo

### Footer
- Use same footer copy as Home.

---

## Sign-off Checklist
- Every location mention is explicit or clearly anchored by section context.
- Curbside appears first in dual-location contexts.
- Resort is clearly positioned as the tasting experience destination.
- Copy is concise, inviting, elegant, and direct.
- No prescriptive recommendation language.
