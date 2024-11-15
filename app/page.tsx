'use client';

import { Github, Linkedin, Mail } from "lucide-react";
import mainImage from "@/assets/resume-picture-headshot2.jpg"
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { Button } from "@/components/ui/button";

export default function Home() {

  const isMobile = useIsMobile();

  const experience = [
    {
      company: {
        name: "Nuitee",
        url: "https://nuitee.com"
      },
      role: "Senior Frontend Developer",
      startDate: "February 2024",
      endDate: "Present",
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
        "Created reusable UI components such as cards, sliders, and banners, improving consistency across projects", "Collaborated effectively with cross-functional teams including designers, backend developers, and project stakeholders",
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

  return (
    <div className="flex flex-col gap-12 max-w-5xl mx-auto px-4 md:px-6 py-12">
      <header id="header" className="w-full flex flex-row md:flex-col md:gap-12 scroll-mt-20">
        <div className="flex flex-col md:flex-row items-center justify-start md:justify-center md:gap-8 w-full">
          <div className={isMobile ? "flex flex-col gap-2 w-fit" : "flex flex-col gap-2"}>
            {isMobile ?
              <div className="flex flex-col w-fit">
                <h1 className="text-5xl font-bold mb-2 oswald-800 text-[80px]">Reda</h1>
                <h1 className="text-5xl font-bold mb-2 oswald-800 text-[80px]">Herradi</h1>
              </div>
              :
              <h1 className="text-5xl font-bold mb-2 oswald-800 md:text-[120px]">Reda Herradi</h1>}
            {
              isMobile && (
                <div className="relative aspect-square w-4/5 mx-auto">
                  <Image
                    src={mainImage}
                    alt="Profile"
                    className="rounded-full object-cover"
                    unoptimized
                    fill
                    loading="lazy"
                  />
                </div>
              )
            }
            <div className={isMobile ? "flex flex-col gap-2 justify-center text-center" : "flex flex-row gap-2"}>
              <h2 className="text-lg md:text-xl text-muted-foreground oswald-800 text-[32px] w-fit">{experience[0].role} @ {experience[0].company.name}</h2>
              <div className={isMobile ? "flex items-center flex-row justify-center gap-8 px-2" : "flex items-center flex-row justify-start gap-4 px-2"}>
                <a href="mailto:herradi.reda@gmail.com" className={isMobile ? "text-muted-foreground hover:text-foreground w-16" : "text-muted-foreground hover:text-foreground animate-bounce"}>
                  {
                    isMobile ?
                      <Button variant="default" size="icon" className="rounded-[8px] w-full">
                        <Mail className="w-6 h-6 text-white" />
                      </Button>
                      :
                      <Mail className="w-6 h-6 text-primary hover:text-primary/60" />
                  }
                </a >
                <a href="https://github.com/Reda-H" target="_blank" rel="noopener noreferrer" className={isMobile ? "text-muted-foreground hover:text-foreground w-16" : "text-muted-foreground hover:text-foreground animate-bounce"}>
                  {
                    isMobile ?
                      <Button variant="default" size="icon" className="rounded-[8px] w-full">
                        <Github className="w-6 h-6 text-white" />
                      </Button>
                      :
                      <Github className="w-6 h-6 text-primary hover:text-primary/60" />
                  }
                </a>
                <a href="https://www.linkedin.com/in/reda-herradi/" target="_blank" rel="noopener noreferrer" className={isMobile ? "text-muted-foreground hover:text-foreground w-16" : "text-muted-foreground hover:text-foreground animate-bounce"}>
                  {
                    isMobile ?
                      <Button variant="default" size="icon" className="rounded-[8px] w-full">
                        <Linkedin className="w-6 h-6 text-white" />
                      </Button>
                      :
                      <Linkedin className="w-6 h-6 text-primary hover:text-primary/60" />
                  }
                </a>

              </div>
            </div>
          </div>
          {
            !isMobile
            && <div className="relative aspect-square min-w-[310px] w-[310px]">
              <Image
                src={mainImage}
                alt="Profile"
                className="rounded-full object-cover"
                unoptimized
                fill
                loading="lazy"
              />
            </div>
          }
        </div>
      </header>

      <main className="flex flex-col gap-12">
        <section id="about" className="scroll-mt-20">
          <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 kanit-800 text-black border-b border-black">Presentation</h3>
              <p className="text-muted-foreground kanit-300">
                Senior Frontend Engineer with 4 years of experience, specializing in VueJs, modern JavaScript, and SEO. Currently leading frontend development initiatives and mentoring junior developers. Proven track record of driving adoption of best practices and delivering high-quality web applications. Demonstrates consistent growth through continuous learning and problem-solving. Seeking opportunities to leverage technical expertise and leadership skills in an innovative environment.
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
                  {
                    isMobile ?
                      <div className="flex flex-col">
                        <h4 className="font-medium text-lg kanit-600 text-black">{item.role}</h4>
                        <a href={item.company.url} className="text-primary kanit-600 text-lg">@ {item.company.name}</a>
                      </div>
                      :
                      <h4 className="font-medium text-lg kanit-600 text-black">{item.role} @ <a href={item.company.url} className="text-primary">{item.company.name}</a></h4>
                  }
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
            {isMobile ? <h4 className="font-medium kanit-600 text-black">Bachelor of Computer Science</h4> : <h4 className="font-medium kanit-600 text-black">Bachelor of Computer Science @ </h4>}
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
            <a href="tel:+16472478864" className="flex flex-row w-full justify-between no-underline hover-animation">
              <p className="text-muted-foreground no-underline">Phone</p>
              <p className="text-muted-foreground no-underline">+1 647 247 88 64</p>
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