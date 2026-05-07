import type { Metadata } from "next";
import { TransitionLink } from "@/components/transition-link";

export const metadata: Metadata = {
  title: { absolute: "Reda Herradi — Senior Software Engineer" },
  description:
    "Reda Herradi is a senior software engineer at Oracle, based in Morocco. He works on OraclePayment System and was previously on Datastudio.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Reda Herradi — Senior Software Engineer",
    description:
      "Senior software engineer at Oracle, based in Morocco. Working on OraclePayment System.",
    url: "/",
  },
  twitter: {
    title: "Reda Herradi — Senior Software Engineer",
    description:
      "Senior software engineer at Oracle, based in Morocco. Working on OraclePayment System.",
  },
};

const faqs = [
  {
    q: "Where is Reda Herradi based?",
    a: "Reda Herradi is based in Morocco.",
  },
  {
    q: "Where does Reda Herradi work?",
    a: "Reda is a senior software engineer at Oracle, where he works on OraclePayment System.",
  },
  {
    q: "What did Reda Herradi do before Oracle?",
    a: "Before Oracle, Reda led a frontend team at Nuitee on the WhiteLabel travel-site generator, and previously worked at Bell and SQLi on projects for Bell Media, Tesco, and Nespresso.",
  },
  {
    q: "What technologies does Reda Herradi work with?",
    a: "Reda specializes in frontend engineering with Vue.js, React, TypeScript, Next.js, and Node.js, with a focus on team leadership, web performance, and accessibility.",
  },
];

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
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/resume-picture-headshot.webp"
        alt="Reda Herradi"
        width={80}
        height={80}
        className="mb-6 block h-20 w-20 object-cover rounded"
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
        , based in Morocco. These days I work on OraclePayment System —
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

      <h2 className="font-semibold mt-12 mb-2 text-foreground">FAQ</h2>
      <dl>
        {faqs.map((f) => (
          <div key={f.q} className="mt-6">
            <dt className="font-semibold text-foreground">{f.q}</dt>
            <dd className="mt-2">{f.a}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
