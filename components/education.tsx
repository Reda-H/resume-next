import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Tech University",
    year: "2018",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "State University",
    year: "2016",
  },
];

export function Education() {
  return (
    <section id="education" className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{edu.degree}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {edu.institution} • {edu.year}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}