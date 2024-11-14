import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export function ContactInfo() {
  return (
    <section id="contact" className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <Card>
        <CardHeader>
          <CardTitle>Let's Connect</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <Button variant="outline" className="w-full justify-start gap-2">
              <Mail className="h-4 w-4" />
              john.doe@example.com
            </Button>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Phone className="h-4 w-4" />
              +1 (555) 123-4567
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              asChild
            >
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              asChild
            >
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}