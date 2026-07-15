# Zafir360 codebase map

Read this before touching pages/components. Saves re-discovering structure per task.

## Stack
Next.js 16 (App Router, Turbopack), React 19, Tailwind v4, TypeScript strict. i18n via `[lang]` dynamic segment (en/ar/ku dictionaries as JSON, no i18n library routing).

## The 3-layer page pattern (always follow this)
For any page at `/{route}`:
1. **Components** — `src/components/Front-Pages/<PageName>/<Thing>.tsx` (PascalCase folder per page, kebab/PascalCase file per section — e.g. `Categories/Categories-heo.tsx`, `About-us/Journey.tsx`). Each file = one section (Hero, Cta, Grid, Timeline...), default-exported, dumb/presentational, hardcoded English copy unless the page already threads a dict prop.
2. **View** — `src/views/<group>/<PageName>View.tsx` (group = `front-pages`, `marketplace`, `wholesale`, `supplier`, `seller`, `trust`, `help`, `factory`...). Imports the section components, stacks them in order inside a `<div>`. Named export `export function XView({ lang }: Props)`. Mark `"use client"` if any child needs it (most do, for hover/interaction).
3. **Page route** — `src/app/[lang]/<route>/page.tsx`. Always the same shape:
   ```tsx
   import { notFound } from "next/navigation";
   import { hasLocale } from "@/utils/getDictionary";
   import { XView } from '@/views/<group>/XView';

   export default async function XPage({ params }: PageProps<'/[lang]/<route>'>) {
     const { lang } = await params;
     if (!hasLocale(lang)) notFound();
     return <XView lang={lang} />;
   }
   ```
   Some pages also `await getDictionary(lang)` and pass a dict slice as a second prop (e.g. `about`) — only when the View actually threads translations through; new pages can skip this and hardcode English.

New page checklist: write section components → compose in a View → drop in a 3-line page.tsx. Never inline JSX straight in page.tsx.

**Standing rules (apply to every new page, no need to ask again):**
- Hero wrapper uses `className="px-7 py-[76px] pb-14 border-b border-[#D8D5CD]"` (matches Home hero exactly) — gives top clearance from the sticky navbar, not stuck flush against it. Superseded an earlier `pt-5` version — use `py-[76px] pb-14`.
- Every section wrapper (including the last one in a View) uses `py-16` on its outermost element — this is already the default for every section built so far, so no extra work: just don't shrink it on the last section.

## Design tokens (hardcoded hex everywhere, no theme file)
- Background: `#FAFAF8` (page), `#F3F2EF` / `#FBEEE4` (alt/tinted sections)
- Border: `#D8D5CD`
- Text: `#15130F` (headings/dark), `#4C493F` (body), `#6B6759` (muted)
- Accent: `#EA580C` (orange, brand), hover `#C2410C`, tint bg `#FFF1E7` / `#FDF3EA`
- Dark surface (CTAs, bento tiles): `#15130F` bg, white text, `#B9B5AA` muted-on-dark
- Container: `max-w-[1180px] mx-auto px-7` (self-contained per-section) — OR outer `<div className="container mx-auto px-4 py-12">` wrapping a View whose sections have no own px-7 (About-us-style pages do this; Categories/Features-style pages self-pad). Either is fine, match whichever the page's sibling group already uses.
- Standard hero shape: `<header className="px-7 pb-14 border-b border-[#D8D5CD]"><div className="max-w-[1180px] mx-auto">` + eyebrow span (`text-[0.78rem] font-semibold tracking-[0.08em] uppercase text-[#C2410C]`) + `h1` (`text-[clamp(2.1rem,1.6rem+2vw,3.4rem)] font-bold`) + lede `p`.
- Standard dark CTA band: `bg-[#15130F] text-white rounded-[16px] p-[52px] flex items-center justify-between gap-8 flex-wrap` with white pill button. See `About-cta.tsx`, `Story-cta.tsx`, `Final-cta.tsx`, `Leadership-cta.tsx`.
- Standard timeline: vertical line (`absolute left-[11px] w-[2px] bg-[#D8D5CD]`) + dot per step (`w-6 h-6 rounded-full border-2 border-[#EA580C] bg-[#FFF1E7]`). See `About-us/Journey.tsx`, `Mission-vision/Timeline.tsx`.
- Standard stat card: `border border-[#D8D5CD] rounded-[12px] p-6 text-center`, big number `text-[2rem] font-extrabold`, label below muted.
- Standard feature/person/value card: `bg-white border border-[#D8D5CD] rounded-[16px] p-6/7 hover:border-[#EA580C] hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(21,19,15,0.08)] transition-all`.

## Navbar (`src/components/common/Navbar.tsx` + `src/config/navigation.ts`)
`navEntries` array of `{type:"link"}` or `{type:"dropdown"}`. Dropdown = 2 columns (`headingKey` + items), each item has `labelKey`, `descKey`, `href`, `icon`. Icons live in `src/components/common/NavIcons.tsx` (hand-rolled inline SVG, no icon library installed — add new ones there, export in `navIcons` map). Mega-menu renders icon+title+desc per item, matches theme (orange accent tiles).

