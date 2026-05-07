import { Github, Linkedin, Mail } from "lucide-react";
import mainImage from "@/assets/resume-picture-headshot2.webp"
import Image from "next/image";
import { Button } from "@/components/ui/button";

const experience = [
  {
    company: {
      name: "Oracle",
      url: "https://www.oracle.com"
    },
    role: "Senior Frontend Engineer",
    startDate: "February 2025",
    endDate: "Present",
    responsibilities: [
      "Work on the development of Datastudio, a data visualization and graph exploration tool for Oracle customers",
    ],
  },
  {
    company: {
      name: "Nuitee",
      url: "https://nuitee.com"
    },
    role: "Senior Frontend Developer",
    startDate: "February 2024",
    endDate: "December 2024",
    responsibilities: [
      "Lead a team of 3 frontend developers for the WhiteLabel project, a highly customizable travel website generator for partners",
      "Spearheaded the complete redesign and development of the admin dashboard, significantly improving user experience and functionality",
      "Orchestrated a major overhaul of the B2C interface, resulting in increased client satisfaction and a notable rise in successful sales",
      "Implemented best practices, elevating code quality, performance, and architecture across the entire frontend codebase",
      "Utilized Vue.js for frontend development, while expanding skills in Node.js backend and SQL database management",
      "Integrated advanced SEO techniques, enhancing the visibility and reach of partner websites",
      "Received consistent praise for technical expertise and leadership in driving project improvements"
    ],
  }, {
    company: {
      name: "Bell",
      url: "https://www.bellmedia.ca/"
    },
    role: "Software Engineer",
    startDate: "December 2022",
    endDate: "January 2024",
    responsibilities: [
      "Contributed to multiple web-based projects for Bell/Bell Media using Vue.js, Adobe Experience Manager, and Java",
      "Developed key features including user tracking, third-party integrations, and data aggregation, enhancing platform functionality",
      "Created reusable UI components such as cards, sliders, and banners, improving consistency across projects",
      "Collaborated effectively with cross-functional teams including designers, backend developers, and project stakeholders",
      "Participated in regular code reviews, helping maintain high code quality standards across interconnected projects",
      "Assisted in onboarding new team members, providing technical support and guidance",
    ],
  }, {
    company: {
      name: "SQLi",
      url: "https://www.sqli.com/int-en"
    },
    role: "Software Engineer",
    startDate: "July 2021",
    endDate: "November 2022",
    responsibilities: [
      "Developed frontend solutions for major clients including Tesco and Nestlé/Nespresso using NuxtJS, Vue.js, and TypeScript",
      "Implemented user tracking features in collaboration with the Analytics Team, enhancing data-driven capabilities",
      "Worked closely with Nestlé Designer Team to accurately implement Figma designs, ensuring high-quality user interfaces",
      "Built and optimized various frontend components including dynamic cards, interactive sliders, and customizable banners",
      "Conducted code reviews for TypeScript-based projects, contributing to code quality and best practices",
      "Gained valuable experience in project planning and task management, supporting team efficiency",
    ],
  },
];

