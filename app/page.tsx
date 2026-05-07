import type { Metadata } from "next";
import { TransitionLink } from "@/components/transition-link";

export const metadata: Metadata = {
  title: { absolute: "Reda Herradi — Senior Software Engineer" },
  description:
    "Reda Herradi is a senior software engineer at Oracle, based in Morocco. He works on the Oracle Payment System and was previously on Datastudio.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Reda Herradi — Senior Software Engineer",
    description:
      "Senior frontend engineer at Oracle, based in Morocco. Working on the Oracle Payment System.",
    url: "/",
  },
  twitter: {
    title: "Reda Herradi — Senior Software Engineer",
    description:
      "Senior frontend engineer at Oracle, based in Morocco. Working on the Oracle Payment System.",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "url": "https://herradi.com/",
      "mainEntity": { "@id": "https://herradi.com/#person" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Reda Herradi based?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reda Herradi is based in Morocco.",
          },
        },
        {
          "@type": "Question",
          "name": "Where does Reda Herradi work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reda is a senior software engineer at Oracle, where he works on the Oracle Payment System.",
          },
        },
        {
          "@type": "Question",
          "name": "What did Reda Herradi do before Oracle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before Oracle, Reda led a frontend team at Nuitee on the WhiteLabel travel-site generator, and previously worked at Bell and SQLi on projects for Bell Media, Tesco, and Nespresso.",
          },
        },
        {
          "@type": "Question",
          "name": "What technologies does Reda Herradi work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reda specializes in frontend engineering with Vue.js, React, TypeScript, Next.js, and Node.js, with a focus on team leadership, web performance, and accessibility.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <h1 className="font-semibold mb-7 text-foreground">Reda Herradi</h1>
      <p className="mt-7">
        I&apos;m a senior software engineer at{" "}
        <a
          className="prose-link"
          href="https://www.oracle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oracle
        </a>
        , based in Morocco. These days I work on the Oracle Payment System —
        used by multi-billion-dollar companies to manage payments with their
        customers. Before that I spent a chapter on Datastudio, a data
        visualization and graph exploration tool, from active development
        through to its handover.
      </p>
      <p className="mt-7">
        The work I care most about is leading products that have a real impact
        — spotting the gaps where a team could be more efficient, and
        experimenting enough in the field to find the small things that quietly
        make everyone&apos;s life better. Some of that happens through the
        IAAP, where I sit alongside C-suite and directors to keep an eye on the
        new projects coming into the company. I was recently placed on a
        leadership track aimed at engineers the company is growing into bigger
        roles.
      </p>
      <p className="mt-7">
        You can read more about my{" "}
        <TransitionLink className="prose-link" href="/experience">
          experience
        </TransitionLink>
        , or get in{" "}
        <TransitionLink className="prose-link" href="/contact">
          contact
        </TransitionLink>
        .
      </p>
    </>
  );
}
