# CLAUDE.md

Guidance for Claude Code working in this repo.

## Commands

```bash
npm run dev      # localhost:3000
npm run build    # production build
npm run lint     # next lint
npm run indexnow # ping IndexNow (Bing/Yandex) with the live URL list
```

No tests. `next.config.js` sets `eslint.ignoreDuringBuilds: true`, so `npm run build`
skips linting — run `npm run lint` separately, it won't fail the build for you.

## Architecture

Multi-page resume site on Next.js 13.5.1 (App Router, TypeScript, Tailwind). All
content is hardcoded in page components or `lib/resume-data.ts` — no CMS, no
database, no API routes.

**Pages:**

- `app/page.tsx` — About + FAQ. `ProfilePage` + `FAQPage` JSON-LD.
- `app/experience/page.tsx` — Roles + education, written as narrative prose. `OrganizationRole` JSON-LD per role.
- `app/resume/page.tsx` — Formal one-page resume rendered from `lib/resume-data.ts`, with a PDF download button. `ProfilePage` + `OrganizationRole` + `EducationalOccupationalCredential` JSON-LD.
- `app/contact/page.tsx` — Email, phone, GitHub, LinkedIn.
- `app/layout.tsx` — Root metadata (OG, Twitter, robots, icons, Bing verification), site-wide `Person` + `WebSite` JSON-LD, the inline `<filter id="grain">` SVG used by view transitions, the sidebar shell, and `<Analytics />`.
- `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`, `app/opengraph-image.png`.

Every route prerenders to static HTML. There are no server-rendered pages —
only `middleware.ts` needs a runtime.

**Resume facts — where truth lives:**

`app/experience/page.tsx` is the authoritative source for job history. `lib/resume-data.ts`
is deliberately aligned to it so the two pages can't contradict each other. One
exception: the COSMiC freelance entry appears only in `resume-data.ts` (and so
only on `/resume` and the PDF) — it's kept off the narrative `/experience` page
by choice. If you change a date, title, or claim in one place, check the other.

**Resume PDF pipeline:**

- `lib/resume-data.ts` — single source of truth for `/resume` and the PDF. Bullets are arrays of `Segment`s (`{ text, bold? }`) so inline bold survives into both renderers.
- `lib/resume-pdf.tsx` — `@react-pdf/renderer` document. Deliberately *not* styled like the site: Times serif, centered header with rules, blue (`#0563c1`) links, disc bullets — it targets ATS/recruiters, not the web. Don't apply the site's palette or `--radius: 0` conventions here.
- `components/use-resume-download.tsx` — the hook. Dynamically `import()`s both `@react-pdf/renderer` and `lib/resume-pdf` on first click. This keeps the single largest dependency out of the initial bundle: `/resume` first-load JS is 81 kB, while the lazy PDF chunk alone is ~640 kB on disk. Don't convert these to static imports. Exposes `state: 'idle' | 'working' | 'error'`.
- `components/download-resume.tsx` — the button on `/resume` (bordered, "Download PDF").
- The sidebar has its own smaller download control using the same hook.

Generation is entirely client-side — there is no PDF endpoint.

**Components (four):**

- `components/sidebar-nav.tsx` — Sticky lowercase nav: About / Experience / Resume / Contact, plus the download control. Active item gets a dotted underline.
- `components/transition-link.tsx` — Wraps `next/link`. If `document.startViewTransition` exists, intercepts the click and routes inside it. Bails out on modified clicks and on `http`/`mailto`/`tel` hrefs. Otherwise falls back to plain client navigation.
- `components/download-resume.tsx`, `components/use-resume-download.tsx` — see above.

**Visit tracking pipeline:**

Still running, with no UI. The `/stats` page that rendered it was removed; the
counters keep incrementing in Redis and can be read from the Upstash console.

