# Section 01 — Hero Redesign Plan

**Status:** Awaiting approval. No code changes yet.
**Scope:** The hero section only (`<section>` at [src/routes/index.tsx:82-93](src/routes/index.tsx)). The header, the other sections and the design tokens stay as they are.

---

## 1) Objective

Rebuild the iMOX hero with a **split layout and a modular card grid** so that it:

- makes the value proposition readable at a glance, with a left-aligned headline next to a strong visual block instead of one centered stack
- shows **people and product together**: real photos of the audiences next to live-looking iMOX UI (chat, task created, reminder sent)
- fits more above the fold on desktop, so the headline, the CTAs and the product proof all appear without scrolling
- looks more premium and editorial, with the same calm structure as the reference
- stays iMOX: the same violet palette, Sora type, copy, tone and components

---

## 2) Current vs Proposed Direction

### Current hero (as built)
| Element | Implementation |
|---|---|
| Layout | Single centered column, `min-h-[900px]`, `pt-28` |
| Background | `imox-grid` line pattern + `hero-atmosphere` radial glows (lime / cyan / violet) |
| Badge | Pill "MEET iMOX COPILOT" with `Sparkle` icon |
| Headline | "Your group chat / finally **remembers.**" with `text-brand-gradient` on "remembers." |
| Subheadline | "Just chat. iMOX handles the rest…" |
| CTAs | `brand` "Start free" + `brandOutline` "Watch 30-second demo" (opens the demo modal) |
| Meta line | "Available on Web, iOS, and Android" |
| Visual | Centered `PhoneChat` mockup with two floating chips ("AI Copilot", "Deadline tracked") + full-width `imox-people-hero.jpg` faded in at the bottom (58% height, 65% opacity, masked) |

**What limits it:** everything is centered and stacked, so the section is very tall and the phone ends up below the fold on most laptops. The people photo is half-faded behind the phone, and the two sit on top of each other instead of working together. The floating chips are small and far apart, so the story "chat → task → follow-up" is hard to follow.

### Proposed direction
A **two-column split hero**:
- **Left:** the badge, headline, subheadline, CTAs and a compact proof row, left-aligned and vertically centered.
- **Right:** a **3-column staggered card grid** that mixes cropped photos of real iMOX audiences (teams, friends, families) with branded feature cards that tell the product story. At the center is an anchor card that holds the existing `PhoneChat` mockup.

---

## 3) Design Translation from Reference

We take the **structure** from the reference. Its **surface** (colors, copy, subject matter) stays behind.

| Reference trait | How it translates to iMOX |
|---|---|
| Split layout: big headline left, visual grid right | Same split. Left column ≈ 5/12, grid ≈ 7/12 on desktop. Headline stays iMOX's own two-line statement. |
| Staggered card columns (columns start at different heights) | 3 columns with a vertical offset (middle column pushed down ~48px, right column ~24px) for rhythm without disorder. |
| Person photo cards with a small name/role chip and a check mark | Photo cards cropped from **our existing images**, with a chip that names a **group type**, not a person: "Project team · Copilot on", "Family trip · 4 tasks". This reinforces the "for every group" message. The check badge becomes an iMOX-violet `Check` circle. |
| Pastel text cards (mint / lilac / peach) with short benefit copy | Text cards use **only iMOX tokens**: `primary` (solid violet), `brand-soft` (lilac tint), and tints of `brand-cyan` / `brand-lime` mixed into the background (these already appear in `hero-atmosphere`). **No peach or other off-brand hue.** |
| Decorative arcs inside cards | A light brand motif instead: the existing `imox-grid` pattern or a soft radial glow inside one card. No arc shapes copied. |
| Dark pill "Hiring? Book a call" CTA + avatar stack "+158" | Our existing `brand` / `brandOutline` buttons. Under them sits a proof row: an avatar stack of 3 small circular crops from our photos plus the existing "Available on Web, iOS, and Android" line. **No invented user counts.** |
| Generous whitespace, large radius, flat cards | Radius `rounded-3xl` (existing token scale), 12–16px gaps, soft `shadow-sm`, with `shadow-brand` only on the violet card. |

