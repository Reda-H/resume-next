// Single source of truth for the resume, consumed by both the on-screen
// /resume page (site design) and the generated PDF (lib/resume-pdf.tsx).
//
// Bullets are arrays of segments so inline bold survives into both renderers.
// A segment with `bold: true` is emphasized; plain strings stay regular weight.

export type Segment = { text: string; bold?: boolean };
export type Bullet = Segment[];

export type Entry = {
  org: string;
  location: string;
  title: string;
  dates: string;
  bullets?: Bullet[];
};

// A skills row: a category label plus a comma-separated list. Kept as data
// rather than pre-joined strings so the page and the PDF can style the label.
export type SkillGroup = { label: string; items: string };

export const profile = {
  name: "Reda Herradi",
  phone: "+212697444476",
  // Display form for the phone: the raw string above is what `tel:` needs.
  phoneDisplay: "+212 697 444 476",
  email: "herradi.r@gmail.com",
  site: "herradi.com",
  siteUrl: "https://herradi.com",
  github: "github.com/Reda-H",
  githubUrl: "https://github.com/Reda-H",
  linkedin: "linkedin.com/in/reda-herradi",
  linkedinUrl: "https://www.linkedin.com/in/reda-herradi/",
  summary:
    "Senior software engineer at Oracle, leading a team on Oracle Payment System — the payments platform multi-billion-dollar companies use to manage payments with their customers. Previously led end-to-end frontend delivery of Datastudio, a financial analysis tool built on React/Preact and Nx. Six years across fintech, travel, and telecom.",
};

// Small helper so bullet data reads cleanly below.
const s = (text: string): Segment => ({ text });
const b = (text: string): Segment => ({ text, bold: true });

export const experience: Entry[] = [
  {
    org: "Oracle",
    location: "Casablanca, Morocco",
    title: "Senior Software Engineer",
    dates: "Feb 2025–Present",
    bullets: [
      [
        s("Led frontend development of the "),
        b("Datastudio"),
        s(
          " project, delivering a financial analysis tool built primarily with "
        ),
        b("React.js/Preact and Nx,"),
        s(
          " driving end-to-end delivery from architecture to production."
        ),
      ],
      [
        s("Transitioned to the "),
        b("Oracle Payment System"),
        s(" project, a large-scale multi-team initiative built on "),
        b("Oracle APEX"),
        s("."),
      ],
      [
        s(
          "Completed a three-month leadership programme; now leading a team within Oracle Payment System, coordinating cross-team delivery and technical direction."
        ),
      ],
      [
        s("Enrolled in "),
        b("IAAP,"),
        s(
          " Oracle's architecture and project-approval programme, reviewing incoming projects alongside C-suite and directors."
        ),
      ],
    ],
  },
  {
    org: "Nuitee",
    location: "Casablanca, Morocco",
    title: "Frontend Lead",
    dates: "Feb 2024–Dec 2024",
    bullets: [
      [
        s("Led a team of three frontend developers on "),
        b("WhiteLabel"),
        s(
          ", a highly customizable travel-site generator for Nuitee's partners."
        ),
      ],
      [
        s(
          "Spearheaded the complete redesign and development of the admin dashboard, significantly improving user experience and functionality."
        ),
      ],
      [
        s(
          "Orchestrated a major overhaul of the B2C interface, resulting in increased client satisfaction and a notable rise in successful sales by more than 120%."
        ),
      ],
    ],
  },
  {
    org: "Bell",
    location: "Morocco",
    title: "Software Engineer",
    dates: "Dec 2022–Jan 2024",
    bullets: [
      [
        s("Contributed to multiple web-based projects for "),
        b("Bell/Bell Media"),
        s(" using Vue.js, Adobe Experience Manager, and Java."),
      ],
      [
        s(
          "Developed key features including user tracking, third-party integrations, and data aggregation, enhancing platform functionality."
        ),
      ],
      [
        s(
          "Created reusable UI components — cards, sliders, and banners — keeping design consistent across Bell's interconnected web projects."
        ),
      ],
      [
        s(
          "Worked directly with designers, backend developers, and stakeholders to take features from spec to production."
        ),
      ],
    ],
  },
  {
    org: "SQLi",
    location: "Rabat, Morocco",
    title: "Frontend Engineer",
    dates: "Jul 2021–Nov 2022",
    bullets: [
      [
        s("Developed frontend solutions for major clients including "),
        b("Tesco"),
        s(" and "),
        b("Nestlé/Nespresso"),
        s(" using NuxtJS, Vue.js, and TypeScript."),
      ],
      [
        s(
          "Implemented user tracking features in collaboration with the Analytics Team, enhancing data-driven capabilities."
        ),
      ],
      [
        s("Worked closely with "),
        b("Nestlé Designer Team"),
        s(
          " to accurately implement Figma designs, ensuring high-quality user interfaces."
        ),
      ],
      [
        s(
          "Built and optimized various frontend components including dynamic cards, interactive sliders, and customizable banners."
        ),
      ],
    ],
  },
  {
    org: "COSMiC",
    location: "Rabat, Morocco",
    title: "Full-Stack Developer (Freelance)",
    dates: "Jul 2020–Jul 2021",
    bullets: [
      [
        s(
          "Built the main COSMiC backend features — CRUD, authentication, user management, and astrological calculations from a physics-based planetary model — in "
        ),
        b("Python"),
        s(" and Django, with a "),
        b("React Native"),
        s(" frontend."),
      ],
      [
        s("Worked directly with the client and "),
        b("Y Combinator"),
        s(" on the MVP and "),
        b("Figma"),
        s(" design tokens for future development."),
      ],
    ],
  },
];

export const education: Entry = {
  org: "Al Akhawayn University in Ifrane",
  location: "Ifrane, Morocco",
  title: "Bachelor of Computer Science",
  dates: "May 2020",
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: "TypeScript, JavaScript, Python, Java, SQL",
  },
  {
    label: "Frameworks & Libraries",
    items:
      "React, Preact, Vue.js, NuxtJS, Next.js, React Native, Node.js, Django, FastAPI, Oracle APEX",
  },
  {
    label: "Tools & Platforms",
    items: "Nx, Git, Figma, Jira, Adobe Experience Manager",
  },
  {
    label: "Leadership",
    items:
      "Team leadership, technical direction, cross-team coordination, mentoring, stakeholder communication",
  },
];