- `middleware.ts` runs at the edge on every page route. Classifies the User-Agent via `lib/ua-classify.ts` into `human` / `ai` / `bot`, then increments counters in Redis via `event.waitUntil()` so the response isn't blocked. Keys: `total:human` / `total:ai` / `total:bot`, plus `ua:ai` / `ua:bot` hashes keyed by crawler name.
- Humans are deduped with an anonymous `vid` cookie: random UUID, 30-day expiry, `HttpOnly` + `Secure` + `SameSite=Lax`. First visit sets the cookie and increments; subsequent visits with the cookie don't increment. AI/bots have no cookie support, so they count per request — which is the right metric for crawlers anyway.
- The matcher still excludes `stats` alongside `_next/`, `api/`, and static files. That exclusion is inert now that the route is gone, and left in place so it's correct again if the page comes back.
- `lib/redis.ts` reads either `KV_REST_API_URL` / `KV_REST_API_TOKEN` (Vercel KV) or `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` (direct Upstash). If neither is set, `redis` is `null` and the middleware no-ops gracefully — local dev without env vars still works.
- `lib/ua-classify.ts` has a hand-curated `MATCHERS` list of known AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) and search/social bots (Googlebot, Bingbot, facebookexternalhit, etc.), plus a generic regex fallback for unknown bots. Anything that doesn't match is `human`. Order matters — `Applebot-Extended` (ai) must be tested before `Applebot` (bot), which the latter's negative lookahead also guards.
- `@vercel/analytics` is mounted in the layout for client-side human analytics (cookieless).

**Dormant code — present but unreachable:**

The journal was removed as a set of routes but kept as content. `content/journal/*.tsx`
(two posts) and `lib/journal.ts` (the registry) are still here and still compile,
but nothing imports them. Restoring means re-adding `app/journal/page.tsx`,
`app/journal/[slug]/page.tsx`, and the RSS route — see git history at `75ab742`.
The RSS route (`app/feed.xml/route.ts`) was never committed, so it is *not*
recoverable from git.

Don't "clean up" these files as dead code — they're deliberately parked.

**SEO / indexing surface:**

- `app/sitemap.ts` — four URLs. Keep in sync when routes change.
- `public/llms.txt` — hand-written summary for LLM crawlers. Its Pages section lists the same four routes; update it alongside the sitemap.
- `scripts/indexnow.mjs` — hardcoded URL list submitted to IndexNow. **Also needs updating when routes change**, or it advertises 404s. Note it currently omits `/resume`.
- `public/google20e8e931a366f50c.html` and `public/e84d29ab5d3d586e6421127cec720aff.txt` are search-engine verification files. Don't touch.
- Bing verification lives in `app/layout.tsx` metadata (`msvalidate.01`).

**View transitions:**

- `TransitionLink` opts into the View Transitions API. Animations live in `app/globals.css`: desktop gets a grainy fade via `filter: url(#grain)` referencing the inline SVG filter in `layout.tsx`; mobile (`max-width: 767px`) gets a plain opacity cross-fade because mobile browsers don't reliably resolve `filter: url(#id)` on view-transition pseudo-element snapshots (causes a white flash). `prefers-reduced-motion` disables both.

**Styling conventions:**

- Color palette in `app/globals.css` as HSL CSS variables. Primary is Oracle Red, `hsl(7 59% 49%)` (`#C74634`-ish). Light mode only (`color-scheme: light`).
- `--radius: 0px` — sharp corners everywhere. Don't add rounded corners.
- `.prose-link` — underlined link with hover color shift to primary. Use it for inline links.
- Body uses OpenType features `ss01` and `cv11`; headings get `text-wrap: balance`.
- `tailwindcss-animate` is the only Tailwind plugin; `animate-in fade-in duration-500` on the article wrapper in `layout.tsx` is the only place its utilities are used.

## Deployment

Hosted on Vercel. `next.config.js` does **not** use `output: 'export'` because
middleware needs a server runtime — this stays true even though every page is now
static. Vercel KV env vars are auto-injected on deploy via the marketplace
integration. To run the tracking pipeline locally, copy the same `KV_REST_API_*`
vars into `.env.local`.