**Balance between text and visuals:** the left column carries every message and stays readable on its own. The grid is supporting proof: each card either shows **who** iMOX is for (photo) or **what** it does (feature card). Card copy is at most one short line plus a label, so it never competes with the H1.

**Visual rhythm and spacing:** one consistent gap (`gap-3 md:gap-4`), matching card radii, a 3-step type scale inside cards (label 11px / title 15–18px / body 12–13px), and column offsets for the staggered cadence.

**Not copying:** no reference text, no individual people as the subject, no peach/mint palette, no "hire talent" framing. The iMOX grid is product-led: it contains a real UI mockup, which the reference does not have.

---

## 4) Brand Preservation Rules

These rules are binding for implementation:

- ✅ **Brand colors stay exactly as defined** in [src/styles.css](src/styles.css): `--primary`, `--brand-deep`, `--brand-ink`, `--brand-soft`, `--brand-cyan`, `--brand-lime`. No new hues are added to `:root`. Tints are built with `color-mix()` from existing tokens only.
- ✅ **Typography stays Sora** with the current weights (400–700), and the H1 keeps `font-bold` and `text-brand-gradient` on the key word.
- ✅ **Brand identity stays:** logo, header, `text-brand-gradient`, `imox-grid`, `hero-atmosphere`, `shadow-brand`, and the existing Button variants (`brand`, `brandOutline`).
- ✅ **Tone and copy stay:** the headline, subheadline, badge, CTA labels and availability line are reused **verbatim**. The short card labels come from copy already on the site (the `steps` array and the section texts).
- ✅ **Behavior stays:** "Start free" → `#download`, and "Watch 30-second demo" → opens the existing demo modal.
- ✅ This is a **UI/layout/style adaptation, not a rebrand.**

---

## 5) Proposed Hero Section Structure

### Desktop wireframe (≥1024px)

```
┌──────────────────────────── header (unchanged) ────────────────────────────┐
│                                                                            │
│  [✦ MEET iMOX COPILOT]            ┌────────┐  ┌────────┐  ┌────────┐      │
│                                   │ PHOTO  │  │  ▼48px │  │ ▼24px  │      │
│  Your group chat                  │ team   │  │┌──────┐│  │ PHOTO  │      │
│  finally remembers.               │        │  ││PHONE ││  │ lilac  │      │
│  ─────────────────                │[chip ✓]│  ││ CHAT ││  │[chip ✓]│      │
│  Just chat. iMOX handles the      └────────┘  ││mockup││  └────────┘      │
│  rest—turning conversations…      ┌────────┐  │└──────┘│  ┌────────┐      │
│                                   │ VIOLET │  │ soft   │  │ CYAN / │      │
│  [Start free →] [▷ Watch demo]    │ card   │  │ card   │  │ LIME   │      │
│                                   │"Chat → │  └────────┘  │ tint   │      │
│  (●)(●)(●)  Available on Web,     │ task"  │  ┌────────┐  │"AI     │      │
│             iOS, and Android      └────────┘  │ PHOTO  │  │follows │      │
│                                               │ trip   │  │ up"    │      │
│                                               └────────┘  └────────┘      │
└────────────────────────────────────────────────────────────────────────────┘
```

### Left column (text), left-aligned
1. **Badge:** existing "MEET iMOX COPILOT" pill (unchanged styling)
2. **H1:** "Your group chat finally **remembers.**" at `text-5xl → lg:text-6xl → xl:text-7xl`, `leading-[1.04]`, max ~11ch per line
3. **Subheadline:** existing paragraph, `max-w-xl`, `text-muted-foreground`
4. **CTAs:** `brand` "Start free →" + `brandOutline` "Watch 30-second demo"
5. **Proof row:** an avatar stack (3 circular crops from existing photos, `ring-2 ring-background`) + "Available on Web, iOS, and Android"

