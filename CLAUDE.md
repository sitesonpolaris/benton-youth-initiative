# Benton Youth Initiative (BYI) — client notes

Redesign of https://www.bentonyouthinitiative.org (old site: Wix). Built by Sites on Polaris via the new-site workflow.

## Stack
Next.js 16 (App Router, TS) + Tailwind v4 (`@theme` tokens in `src/app/globals.css`). Static, no database.
Content lives in `src/lib/site.ts`. Fonts via `next/font/local` (woff2 from `@fontsource/cabin`, `@fontsource/cabin-condensed`, `@fontsource/source-sans-3`).
Forms: Netlify Forms (`apply`, `contact`), detected from `public/__forms.html` — keep field names in sync.

## Deploy
- Live (preview): https://benton-youth-initiative.netlify.app
- Netlify project `benton-youth-initiative`, team `sitesonpolaris`, site id `52629077-82ac-4853-b35d-a307815ea606`. Forms enabled.
- Deployed by direct upload. NOT yet linked to GitHub for continuous deploy. Link it in the Netlify dashboard (Project configuration → Build & deploy → Link repository → `sitesonpolaris/benton-youth-initiative`, branch `main`). After that, all changes go through the repo.
- GitHub repo is currently PUBLIC and its default branch is the feature branch: make it private and set default to `main`.
- Canonical URLs point at www.bentonyouthinitiative.org (the future custom domain).

## Identity — "The Road to Campus"
- Audience first: high schoolers heading to college (then parents, mentors, partners, donors).
- Colors: navy `#27374b`, gold `#eed44f`, midnight `#131c28`, paper `#f6f3ea`, paper-deep `#ebe5d5`, gold-deep `#d6b92a`. Gold is a fill (with midnight text), never text on paper.
- Fonts: Cabin Condensed 700 uppercase for display (`display` utility), Cabin for subheads/buttons (`font-heading`), Source Sans 3 body.
- Motif: college pennant (the crest's chevron) — `pennant` / `pennant-tail` utilities.
- Live element: "Campuses we've visited" pennant wall (NCCU, WSSU, A&T, Bennett, Clinton) showing real BYI photos.
- Homepage: video hero ("Your campus is waiting.") → gold shortcut bar → Mission (Mr. Benton portrait) → Who we serve → The road to college (4 stops) → Campuses → Impact (count-up + grads wall) → Programs & events → Get involved (path picker) → Donate (gift picker).

## Hero video
- `public/video/hero.mp4` (1920×1080, ~2.9 MB), `hero-mobile.mp4` (720×1280 portrait crop, ~1.2 MB), `hero-poster.jpg/.webp`.
- 4 Kling 3.0 Pro shots from gpt_image_2_5 keyframes (referenced from BYI's real NCCU + homecoming photos): van arrival at clock-tower hall, students walking the yard, admissions folder close-up, group cheering with an older mentor in a navy blazer (generic, not Mr. Benton). 11s loop with dissolves.
- Raw `<video>` HTML in `src/components/HeroVideo.tsx` with pause button, reduced-motion start paused, off-screen pause.
- Credits: keyframes 8 × 2.75 = 22, video 4 × 8.75 = 35 (≈57 total).

## Photos
Real BYI photos from the owner's Google Drive (folder 12UpAuWMOmgcglYboy9AmP0MDihVox-o8), resized into `public/images/`. File names describe content. Note: the crossed-arms group photo is at NCCU (not A&T); the student-union photo is WSSU.

## Owner must confirm before launch
- Impact numbers in `site.ts > impact` are SAMPLES (`confirmed: false` shows a note on the page).
- Donation gift levels and what each funds (`site.ts > donate.levels`) are samples.
- Donations: set up a Zeffy account and form, put the URL in `donate.url` (currently falls back to Cash App `$BentonYIScholars`).
- Campus photo captions: Bennett College and Clinton College photo contexts are inferred from banners/clothing — confirm.
- All White Party: copy says the 3rd annual was at Club Mirage, Charlotte, 25+ (from the flyer). Confirm whether it's annual and next date.
- Founding year: old site says both 1994 and 2016 (using 2016).
- Email `info@bentonyouthinitative.com` — domain spelling differs from the website domain.
- Legal name and 501(c)(3) EIN.
- Board contact info (About → Our board) copied from the old /staff page using the real tel/mailto targets. Confirm: Pierce and Smith had placeholder phones (555-555-5555, omitted); Thompson's email is jalexbenton@yahoo.com (likely Mr. Benton's, a Wix copy error?); Jerrell's (704) 806-4102 is also the template's placeholder link text; McCoy's (803) 328-8349 was hidden behind placeholder text. Get each member's OK to publish personal contact details.

## Redirects
`/byi-events` → `/events`, `/staff` → `/about#board` (next.config.ts).