## Footer (`src/components/common/Footer.tsx`)
3-column grid: brand block (logo/slogan/contact/social) left, 6 link-section grid (`footerSections` array) middle, newsletter form right. `lg:grid-cols-[240px_minmax(0,1fr)_200px]`. Link sections currently: Corporate, Trust, Marketplace, Factory, Learning Center, Legal — links only, target pages may not exist yet (that's fine, footer is just nav scaffolding, don't auto-create pages for footer links unless asked).

## i18n dictionaries (`src/data/dictionaries/{en,ar,ku}.json`)
Flat-ish namespaced keys (`"nav.help.center"` style but actually stored as `"help.center"` inside a `"nav"` object, etc). `footer` prop passed to `<Footer>` is `{...dict.footer, ...dict.nav}` merged (see `[lang]/layout.tsx`), so nav.* keys are reachable from footer too. When adding new UI copy that must be translatable, add the key to **all three** files (en/ar/ku) — components use `t(key, englishFallback)` so missing keys don't crash, but translations silently fall back to English if you skip ar/ku. For net-new pages built from scratch (mission-vision, leadership, help/*), hardcoding English directly in the component is the established pattern — skip dict entirely unless the page already had one.

## Known gotcha: `PageProps<'/[lang]/<route>'>` type error
`Type '"/[lang]/x"' does not satisfy the constraint '"/"'` = stale `.next/dev/types/routes.d.ts` cache (duplicate `type AppRoutes` declaration shadowing the fresh one in `.next/types/routes.d.ts`). Fix: delete `.next` (or just `.next/dev/types`), restart `next dev`, restart TS server. Not a real code bug — don't chase it in source.

## Verifying changes
No screenshot/browser tool in this environment. Verify via:
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/en/<route>" -UseBasicParsing
```
and grep the returned HTML for expected strings. Dev server is usually already running on :3000 (started by user) — don't spawn a second one, it'll just fail on port conflict; hit the existing one.

## Porting static HTML mockups → Next page
When given old static-site HTML (e.g. `mission-vision.html`) to port: strip nav/footer (already exist as `Navbar`/`Footer`), keep only the `<main>`-ish content sections, convert each `<section>` to one component under `Front-Pages/<PageName>/`, reuse the design tokens/patterns above instead of the old page's own CSS classes (`.bento`, `.stat-row`, `.cta-band` etc. — translate visually, not literally). If the ask is to merge multiple HTML files into one route, just stack all their sections in one View in source order.

## History: boss-directed changes (2026-07-09) — may be reverted

Boss (Sam, Nortra LLC) sent two revision docs + a standalone HTML mockup requesting site changes. Only 3 items were implemented so far, per explicit instruction; the rest of the revision brief (hero 3-button rewrite, "Sam-Verified" rename, trust proof-point row, product tier tags) is still backlog, not done.

**User's own words when assigning this: "this time we might remove it in future so update the claude md file for history."** Treat this section as provisional — if a future session is asked to strip this back out, this is the map of what to touch.

1. **Header WhatsApp button** (`Navbar.tsx`, desktop `hidden xl:flex` group + mobile menu block) — links to `https://wa.me/9647700000360`. Number reused from the existing Footer contact link. The boss's SRS doc (`zafir360/Zafir360_SRS (1).docx`) only ever contains the literal placeholder text `(+964 number)` — no real digits anywhere in the document. If a real number is ever provided, update it in both `Navbar.tsx` and `Footer.tsx`.
2. **Flag icons in language switcher** (`LanguageSwitcher.tsx`) — added a `localeFlags` map pointing at `/america.jpg` (en), `/Flag-Iraq.webp` (ar), `/Flag_of_Kurdistan.svg` (ku), all pre-existing files the user dropped into `public/`. Shown next to the locale name in both the trigger button and the dropdown options.
3. **French removed, Kurdish added** — locale set changed from `en/fr/ar` to `en/ar/ku`. Touched: `src/config/i18n.ts` (locales/localeNames/localeDirections/localePatterns), `src/utils/getDictionary.ts` (dictionary map), `src/proxy.ts` (locale list for accept-language redirect), deleted `src/data/dictionaries/fr.json`, added `src/data/dictionaries/ku.json` (Sorani/Central Kurdish — RTL, Arabic-based script, matches `Flag_of_Kurdistan.svg`/Iraqi Kurdistan Region context). `ku.json` mirrors every real (non-dead) key in `en.json`; it deliberately excludes the orphaned `auth`/`dashboard`/`children`/`alerts`/`settings` namespaces that exist in `en.json`/`ar.json` as unused leftovers from an unrelated template — no component reads those keys.

**To revert**: restore `fr` in the 3 config files above, restore `src/data/dictionaries/fr.json` from git history, decide whether to keep or drop `ku.json`/Kurdish, remove the `localeFlags` map and `<img>` tags from `LanguageSwitcher.tsx`, remove the WhatsApp `<a>` blocks from `Navbar.tsx`.
