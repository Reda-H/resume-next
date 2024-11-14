import { Github, Linkedin, Mail } from "lucide-react";
import mainImage from "@/assets/resume-picture-headshot2.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="w-full flex flex-row md:flex-col gap-12">
        <div className="flex items-center gap-8 justify-start md:justify-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold mb-2 oswald-800 text-[120px]">Reda Herradi</h1>
            <div className="flex flex-row gap-2">
              <h2 className="text-xl text-muted-foreground oswald-800 text-[32px]">Senior Frontend Developer @ Nuitee</h2>
              <div className="flex items-center flex-row justify-start gap-4 px-2">
                <a href="mailto:herradi.reda@gmail.com" className="text-muted-foreground hover:text-foreground animate-bounce">
                  <Mail className="w-6 h-6 text-primary hover:text-primary/60" />
                </a >
                <a href="https://github.com/redaherradi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground animate-bounce">
                  <Github className="w-6 h-6 text-primary hover:text-primary/60" />
                </a>
                <a href="https://linkedin.com/in/redaherradi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground animate-bounce">
                  <Linkedin className="w-6 h-6 text-primary hover:text-primary/60" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative aspect-square min-w-[310px] w-[310px]">
            <Image
              src={mainImage}
              alt="Profile"
              className="rounded-full object-cover"
              fill
              priority
            />
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="mb-12 scroll-mt-20">
          <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 kanit-800 text-black">Presentation</h3>
              <p className="text-muted-foreground">
                Senior Frontend Engineer with over 3 years of experience, specializing in VueJs, modern JavaScript, and SEO. Currently leading frontend development initiatives and mentoring junior developers. Proven track record of driving adoption of best practices and delivering high-quality web applications. Demonstrates consistent growth through continuous learning and problem-solving. Seeking opportunities to leverage technical expertise and leadership skills in an innovative environment.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Experience</h3>
          <div className="space-y-8">
            <div className="border-b pb-6">
              <div className="flex justify-between mb-2">
                <h4 className="font-medium">Senior Frontend Developer @ TechCorp</h4>
                <span className="text-muted-foreground">February 2024 - Present</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Led a team of 3 frontend developers for the WhiteLabel project</li>
                <li>Implemented responsive designs and development of the admin dashboard</li>
                <li>Established best practices, elevating code quality and architecture</li>
              </ul>
            </div>

            <div className="border-b pb-6">
              <div className="flex justify-between mb-2">
                <h4 className="font-medium">Frontend Developer @ StartupCo</h4>
                <span className="text-muted-foreground">January 2022 - January 2024</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Developed key features including user tracking and data aggregation</li>
                <li>Built reusable UI components improving consistency across projects</li>
                <li>Participated in code reviews and maintained high code quality standards</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Education</h3>
          <div className="border-b pb-6">
            <h4 className="font-medium">Bachelor of Computer Science</h4>
            <p className="text-muted-foreground">Tech University • 2020</p>
          </div>
        </section>

        <section id="contact">
          <h3 className="text-lg font-semibold mb-6">Contact Me</h3>
          <div className="flex flex-col space-y-2">
            <p className="text-muted-foreground">john.doe@example.com</p>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
            <div className="flex space-x-4">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                GitHub
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}