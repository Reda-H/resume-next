import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

export function ExperienceItem({
  title,
  company,
  period,
  responsibilities,
  technologies,
}: ExperienceItemProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col space-y-1">
          <CardTitle className="text-xl">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {company} • {period}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 mb-4">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {responsibility}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}