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

export const profile = {
  name: "Reda Herradi",
  phone: "+212697444476",
  email: "herradi.r@gmail.com",
  site: "herradi.com",
  siteUrl: "https://herradi.com",
  summary:
    "Senior Software Engineer with 6+ years of experience, specializing in Vue.js, React.js, Oracle APEX, and modern JavaScript. Currently leading a team at Oracle, delivering large-scale enterprise applications across financial and payment systems. Proven track record of driving adoption of best practices, mentoring engineers, and shipping high-quality web applications. Consistently growing in scope and leadership responsibility, seeking opportunities to leverage deep technical expertise in an innovative environment.",
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
          " working and developing on a monolith architecture, driving end-to-end delivery from architecture to production."
        ),
      ],
      [
        s("Transitioned to the "),
        b("Oracle Payment Systems"),
        s(" project, a large-scale multi-team initiative built on "),
        b("Oracle APEX"),
        s("."),
      ],
      [
        s(
          "Completed a structured leadership training programme over three months and now leads a team within Oracle Payment Systems and is enrolled in "
        ),
        b("IAAP,"),
        s(
          " an architecture and project approval program, coordinating cross-team delivery and technical direction."
        ),
      ],
    ],
  },
  {
    org: "Nuitee",
    location: "Casablanca, Morocco",
    title: "Frontend Lead",
    dates: "Feb 2024–December 2024",
    bullets: [
      [
        s("Lead a team of 3 frontend developers for the "),
        b("WhiteLabel"),
        s(
          " project, a highly customizable travel website generator for partners."
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
      [
        s(
          "Implemented best practices, elevating code quality, performance, and architecture across the entire frontend codebase."
        ),
      ],
      [
        s(
          "Utilized Vue.js for frontend development, while expanding skills in Node.js backend and SQL database management."
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
          "Created reusable UI components such as cards, sliders, and banners, improving consistency across projects - Collaborated effectively with cross-functional teams including designers, backend developers, and project stakeholders."
        ),
      ],
      [
        s(
          "Participated in regular code reviews, helping maintain high code quality standards across interconnected projects."
        ),
      ],
      [
        s(
          "Assisted onboarding new team members, providing technical support and guidance."
        ),
      ],
    ],
  },
  {
    org: "SQLi",
    location: "Rabat, Morocco",
    title: "Frontend Engineer",
    dates: "July 2021–November 2022",
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
      [
        s(
          "Conducted code reviews for TypeScript-based projects, contributing to code quality and best practices."
        ),
      ],
      [
        s(
          "Gained valuable experience in project planning and task management, supporting team efficiency."
        ),
      ],
    ],
  },
  {
    org: "COSMiC",
    location: "Rabat, Morocco",
    title: "Freelance Fullstack App Developer",
    dates: "July 2020–July 2021",
    bullets: [
      [
        s(
          "Developed the main features of the COSMiC backend system, including all CRUD requests, authentication, user management, user creation and astrological pattern calculations based on a physics based model of planetary movement using "
        ),
        b("Python"),
        s(" for backend and "),
        b("React Native"),
        s(" for frontend."),
      ],
      [
        s(
          "Implemented user matching behaviour based on astrological patterns using "
        ),
        b("Django."),
      ],
      [
        s(
          "Worked closely with the client and Y Combinator to help with developing the MVP and design tokens for future development using "
        ),
        b("Figma"),
        s("."),
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

export const skills: Bullet[] = [
  [
    s(
      "Proficient in VueJs, React.js, Oracle APEX, modern Javascript, Typescript, NodeJs, AEM, Git, Figma, Jira."
    ),
  ],
  [
    s(
      "Strong leadership skills with experience managing and coordinating multiple engineering teams; effective communicator with clients and cross-functional stakeholders."
    ),
  ],
];