### Right column: card grid (6 cards, 3 columns)
| # | Column | Type | Content |
|---|---|---|---|
| A | 1 (top) | Photo card, tall (~4:5) | `imox-copilot-team.jpg` cropped on the man with the phone. Chip: **"Project team"** · "Copilot on" + ✓ |
| B | 1 (bottom) | **Solid violet** (`bg-primary`, white text, `shadow-brand`) | Label "Chat naturally" → title **"Say it once. It becomes a task."** + mini task pill "Confirm the florist · Maya" |
| C | 2 (top, offset ↓48px) | **Anchor product card**, `brand-soft` bg with a subtle `imox-grid` | Existing `PhoneChat` component, scaled (`compact` + `scale-[.85]`), with one floating chip "Deadline tracked · Tomorrow 12 PM" reusing `float-slow` |
| D | 2 (bottom) | Photo card, short (~4:3) | `imox-life-organized.jpg` cropped on the group with phones. Chip: **"Family trip"** · "4 tasks" + ✓ |
| E | 3 (top, offset ↓24px) | Photo card, medium (~3:4) | `imox-people-hero.jpg` cropped on the woman in the lilac suit. Chip: **"Wedding plans"** · "8 members" + ✓ |
| F | 3 (bottom) | **Tint card** (`brand-cyan` or `brand-lime` at ~25% via `color-mix`) | Icon `CalendarClock`. Title **"AI follows up."** Body: "No more chasing. Friendly reminders when deadlines approach." |

Read top to bottom and left to right, the cards tell the product story: **people chat → task created → deadline tracked → AI follows up**, spread across the group types iMOX serves.

### Background
- Keep `hero-atmosphere`, repositioned so the glows sit behind the grid.
- Keep `imox-grid` but fade it with a radial `mask-image` so it frames the section without competing with the cards.
- **Remove** the full-width faded bottom photo. Its role moves into the photo cards, where people are fully visible and sharp.

---

## 6) Image / Visual Strategy

| Slot | Source | Status |
|---|---|---|
| Card A: team | `src/assets/imox-copilot-team.jpg` (1600×1072) | ✅ Available. Crop via `object-cover` + `object-[18%_40%]` |
| Card D: friends / trip | `src/assets/imox-life-organized.jpg` (1600×912) | ✅ Available. Crop via `object-[35%_50%]` |
| Card E: professional | `src/assets/imox-people-hero.jpg` (1920×1080) | ✅ Available. Tight crop on the left subject, `object-[8%_30%]` |
| Card C: product | Existing `PhoneChat` React component | ✅ Live UI, no image needed |
| Avatar stack | Small circular crops of the same three images | ✅ Available |

- **No new stock or generated images are required.** All visuals already exist and fit the brand: the lilac and violet clothing in them matches the palette.
- **Optional upgrade (placeholder slot):** a dedicated portrait-format photo per card would crop better than the landscape sources. If you want this later, the cards accept any `src`. Until then we use the crops above. If a crop looks weak during implementation, that card becomes a clearly labeled placeholder block (`bg-brand-soft` + `ImageIcon` + "Portrait photo: {group type}") rather than a badly cropped face.
- All images get meaningful `alt` text. Card A (above the fold) loads eagerly with `fetchpriority="high"`, and the rest use `loading="lazy"`. Explicit `width`/`height` prevent layout shift.

---

## 7) Responsive Behavior

| Breakpoint | Layout |
|---|---|
| **Desktop ≥1280px (`xl`)** | Split `grid-cols-12`: text `col-span-5`, cards `col-span-7`. The section fits within `min-h-[min(100svh,860px)]`. Staggered 3-column grid with full offsets. H1 `text-7xl`. |
| **Laptop 1024–1279px (`lg`)** | Same split, H1 `text-6xl`, smaller card gaps (`gap-3`), and the phone in card C scales down a step. |
| **Tablet 768–1023px (`md`)** | Stacked: the text block goes on top (left-aligned, `max-w-2xl`) and the full-width 3-column grid sits below it with smaller offsets (24/12px). Card heights shrink by ~15%. |
| **Mobile <768px** | Text first, full-width CTAs (`flex-col`, `w-full`). The grid becomes **2 columns**. **Card C (phone) spans both columns** at the top as the product hero. A/B and E/F form two rows below it. **Card D is hidden** below `sm` to keep the section short. No column offsets. Floating chips are hidden. H1 `text-[2.6rem]`. |

- No horizontal scroll at any width. The section gutter stays `px-5 lg:px-8` to match the header.
- Card text never drops below 12px, and tap targets stay ≥44px.

---

## 8) Interaction / Animation

All animation is subtle, fast and respects `prefers-reduced-motion`.

