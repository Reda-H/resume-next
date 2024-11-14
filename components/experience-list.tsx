import { ExperienceItem } from "./experience-item";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2020 - Present",
    responsibilities: [
      "Led a team of 5 developers in building a cloud-based analytics platform",
      "Implemented microservices architecture using Node.js and Docker",
      "Reduced system latency by 40% through optimization",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    title: "Software Engineer",
    company: "Innovation Labs",
    period: "2018 - 2020",
    responsibilities: [
      "Developed and maintained multiple client-facing web applications",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["Vue.js", "Python", "Docker", "PostgreSQL"],
  },
];

export function ExperienceList() {
  return (
    <section id="experience" className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </section>
  );
}