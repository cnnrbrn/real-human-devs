# Handoff: Real Human Developers — homepage redesign

## Overview
Redesign of the Real Human Developers homepage (web + app dev studio). The positioning: *we are humans, not AI* — so the look is hand-drawn and warm: handwritten headings, uneven hand-cut buttons with hard offset shadows, cream paper with a dot grid. Adds a featured case study for **Real Spanish Stories** (https://realspanishstories.com/).

## About the design files
Files in `design/` are **HTML design references**, not production code. The task is to **update the existing Astro project** to match them, using its existing components, layouts and styling approach. Don't copy the prototype markup/runtime (`support.js`, `image-slot.js`, `.dc.html` template syntax) into the codebase. Open `design/Real Human Developers.dc.html` in a browser to see it live (serve the folder locally, e.g. `npx serve design`).

`screenshots/` shows each section at desktop width.

## Fidelity
**High-fidelity.** Match colours, type, spacing, radii and shadows exactly. Keep what the existing site already does well: the logo, the contact form, the uneven buttons, the Kalam headings.

## Page structure (top → bottom)
Container for every section: `max-width: 1280px; margin: 0 auto; padding-inline: 32px`. Sections separated by `1.5px solid #242a38` bottom borders. Section vertical padding `104px` (hero `88px 32px 104px`).

### 1. Header (sticky)
- `position: sticky; top: 0`, bg `#f9f3e6`, bottom border `1.5px dashed #b9b2a3`, padding `14px 32px`.
- Flex row, space-between, wraps. Logo (height 58px) → nav links → CTA.
- Nav: Work (`#work`), Services (`#services`), Contact (`#contact`). Barlow 17px, colour `#4a4f5c`, hover `#242a38`, gap 32px, no underline.
- CTA "Start a project" → `#contact`: see **Uneven button** (small size: Kalam 700 19px, padding `9px 22px 7px`, radius `6px 14px 5px 12px / 12px 5px 14px 6px`, rotate `-1.2deg`, shadow `5px 6px 0 #242a38`).
- The old dark-mode toggle was removed from the design. Keep it only if the Astro site already supports dark mode.

### 2. Hero
- Background: cream + dot grid: `background-image: radial-gradient(#d9cfbb 1px, transparent 1.2px); background-size: 26px 26px`.
- Grid: `repeat(auto-fit, minmax(min(100%, 460px), 1fr))`, gap 56px, align center. Left = copy, right = screenshot.
- **Availability badge**: bg `#fdf9f0`, border `1.5px solid #242a38`, radius `14px 6px 12px 5px / 5px 12px 6px 14px`, padding `8px 18px`, rotate `-1.5deg`, Barlow 16px, nowrap. 10px orange dot `#f7b051` with ring `box-shadow: 0 0 0 4px #fbe2bd`. Copy: "Taking new builds — Q4 2026".
- **H1**: Kalam 700, `font-size: clamp(52px, 7.4vw, 104px)`, line-height 0.98, letter-spacing -0.01em, `text-wrap: balance`. Copy: "Tired of talking to AI? **Talk to us.**"
  - "Talk to us." gets the **peach highlighter** (chosen): `background: linear-gradient(transparent 38%, #fbe2bd 38%, #fbe2bd 92%, transparent 92%); padding: 0 10px; margin-left: -10px; white-space: nowrap`.
  - Alternative the client may switch to later (make it easy to swap, e.g. a class): wavy underline — `text-decoration: underline wavy #f7b051; text-decoration-thickness: 6px; text-underline-offset: 14px; text-decoration-skip-ink: none`.
- **Lede**: Barlow 21px / 1.55, `#4a4f5c`, max-width 34ch. Copy: "A small senior team that designs and builds web apps, mobile apps and custom WordPress. You'll know every name on your project."
- **Actions** (gap 28px, margin-top 8px): primary uneven button "Start a project ↗" (large: Kalam 700 22px, padding `14px 30px 11px`, radius `5px 12px 6px 14px / 14px 6px 12px 5px`, rotate `-0.8deg`, shadow `6px 7px 0 #242a38`) + text link "or see what we shipped" → `#work` (Kalam 21px, underline 1.5px, offset 6px).
- **Screenshot** (right column), whole thing links to `#work`, rotated `1.2deg`:
  - Browser frame: bg `#fdf9f0`, border `2px solid #242a38`, radius `10px 14px 8px 12px`, shadow `8px 9px 0 #242a38`, overflow hidden.
  - Top bar: padding `10px 14px`, bottom border `1.5px solid #242a38`, three 11px outlined circles (`1.5px solid #242a38`), gap 7px.
  - Image: `assets/rss-screenshot.png`, `aspect-ratio: 1632/862`, `object-fit: cover`.
  - Caption below (margin-top 18px, right-aligned, Kalam 19px `#4a4f5c`): "↑ just shipped: Real Spanish Stories — see the case study".

### 3. Featured project — Real Spanish Stories (`#work`)
- Header row (flex, space-between, align end, wraps, margin-bottom 48px): kicker "// Featured project" + H2 "Real Spanish Stories." on the left; "Visit the site ↗" button on the right (opens https://realspanishstories.com/ in a new tab).
  - Secondary uneven button: bg `#fdf9f0`, border 2px ink, radius `12px 5px 14px 6px / 6px 14px 5px 12px`, rotate `1deg`, shadow `4px 5px 0 #242a38`, Kalam 700 20px, padding `10px 22px 8px`. Hover bg `#fbe2bd`.
- Panel: flex-wrap, border `1.5px solid #242a38`, radius 10px, overflow hidden, bg `#fdf9f0`.
  - Left cell `flex: 2 1 520px`, bg `#f3ecdc`, padding 28px, right + bottom 1.5px ink borders (negative 1.5px margins so borders collapse when stacked). Contains a browser frame (as in the hero but radius 8px, 1.5px border, no shadow, with URL text "realspanishstories.com" Barlow 14px `#4a4f5c`) and the screenshot at `aspect-ratio: 16/10`, cover.
  - Right cell `flex: 1 1 320px`, padding `36px 36px 40px`, column gap 28px:
    - Paragraph (Barlow 19px / 1.55): "Short stories written for Spanish learners, read level by level. We designed and built the whole thing — reading experience, content system and the site around it."
    - Fact list: rows `grid-template-columns: 110px 1fr`, gap 16px, padding 14px 0, top border `1.5px dashed #b9b2a3`. Label Kalam 17px `#4a4f5c`, value Barlow 17px.
      - What — Content platform for language learners
      - We did — UX, visual design, build, hosting & care
      - Built for — Reading on phones, one story at a time
    - Pull line pinned to bottom (margin-top auto), Kalam 21px / 1.35, rotate -1deg: "“Written, designed and coded by people who actually read the stories.”"
  - ⚠ **The case study copy is placeholder.** Check the facts and replace the pull line with a real client quote before launch.

### 4. Services (`#services`)
- Header row as above: kicker "// What we do", H2 "What we're good at.", right paragraph (Barlow 19px, `#4a4f5c`, max 40ch): "No offshore churn, no copy-paste templates. The people you meet are the people who write your code."
- **Three separate cards** (no numbers, no icons): grid `repeat(auto-fit, minmax(min(100%, 300px), 1fr))`, gap 32px.
  - Card: bg `#fdf9f0`, border `1.5px solid #242a38`, radius `6px 14px 8px 12px / 12px 8px 14px 6px`, shadow `5px 6px 0 #242a38`, padding `36px 34px`, column gap 16px. Hover: `translate(-2px,-3px)`, shadow `7px 9px 0`, transition 150ms.
  - Title Kalam 700 30px / 1.1. Body Barlow 17px / 1.6 `#4a4f5c`. Tags pinned to bottom (margin-top auto, padding-top 12px, gap 8px).
  - Tag pill: Kalam 15px, border 1.5px ink, radius `14px 10px 13px 9px`, padding `3px 13px 1px`.
  - Content:
    1. **Web design & development**: "Marketing sites, dashboards and full-stack web apps. Designed for speed, accessibility and conversion." Tags: Next.js, React, Design systems
    2. **App design & development**: "Native and cross-platform mobile apps, from first wireframe to App Store. Thoughtful UX, maintainable code." Tags: iOS, Android, React Native
    3. **Custom WordPress**: "Bespoke themes and plugins built to spec — not bloated page builders. Fast, editor-friendly, easy to maintain." Tags: Custom themes, Plugins, Headless WP

### 5. Contact (`#contact`)
Keep the existing form. Only these changes:
- Two-column grid `repeat(auto-fit, minmax(min(100%, 420px), 1fr))`, gap 64px.
- Left: kicker "// Start a project", H2 "Tell us what you're building.", paragraph, "Prefer email? hello@realhumandevs.com" (Kalam 21px).
- Form card: bg `#fdf9f0`, border 1.5px ink, radius 12px, padding 40px, column gap 24px.
- Field labels: Kalam 15px, uppercase, letter-spacing 0.12em, `#4a4f5c`.
- Project type chips: **Web app, Mobile app, WordPress, Not sure yet** ("Not sure yet" is new). Single-select. Kalam 18px, border 1.5px ink, radius 6px, padding `7px 16px 5px`. Selected bg `#f7b051`, unselected `#fdf9f0`, hover `#fbe2bd`.
- Inputs: height 50px, Barlow 17px, bg `#f9f3e6`, border 1.5px ink, radius 8px, padding 0 14px. Focus: no outline, bg `#fdf9f0`, `box-shadow: 3px 3px 0 #f7b051`. Textarea: 4 rows, vertical resize, placeholder "A few sentences about your project or the app you need help with…".
- Submit: full-width uneven button "Send message ↗" (Kalam 700 21px, padding 14px, radius `8px 14px 6px 12px / 12px 6px 14px 8px`, rotate -0.5deg, shadow `5px 6px 0`, hover bg `#f5a53a`).
- Success state (replaces the form after submit): Kalam 700 40px "Got it — thanks, {first name}." + Barlow 18px "One of us will read this properly and write back within a business day." Wire it to whatever form handler the Astro site already uses.

### 6. Footer
- Top border 1.5px ink. Grid `repeat(auto-fit, minmax(200px, 1fr))`, gap 40px, padding `56px 32px 40px`.
- Columns: logo (52px) | SERVICES (Web development, App development, Custom WordPress → `#services`) | STUDIO (Work, Contact, hello@realhumandevs.com). Headings use the label style above, links Barlow 17px, no underline.
- Bottom bar: top border `1.5px dashed #b9b2a3`, padding `20px 32px 32px`, Kalam 16px `#4a4f5c`, space-between: "© 2026 Real Human Devs." / "Written by humans. Every line."

## Shared components
**Uneven button** (primary): bg `#f7b051`, colour `#242a38`, border `2px solid #242a38`, asymmetric border-radius, slight rotation, hard offset shadow in `#242a38`.
- Hover: `translate(-2px,-2px)` added to the rotation, shadow grows +2px on each axis.
- Active: `translate(3–4px, 4–5px)`, shadow shrinks to `1px 1px 0`.
Build it as one component with `size` (sm/lg) and `variant` (primary/secondary) props. Each instance can pass its own rotation and radius so buttons stay slightly different.

**Kicker**: Kalam 18px, colour `#b8741c`, margin-bottom 6px, prefixed "// ".
**H2**: Kalam 700, `clamp(44px, 5.6vw, 76px)`, line-height 1.

## Interactions
- Anchor nav with smooth scroll. Account for the sticky header (`scroll-margin-top` ≈ 90px on sections).
- Hover/active states as described above. Focus: `:focus-visible { outline: 2px solid #242a38; outline-offset: 3px }`.
- Responsive: everything reflows via auto-fit grids and flex-wrap. There are no fixed breakpoints in the design; check around 375, 768, 1024 and 1440px.

## Design tokens
Colours:
- `--paper` `#f9f3e6` (page bg)
- `--card` `#fdf9f0` (card/form surface)
- `--paper-deep` `#f3ecdc` (case study image well)
- `--ink` `#242a38` (text, borders, shadows)
- `--muted` `#4a4f5c` (secondary text)
- `--orange` `#f7b051` (primary / logo)
- `--orange-hover` `#f5a53a`
- `--peach` `#fbe2bd` (highlight, hover tint, dot ring)
- `--orange-text` `#b8741c` (kickers; readable on paper)
- `--rule` `#b9b2a3` (dashed rules)
- `--dot` `#d9cfbb` (hero dot grid)
- (The previous green `#cdf8c1` is retired.)

Fonts (Google Fonts): **Kalam** 400/700 for headings, labels, buttons and tags; **Barlow** 400/500/600 for body text and nav (replaces Roboto).

Borders: 1.5px ink hairlines everywhere. The 2px ink border is only for buttons and the hero browser frame.
Shadows: hard, no blur. `4–8px 5–9px 0 #242a38`.

## Assets
- `design/assets/logo.png`: cropped from a screenshot, so it's low resolution. **Use the existing logo file from the Astro project.**
- `design/assets/rss-screenshot.png`: Real Spanish Stories story page, 1632×862. Export as WebP/AVIF via Astro `<Image>`.

## Files
- `design/Real Human Developers.dc.html`: the full design (template + logic + inline styles). Lists, copy and the project-type state are in the `<script>` class at the bottom.
- `design/support.js`, `design/image-slot.js`: prototype runtime only. Don't port them.
- `screenshots/01-hero.png` … `05-footer.png`: desktop reference captures.
