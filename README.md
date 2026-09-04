# odd by Common Space — Website

A contemporary coffee & dining space in Batam. Editorial design, bilingual (EN/ID), built for local SEO and easy updates by the owner.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** with custom design tokens (off-white, deep red, soft pink, muted blue, charcoal)
- **Framer Motion** for subtle scroll reveal
- **next/font** for Instrument Serif (display) + Inter (body) + JetBrains Mono (labels)
- No CMS, no DB — content lives in `lib/` as TypeScript modules

## Project structure

```
app/
├── layout.tsx              # Root layout (fonts, html)
├── [lang]/
│   ├── layout.tsx          # Locale layout (JSON-LD, StickyNav, Footer)
│   ├── page.tsx            # Homepage
│   ├── menu/page.tsx
│   ├── space/page.tsx
│   ├── about/page.tsx
│   └── visit/page.tsx
├── sitemap.ts
├── robots.ts
└── not-found.tsx
components/
├── nav/StickyNav.tsx
├── sections/               # Hero, BrandStatement, SignatureDrinks, Food, TheSpace, Reviews, Location, Footer
└── ui/                     # FadeIn, SectionLabel, LanguageToggle, Marquee, Button
lib/
├── config.ts               # Site config — name, address, hours, social
├── menu.ts                 # Menu data — single source of truth
├── i18n.ts                 # Bilingual dictionary
├── seo.ts                  # JSON-LD builders
└── photos.ts               # Placeholder photo URLs (Unsplash)
middleware.ts               # i18n routing
```

## Develop

```bash
npm install
npm run dev
# open http://localhost:3000 → redirects to /en
```

## Build

```bash
npm run build
npm start
```

## Deploy

This project is built for **Vercel** (recommended) or any Node host.

1. Push to GitHub.
2. Import the repo on Vercel.
3. Set environment variable: `NEXT_PUBLIC_SITE_URL` to your final domain.
4. Deploy.

## Editing content

### Update opening hours
Edit `lib/config.ts` → `hours` object.

### Update menu / prices / items
Edit `lib/menu.ts`. Homepage featured items are tagged with `featured: true` on the relevant items.

### Update social links
Edit `lib/config.ts` → `social.instagram` (and `social.linktree` when ready).

### Update copy (EN / ID)
Edit `lib/i18n.ts`. TypeScript will flag any missing key.

### Replace photos
Two options:

1. **Use Unsplash URLs** (already in `lib/photos.ts`) — change URLs there.
2. **Use local files** — drop files into `public/images/` and change `lib/photos.ts` to reference `/images/yourfile.jpg`.

Set `next.config.mjs` `images.remotePatterns` if you swap to a new host.

## SEO

- Per-page `<title>`, `<meta description>`, OpenGraph
- `hreflang` alternates (en, id)
- `sitemap.xml` and `robots.txt` auto-generated
- JSON-LD: `CafeOrCoffeeShop + Restaurant` on every page; `Menu` schema on `/menu`
- Google Maps embed without API key (replace `config.googleMapsEmbed` with a more precise share URL once the owner provides one)

## Verifying before launch

1. `npm run build` must pass.
2. Lighthouse on `/en` (incognito): Performance ≥ 90, SEO = 100, Accessibility ≥ 95.
3. Schema.org validator for `/en/menu` and `/en`.
4. Mobile preview at 375px — every section should stack cleanly.
5. Click `MENU` in nav → smooth-scroll or route to `/en/menu`.
6. Toggle `EN / ID` — current path preserved.
7. Phone numbers / coordinates / social handles — none are fabricated. Edit `lib/config.ts` to add them only when owner confirms.

## Outstanding items for the owner

- [ ] Confirm **opening hours** (currently `10:00 — 22:00`).
- [ ] Send **final photos** to replace Unsplash placeholders.
- [ ] Send **Linktree URL** if applicable.
- [ ] Confirm **phone number** (currently none — no fabricated call button).
- [ ] Confirm **precise Google Maps share link** for better embed.

## License

Code is the property of the project owner. Unsplash photos are used under the [Unsplash License](https://unsplash.com/license).