const contactLinks = [
  { href: "mailto:herradi.reda@gmail.com", Icon: Mail, label: "Email", external: false },
  { href: "https://github.com/Reda-H", Icon: Github, label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/reda-herradi/", Icon: Linkedin, label: "LinkedIn", external: true },
];

export default function Home() {
  const currentRole = experience[0];

  return (
    <div className="flex flex-col gap-12 max-w-5xl mx-auto px-4 md:px-6 py-12 relative z-10">
      <header id="header" className="w-full flex flex-col md:flex-row items-center md:justify-center md:gap-8 scroll-mt-20">
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <h1 className="oswald-700 text-[80px] md:text-[120px] font-bold mb-2 leading-[0.9] md:leading-none">
            Reda<br className="md:hidden" />{" "}Herradi
          </h1>

          <div className="relative aspect-square w-4/5 mx-auto md:hidden">
            <Image
              src={mainImage}
              alt="Profile"
              className="rounded-full object-cover"
              unoptimized
              fill
              priority
            />
          </div>

          <div className="flex flex-col md:flex-row gap-2 justify-center md:justify-start text-center md:text-left">
            <h2 className="oswald-700 text-[32px] text-muted-foreground w-fit mx-auto md:mx-0">
              {currentRole.role} @ {currentRole.company.name}
            </h2>
            <div className="flex flex-row items-center justify-center md:justify-start gap-8 md:gap-4 px-2">
              {contactLinks.map(({ href, Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground w-16 md:w-auto md:animate-bounce"
                >
                  <Button variant="default" size="icon" className="rounded-[8px] w-full md:hidden">
                    <Icon className="w-6 h-6 text-white" />
                  </Button>
                  <Icon className="hidden md:inline w-6 h-6 text-primary hover:text-primary/60" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block relative aspect-square min-w-[310px] w-[310px]">
          <Image
            src={mainImage}
            alt="Profile"
            className="rounded-full object-cover"
            unoptimized
            fill
            priority
          />
        </div>
      </header>

      <main className="flex flex-col gap-12">
        <section id="about" className="scroll-mt-20">
          <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 kanit-800 text-black border-b border-black">Presentation</h3>
              <p className="text-muted-foreground kanit-300">
                Senior Frontend Engineer with 5 years of experience, specializing in ReactJs, VueJs, modern JavaScript, and SEO. Currently working for a top leading software company in the world. Proven track record of driving adoption of best practices and delivering high-quality web applications. Demonstrates consistent growth through continuous learning and problem-solving. Seeking opportunities to leverage technical expertise and leadership skills in an innovative environment.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20">
          <h3 className="kanit-800 text-black text-lg font-semibold mb-6 border-b border-black">Experience</h3>
          <div className="space-y-8">
            {experience.map((item) => (
              <div key={item.company.name} className="pb-2 border-b border-gray-300">
                <div className="flex justify-between mb-2 hover-animation md:flex-row flex-col">
                  <h4 className="font-medium text-lg kanit-600 text-black">
                    {item.role}{" "}
                    <span className="block md:inline">
                      @ <a href={item.company.url} className="text-primary kanit-600">{item.company.name}</a>
                    </span>
                  </h4>
                  <span className="text-black kanit-300">{item.startDate} - {item.endDate}</span>
                </div>
                <ul className="responsibilities text-muted-foreground space-y-2">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="kanit-300">{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="scroll-mt-20">
          <h3 className="text-lg font-semibold mb-4 kanit-800 text-black border-b border-black">Education</h3>
          <div className="pb-6 flex flex-row gap-2">
            <h4 className="font-medium kanit-600 text-black">
              Bachelor of Computer Science<span className="hidden md:inline"> @</span>
            </h4>
            <a href="https://aui.ma/" target="_blank" rel="noopener noreferrer" className="text-primary kanit-400">Al Akhawayn University in Ifrane</a>
          </div>
        </section>

        <section id="contact">
          <h3 className="text-lg font-semibold mb-4 kanit-800 text-black border-b border-black">Contact Me</h3>
          <div className="flex flex-col space-y-2 no-underline">
            <a href="mailto:herradi.r@gmail.com" className="flex flex-row w-full justify-between no-underline hover-animation">
              <p className="text-muted-foreground no-underline">Email</p>
              <p className="text-muted-foreground no-underline">herradi.r@gmail.com</p>
            </a>
            <a href="tel:+212697444476" className="flex flex-row w-full justify-between no-underline hover-animation">
              <p className="text-muted-foreground no-underline">Phone</p>
              <p className="text-muted-foreground no-underline">+212 697 444 476</p>
            </a>
            <a href="https://github.com/Reda-H" target="_blank" rel="noopener noreferrer" className="flex flex-row w-full justify-between no-underline hover-animation">
              <p className="text-muted-foreground no-underline">GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/reda-herradi/" target="_blank" rel="noopener noreferrer" className="flex flex-row w-full justify-between no-underline hover-animation">
              <p className="text-muted-foreground no-underline">LinkedIn</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
