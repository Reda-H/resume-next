import { posts } from "@/lib/journal";

const SITE_URL = "https://herradi.com";
const FEED_URL = `${SITE_URL}/feed.xml`;
const CHANNEL_TITLE = "Reda Herradi — Journal";
const CHANNEL_DESCRIPTION =
  "Notes from Reda Herradi on building software, design choices, and what works.";

// Fully static: the post list only changes when the registry changes.
export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function pubDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toUTCString();
}

export function GET() {
  // posts is newest-first, so [0] is the latest publication.
  const lastBuildDate = posts[0] ? pubDate(posts[0].date) : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/journal/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate(post.date)}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(CHANNEL_TITLE)}</title>
    <link>${SITE_URL}/journal</link>
    <description>${escapeXml(CHANNEL_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
