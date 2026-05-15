# CLAUDE.md

Guidance for Claude Code working in this repo.

## Commands

```bash
npm run dev      # localhost:3000
npm run build    # production build
npm run lint     # next lint
```

No tests.

## Architecture

Multi-page resume site on Next.js 13.5.1 (App Router, TypeScript, Tailwind). All resume content is hardcoded in the page components — no CMS, no data layer.

**Pages:**

- `app/page.tsx` — About + FAQ. Includes `ProfilePage` + `FAQPage` JSON-LD.
- `app/experience/page.tsx` — Roles + education. Includes `OrganizationRole` JSON-LD per role.
- `app/contact/page.tsx` — Email, phone, GitHub, LinkedIn.
- `app/stats/page.tsx` — Live visit breakdown (people / AI models / bots). Server component, `revalidate = 60`. Reads Redis (`total:human`, `total:ai`, `total:bot`, plus `hgetall('ua:ai')` / `hgetall('ua:bot')`). Falls back to a placeholder if `redis` is null.
- `app/layout.tsx` — Root metadata (OG, Twitter, robots, icons), site-wide `Person` + `WebSite` JSON-LD, the inline `<filter id="grain">` SVG used by view transitions, the sidebar shell, and `<Analytics />`.
- `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`, `app/opengraph-image.png`.

**Components (only two):**

- `components/sidebar-nav.tsx` — Sticky lowercase nav: About / Experience / Contact / Stats. Active item gets a dotted underline.
- `components/transition-link.tsx` — Wraps `next/link`. If `document.startViewTransition` exists, intercepts the click and routes inside it. Otherwise falls back to plain client navigation.

**Visit tracking pipeline:**

- `middleware.ts` runs at the edge on every page route (matcher excludes `_next/`, `api/`, `stats`, static files). Classifies the User-Agent via `lib/ua-classify.ts` into `human` / `ai` / `bot`, then increments counters in Redis via `event.waitUntil()` so the response isn't blocked.
- Humans are deduped with an anonymous `vid` cookie: random UUID, 30-day expiry, `HttpOnly` + `Secure` + `SameSite=Lax`. First visit sets the cookie and increments; subsequent visits with the cookie don't increment. AI/bots have no cookie support, so they count per request — which is the right metric for crawlers anyway.
- `lib/redis.ts` reads either `KV_REST_API_URL` / `KV_REST_API_TOKEN` (Vercel KV) or `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` (direct Upstash). If neither is set, `redis` is `null` and the middleware/stats page no-op gracefully — local dev without env vars still works.
- `lib/ua-classify.ts` has a hand-curated `MATCHERS` list of known AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) and search/social bots (Googlebot, Bingbot, facebookexternalhit, etc.), plus a generic regex fallback for unknown bots. Anything that doesn't match is `human`.
- `@vercel/analytics` is mounted in the layout for client-side human analytics (cookieless).

**View transitions:**

- `TransitionLink` opts into the View Transitions API. Animations live in `app/globals.css`: desktop gets a grainy fade via `filter: url(#grain)` referencing the inline SVG filter in `layout.tsx`; mobile (`max-width: 767px`) gets a plain opacity cross-fade because mobile browsers don't reliably resolve `filter: url(#id)` on view-transition pseudo-element snapshots (causes a white flash). `prefers-reduced-motion` disables both.

**Styling conventions:**

- Color palette in `app/globals.css` as HSL CSS variables. Primary is Oracle Red, `hsl(7 59% 49%)` (`#C74634`-ish). Light mode only.
- `--radius: 0px` — sharp corners everywhere. Don't add rounded corners.
- `.prose-link` — underlined link with hover color shift to primary. Use it for inline links.
- Body uses OpenType features `ss01` and `cv11`; headings get `text-wrap: balance`.
- `tailwindcss-animate` is the only Tailwind plugin; `animate-in fade-in duration-500` on the article wrapper in `layout.tsx` is the only place its utilities are used.

## Deployment

Hosted on Vercel. `next.config.js` does **not** use `output: 'export'` because middleware needs a server runtime; pages still statically prerender at build time. Vercel KV env vars are auto-injected on deploy via the marketplace integration. To run the stats pipeline locally, copy the same `KV_REST_API_*` vars into `.env.local`.
