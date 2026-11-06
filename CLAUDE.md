# Benton Youth Initiative (BYI) — client notes

Redesign of https://www.bentonyouthinitiative.org (old site: Wix). Built by Sites on Polaris.

## Stack
Next.js 16 (App Router, TS) + Tailwind v4 (`@theme` tokens in `src/app/globals.css`). Static, no database.
Content lives in `src/lib/site.ts`. Fonts via `next/font/local` (woff2 from `@fontsource/cabin` and `@fontsource/source-sans-3`).
Forms: Netlify Forms (`apply`, `contact`), detected from `public/__forms.html` — keep field names in sync.
Deploy: Netlify with `@netlify/plugin-nextjs` (`netlify.toml`).
- Live (preview): https://benton-youth-initiative.netlify.app
- Netlify project `benton-youth-initiative`, team `sitesonpolaris`, site id `52629077-82ac-4853-b35d-a307815ea606`. Forms enabled (`apply`, `contact` detected).
- NOT yet linked to GitHub for continuous deploy. Link it in the Netlify dashboard (Project configuration → Build & deploy → Link repository → `sitesonpolaris/benton-youth-initiative`, branch `main`). After that, all changes go through the repo.
- Canonical URLs point at www.bentonyouthinitiative.org (the future custom domain).

## Identity
- Colors: navy `#27374b` (brand), navy-900 `#1b2636`, navy-950 `#141d29`, navy-700 `#34475f`, navy-50 `#f1f3f6`; gold `#eed44f` (brand), gold-600 `#d8bb2c`. Gold is used as a fill (with navy text), never as text on white.
- Fonts: Cabin (display), Source Sans 3 (= Source Sans Pro) for body.
- Motif: the crest's chevron — section edges cut as a chevron on desktop (`chevron-bottom` / `chevron-top` utilities).
- Live element: "Where do you fit?" path picker (student / parent / school or church / supporter) under the hero.
- Homepage flow: Mission → shortcuts → Who We Serve → What We Do → Our Impact → Programs & Events → Get Involved → Donate.

## Photos
Real BYI photos in `public/images/` (from the owner): NC A&T visit, student union visit, church Youth Sunday, community service. Need more (school visits, tours, gala) — the old Wix photos could not be downloaded from this environment.

## Owner must confirm before launch
- Impact numbers in `site.ts > impact` are SAMPLES (flag `confirmed: false` shows a note on the page).
- Donation gift levels and what each funds (`site.ts > donate.levels`) are samples.
- Donation platform: set up Zeffy (0% fees) or Givebutter, put the form URL in `donate.url`. It currently falls back to Cash App `$BentonYIScholars`.
- Founding year: old site says both 1994 and 2016 (using 2016).
- Email `info@bentonyouthinitative.com` — domain spelling differs from the website domain.
- Legal name (Benton Youth Initiative vs Benton's Youth Initiatives, Inc.) and 501(c)(3) EIN.
- Board list taken from the old /staff page; personal emails/phones were intentionally left off.
- Events copy (bus tours, All White Gala, Christmas party, service days) has no dates; no upcoming events listed.

## Redirects
`/byi-events` → `/events`, `/staff` → `/about#board` (next.config.ts).
