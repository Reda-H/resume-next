import type { Metadata } from "next";
import { TransitionLink } from "@/components/transition-link";
import { posts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from Reda Herradi on building software, design choices, and what works.",
  alternates: { canonical: "/journal" },
  openGraph: {
    title: "Journal — Reda Herradi",
    description:
      "Notes from Reda Herradi on building software, design choices, and what works.",
    url: "/journal",
  },
  twitter: {
    title: "Journal — Reda Herradi",
    description:
      "Notes from Reda Herradi on building software, design choices, and what works.",
  },
};

const SITE_URL = "https://herradi.com";
const PERSON_ID = `${SITE_URL}/#person`;

const journalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/journal#blog`,
  "url": `${SITE_URL}/journal`,
  "name": "Reda Herradi — Journal",
  "author": { "@id": PERSON_ID },
  "blogPost": posts.map((p) => ({
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/journal/${p.slug}#post`,
    "headline": p.title,
    "url": `${SITE_URL}/journal/${p.slug}`,
    "datePublished": p.date,
    "description": p.description,
    "author": { "@id": PERSON_ID },
  })),
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Journal() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(journalJsonLd) }}
      />
      <h1 className="font-semibold mb-7 text-foreground">Journal</h1>

      <ul>
        {posts.map((p) => (
          <li key={p.slug} className="mt-8">
            <h2 className="font-semibold text-foreground">
              <TransitionLink className="prose-link" href={`/journal/${p.slug}`}>
                {p.title}
              </TransitionLink>
              <span className="ml-2 font-normal text-[13px] text-foreground/40">
                {formatDate(p.date)}
              </span>
            </h2>
            <p className="mt-2 text-foreground/70">{p.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
