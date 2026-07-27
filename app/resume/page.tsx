import type { Metadata } from "next";
import { DownloadResume } from "@/components/download-resume";
import {
  profile,
  experience,
  education,
  skills,
  type Bullet,
  type Entry,
} from "@/lib/resume-data";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Reda Herradi's resume — senior software engineer at Oracle, 6+ years across Vue.js, React, and Oracle APEX. Experience, education, and skills, downloadable as PDF.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume — Reda Herradi",
    description:
      "Senior software engineer at Oracle. Full experience, education, and skills on one page.",
    url: "/resume",
  },
  twitter: {
    title: "Resume — Reda Herradi",
    description:
      "Senior software engineer at Oracle. Full experience, education, and skills on one page.",
  },
};

const PERSON_ID = "https://herradi.com/#person";

// Machine-readable resume. Facts mirror /experience (the authoritative source),
// so the two pages never contradict each other; COSMiC lives only here, since
// it's kept off the narrative /experience page by choice.
const resumeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "url": "https://herradi.com/resume",
      "mainEntity": { "@id": PERSON_ID },
    },
    {
      "@type": "OrganizationRole",
      "@id": "https://herradi.com/resume#oracle",
      "roleName": "Senior Software Engineer",
      "startDate": "2025-02",
      "member": { "@id": PERSON_ID },
      "memberOf": {
        "@type": "Organization",
        "name": "Oracle",
        "url": "https://www.oracle.com",
      },
      "description":
        "Led Datastudio (a financial analysis tool, React/Preact and Nx); now on Oracle Payment System, built on Oracle APEX — leading a team and enrolled in the IAAP architecture and project-approval program.",
    },
    {
      "@type": "OrganizationRole",
      "@id": "https://herradi.com/resume#nuitee",
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
        "Led a team of three frontend developers on WhiteLabel, a customizable travel-site generator; drove the admin dashboard redesign and a B2C overhaul. Vue.js, Node.js, SQL.",
    },
    {
      "@type": "OrganizationRole",
      "@id": "https://herradi.com/resume#bell",
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
        "Web projects for Bell and Bell Media in Vue.js, Adobe Experience Manager, and Java; reusable UI components, user tracking, third-party integrations, and data aggregation.",
    },
    {
      "@type": "OrganizationRole",
      "@id": "https://herradi.com/resume#sqli",
      "roleName": "Frontend Engineer",
      "startDate": "2021-07",
      "endDate": "2022-11",
      "member": { "@id": PERSON_ID },
      "memberOf": { "@type": "Organization", "name": "SQLi" },
      "description":
        "Frontend for clients including Tesco and Nestlé/Nespresso in NuxtJS, Vue.js, and TypeScript; worked with Nestlé's design team on Figma-to-production delivery.",
    },
    {
      "@type": "OrganizationRole",
      "@id": "https://herradi.com/resume#cosmic",
      "roleName": "Freelance Fullstack App Developer",
      "startDate": "2020-07",
      "endDate": "2021-07",
      "member": { "@id": PERSON_ID },
      "memberOf": { "@type": "Organization", "name": "COSMiC" },
      "description":
        "Built the COSMiC backend (CRUD, authentication, user management, astrological pattern calculations) in Python and Django with a React Native frontend; worked with the client and Y Combinator on the MVP.",
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

function Segments({ bullet }: { bullet: Bullet }) {
  return (
    <>
      {bullet.map((seg, i) =>
        seg.bold ? (
          <strong key={i} className="font-semibold text-foreground">
            {seg.text}
          </strong>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}

function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <div className="mt-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-semibold text-foreground">
          {entry.title}
          <span className="font-normal text-foreground/50"> · {entry.org}</span>
        </h3>
        <span className="shrink-0 text-[13px] text-foreground/40 tabular-nums">
          {entry.dates}
        </span>
      </div>
      <p className="text-[13px] text-foreground/40">{entry.location}</p>
      {entry.bullets && (
        <ul className="mt-2.5 list-disc space-y-1.5 pl-5 marker:text-primary/70">
          {entry.bullets.map((bullet, i) => (
            <li key={i}>
              <Segments bullet={bullet} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Resume() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
      />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-semibold text-foreground">{profile.name}</h1>
          <p className="mt-1 text-foreground/80">
            Senior Software Engineer — Oracle
          </p>
        </div>
        <DownloadResume />
      </div>

      <p className="mt-5 text-[13px] text-foreground/70">
        <a className="prose-link" href={`tel:${profile.phone}`}>
          {profile.phone}
        </a>
        <span className="mx-2 text-border">·</span>
        <a className="prose-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <span className="mx-2 text-border">·</span>
        <a
          className="prose-link"
          href={profile.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.site}
        </a>
      </p>

      <p className="mt-6">{profile.summary}</p>

      <h2 className="font-semibold mt-12 mb-2 text-foreground">Experience</h2>
      {experience.map((entry) => (
        <EntryBlock key={entry.org} entry={entry} />
      ))}

      <h2 className="font-semibold mt-12 mb-2 text-foreground">Education</h2>
      <EntryBlock entry={education} />

      <h2 className="font-semibold mt-12 mb-2 text-foreground">Skills</h2>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-primary/70">
        {skills.map((bullet, i) => (
          <li key={i}>
            <Segments bullet={bullet} />
          </li>
        ))}
      </ul>
    </>
  );
}
