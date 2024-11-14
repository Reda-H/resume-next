export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-5xl font-bold mb-2">John Doe</h1>
          <h2 className="text-xl text-muted-foreground">Senior Frontend Developer @ TechCorp</h2>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-foreground/80">About Me</a>
          <a href="#experience" className="hover:text-foreground/80">Experience</a>
          <a href="#education" className="hover:text-foreground/80">Education</a>
          <a href="#contact" className="hover:text-foreground/80">Contact Me</a>
        </nav>
      </header>

      <main>
        <section id="about" className="mb-12">
          <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4">Presentation</h3>
              <p className="text-muted-foreground">
                Senior Frontend Developer with over 5 years of experience specializing in React,
                modern JavaScript, and SEO. Currently leading frontend development initiatives
                and mentoring junior developers. Proven track record of driving adoption of
                best practices and delivering high-quality web applications. Demonstrates
                consistent growth through continuous learning and problem-solving.
              </p>
            </div>
            <div className="relative aspect-square">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
                alt="Profile"
                className="rounded-full object-cover"
              />
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