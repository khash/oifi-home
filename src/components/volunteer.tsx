import { useState } from "react";
import { Users, Code, PenTool, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VolunteerForm } from "@/components/volunteer-form";

const roles = [
  {
    icon: Code,
    title: "Developers",
    description:
      "Help build and maintain our open-source tools and platforms.",
  },
  {
    icon: PenTool,
    title: "Researchers",
    description:
      "Contribute to data verification, fact-checking, and documentation.",
  },
  {
    icon: Globe,
    title: "Translators",
    description:
      "Make our resources accessible in Farsi, English, and other languages.",
  },
  {
    icon: Users,
    title: "Community Organizers",
    description:
      "Help spread awareness and build connections with allied organizations.",
  },
];

export function Volunteer() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  function openWithRole(role: string) {
    setSelectedRole(role);
    setFormOpen(true);
  }

  return (
    <>
      <section id="volunteer" className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Volunteer With Us
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Join a global community working to make information about Iran
              freely accessible to all.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
            {roles.map((role) => (
              <button
                key={role.title}
                type="button"
                onClick={() => openWithRole(role.title)}
                className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 text-left transition-colors hover:border-accent/50 cursor-pointer"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary">
                  <role.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{role.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" onClick={() => openWithRole("")}>
              Apply to Volunteer
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              All skill levels welcome. Remote opportunities available worldwide.
            </p>
          </div>
        </div>
      </section>

      <VolunteerForm
        open={formOpen}
        onOpenChange={setFormOpen}
        defaultRole={selectedRole}
      />
    </>
  );
}
