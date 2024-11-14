import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Presentation() {
  return (
    <section id="about" className="container py-12">
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex justify-center md:justify-start">
              <div className="relative h-64 w-64 overflow-hidden rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">John Doe</h1>
              <h2 className="text-2xl font-semibold text-foreground/80">Senior Software Engineer</h2>
              <p className="text-muted-foreground">
                Passionate software engineer with over 8 years of experience in full-stack development.
                Specialized in building scalable web applications and leading development teams.
                Strong advocate for clean code and best practices.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}