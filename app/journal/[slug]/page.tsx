import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TransitionLink } from "@/components/transition-link";
import { getPost, posts } from "@/lib/journal";

const SITE_URL = "https://herradi.com";
const PERSON_ID = `${SITE_URL}/#person`;

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const url = `/journal/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${post.title} — Reda Herradi`,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: ["Reda Herradi"],
    },
    twitter: {
      title: `${post.title} — Reda Herradi`,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function JournalPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/journal/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": { "@id": PERSON_ID },
    "publisher": { "@id": PERSON_ID },
    "mainEntityOfPage": url,
    "url": url,
    "isPartOf": { "@id": `${SITE_URL}/journal#blog` },
    ...(post.keywords ? { keywords: post.keywords.join(", ") } : {}),
  };

  const { Body } = post;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="mb-8 text-[13px]">
        <TransitionLink className="prose-link" href="/journal">
          ← Journal
        </TransitionLink>
      </p>
      <h1 className="font-semibold text-foreground">{post.title}</h1>
      <p className="mt-2 text-[13px] text-foreground/40">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
      <Body />
    </>
  );
}
