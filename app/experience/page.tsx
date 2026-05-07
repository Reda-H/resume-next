import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Reda Herradi's professional history — Oracle (Datastudio, Payment System), Nuitee, Bell, and SQLi.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience — Reda Herradi",
    description:
      "Roles at Oracle, Nuitee, Bell, and SQLi, with education at Al Akhawayn University.",
    url: "/experience",
  },
  twitter: {
    title: "Experience — Reda Herradi",
    description:
      "Roles at Oracle, Nuitee, Bell, and SQLi, with education at Al Akhawayn University.",
  },
};

const PERSON_ID = "https://herradi.com/#person";

const experienceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "url": "https://herradi.com/experience",
      "mainEntity": { "@id": PERSON_ID },
    },
    {
      "@type": "OrganizationRole",
      "@id": "https://herradi.com/experience#oracle",
      "roleName": "Senior Software Engineer",
      "startDate": "2025-02",
      "member": { "@id": PERSON_ID },
      "memberOf": {
        "@type": "Organization",
        "name": "Oracle",
        "url": "https://www.oracle.com",
      },
      "description":
        "Senior software engineer on the Oracle Payment System; previously on Datastudio. Member of the IAAP and on a leadership track.",
    },
    {
      "@type": "OrganizationRole",
      "@id": "https://herradi.com/experience#nuitee",
      "roleName": "Frontend Lead",
      "startDate": "2024-02",
      "endDate": "2024-12",
      "member": { "@id": PERSON_ID },
      "memberOf": {
        "@type": "Organization",
        "name": "Nuitee",
        "url": "https://nuitee.com",
      },
      "description":
        "Led a team of three frontend developers on WhiteLabel, a customizable travel-site generator. Drove the admin dashboard redesign and B2C overhaul.",
    },
    {
      "@type": "OrganizationRole",
      "@id": "https://herradi.com/experience#bell",
      "roleName": "Software Engineer",
      "startDate": "2022-12",
      "endDate": "2024-01",
      "member": { "@id": PERSON_ID },
      "memberOf": {
        "@type": "Organization",
        "name": "Bell",
        "url": "https://www.bell.ca",
      },
      "description":
        "Software engineer across web projects for Bell and Bell Media in Vue.js, Adobe Experience Manager, and Java.",
    },
    {
      "@type": "OrganizationRole",
      "@id": "https://herradi.com/experience#sqli",
      "roleName": "Frontend Engineer",
      "startDate": "2021-07",
      "endDate": "2022-11",
      "member": { "@id": PERSON_ID },
      "memberOf": {
        "@type": "Organization",
        "name": "SQLi",
      },
      "description":
        "Frontend engineering for clients including Tesco and Nespresso, in NuxtJS, Vue, and TypeScript.",
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Bachelor's Degree",
      "educationalLevel": "Bachelor",
      "name": "Bachelor of Computer Science",
      "recognizedBy": {
        "@type": "CollegeOrUniversity",
        "name": "Al Akhawayn University in Ifrane",
        "url": "https://www.aui.ma",
      },
    },
  ],
};

export default function Experience() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceJsonLd) }}
      />
      <h1 className="font-semibold mb-7 text-foreground">Experience</h1>

      <h2 className="font-semibold mt-10 mb-3 text-foreground">
        Oracle{" "}
        <span className="font-normal text-foreground/40">
          — Feb 2025 to present
        </span>
      </h2>
      <p className="mt-4">
        I joined Oracle to work on Datastudio, a data visualization and graph
        exploration tool, and stayed with the project from active development
        through to its handover. Since then I&apos;ve moved onto the Oracle
        Payment System — used by multi-billion-dollar companies to manage
        payments with their customers — leading a team, contributing to product
        design, and writing code as well as shipping it.
      </p>
      <p className="mt-4">
        As part of the IAAP I also work alongside C-suite and directors on the
        new projects coming into Oracle, and was recently placed on a
        leadership track aimed at engineers being grown into bigger roles.
      </p>

      <h2 className="font-semibold mt-10 mb-3 text-foreground">
        Nuitee{" "}
        <span className="font-normal text-foreground/40">
          — Feb 2024 to Dec 2024
        </span>
      </h2>
      <p className="mt-4">
        I led a team of three frontend developers on WhiteLabel, a heavily
        customizable travel-site generator for Nuitee&apos;s partners. The
        biggest pieces of work were a complete redesign of the admin dashboard
        and a top-to-bottom overhaul of the B2C interface — both of which
        moved client satisfaction and conversion in the right direction.
      </p>
      <p className="mt-4">
        Alongside that I pushed standards across the codebase — architecture,
        performance, code quality — and added the SEO layer that helped
        partner sites actually get found. The stack was Vue, with a healthy
        amount of Node and SQL once I started crossing into backend territory.
      </p>

      <h2 className="font-semibold mt-10 mb-3 text-foreground">
        Bell{" "}
        <span className="font-normal text-foreground/40">
          — Dec 2022 to Jan 2024
        </span>
      </h2>
      <p className="mt-4">
        I worked as a software engineer across a handful of web projects for
        Bell and Bell Media, in Vue.js, Adobe Experience Manager, and Java.
        Most of my time went into the reusable UI layer — cards, sliders,
        banners, the usual — plus the user tracking, third-party integrations,
        and data aggregation behind the scenes.
      </p>
      <p className="mt-4">
        The team was the cross-functional kind: designers, backend developers,
        and project stakeholders all in the same loop. I did a lot of code
        review and helped onboard new engineers alongside the feature work.
      </p>

      <h2 className="font-semibold mt-10 mb-3 text-foreground">
        SQLi{" "}
        <span className="font-normal text-foreground/40">
          — Jul 2021 to Nov 2022
        </span>
      </h2>
      <p className="mt-4">
        My first stint as a software engineer was on frontend work for clients
        like Tesco and Nespresso, in NuxtJS, Vue, and TypeScript. I built and
        shipped a lot of components — dynamic cards, interactive sliders,
        configurable banners — implemented the user-tracking layer with the
        analytics team, and worked directly with Nestlé&apos;s design team to
        keep the Figma-to-production gap tight.
      </p>
      <p className="mt-4">
        It&apos;s also where I picked up the basics of project planning, code
        review at scale, and the muscle memory of working with big-brand
        stakeholders.
      </p>

      <h2 className="font-semibold mt-10 mb-3 text-foreground">Education</h2>
      <p className="mt-4">
        Bachelor of Computer Science, Al Akhawayn University in Ifrane.
      </p>
    </>
  );
}