1. **Load reveal (staggered):** the left-column items fade and slide up (`opacity 0→1`, `translateY 16px→0`, 600ms, `cubic-bezier(.22,1,.36,1)`) in ~80ms steps. The cards then reveal in reading order (A→F) with the same easing, starting ~200ms after the H1. This uses a small `hero-reveal` utility with a `--reveal-delay` CSS variable in `styles.css`. It is pure CSS, so there is no JS dependency and it works with SSR.
2. **Card hover (pointer devices only, `@media (hover:hover)`):** the card lifts `-4px`, the shadow deepens, and photos scale `1.03` inside `overflow-hidden` (400ms ease-out). The violet card brightens toward `brand-deep`.
3. **Buttons:** reuse the existing `brand` hover lift. Add `active:scale-[.98]` for tactile feedback.
4. **Ambient motion:** only the single floating chip on card C uses the existing `float-slow`. There are no other looping animations.
5. **Optional (off by default):** the "Task created" bubble inside the phone could pulse once after load to draw attention to the product moment.
6. **Reduced motion:** reveals render instantly and hover transforms and floats are disabled. The existing media query is extended to cover this.

---

## 9) Files / Components Likely to Change

| File | Change |
|---|---|
| [src/routes/index.tsx](src/routes/index.tsx) | Replace the hero `<section>` (lines 82–93) with the new split layout. Add small local components in the same file, matching the existing single-file pattern: `HeroPhotoCard` (image + chip) and `HeroFeatureCard` (tinted text card). Add an optional `className` prop to `PhoneChat` so it can scale inside card C. Add `CalendarClock`/`Check` imports (already imported). |
| [src/styles.css](src/styles.css) | Add the `hero-reveal` utility + keyframes, a `hero-card` hover utility, and the `imox-grid` fade mask. Extend the `prefers-reduced-motion` block. **No changes to color tokens.** |
| `src/components/ui/button.tsx` | **No change.** Reuses the `brand` / `brandOutline` variants. |
| `src/assets/*` | **No new files required.** Reuses the 3 existing photos. |
| Header, other sections, `__root.tsx` | **Untouched.** |

Reused as-is: `Button`, `PhoneChat`, `Logo`, `text-brand-gradient`, `imox-grid`, `hero-atmosphere`, `shadow-brand`, `float-slow`, the demo modal state (`setDemoOpen`).

---

## 10) Implementation Steps

1. **Styles first:** add `hero-reveal`, `hero-card` and the grid-mask utilities to `styles.css`, and extend the reduced-motion rules.
2. **Card primitives:** create `HeroPhotoCard` and `HeroFeatureCard` in `index.tsx`, and make `PhoneChat` accept a `className`.
3. **Left column:** rebuild the text block with a left-aligned layout, the existing copy, CTAs and demo trigger, and the new avatar proof row.
4. **Right grid:** build the 3-column staggered grid with cards A–F, set the image crops, and add the chip on card C.
5. **Background:** reposition `hero-atmosphere`, add the masked `imox-grid`, and remove the old full-width bottom photo.
6. **Responsive pass:** tune the `md` stacked layout and the `<md` 2-column grid (C spanning, D hidden), then check 375 / 768 / 1024 / 1280 / 1440px widths for overflow, crop quality and fold position.
7. **Motion pass:** apply the staggered reveal delays and hover states, then verify with reduced motion enabled.
8. **QA:** run `bun run lint` and `bun run build`, visually check in the browser pane at each breakpoint, check keyboard focus order (badge → H1 → CTAs → cards) and make sure the demo modal and `#download` links still work.
9. **Review:** share screenshots (desktop + mobile) for your sign-off, then make fine adjustments.

---

## Decisions to confirm with your approval

1. **Phone mockup as the center card (C).** I recommend keeping the product visible in the hero. The alternative is photos + feature cards only, which is closer to the reference but weaker at showing what iMOX does.
2. **Removing the full-width faded people photo** from the hero background, since its people move into the cards.
3. **Card F tint:** `brand-cyan` (cool, calm) or `brand-lime` (energetic accent, already used on the dark section). I recommend **cyan**.
4. **Header stays unchanged.** A dark pill CTA like the reference's is possible but out of scope unless you want it.
