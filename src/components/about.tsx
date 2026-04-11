import { Globe, Lock, Users } from "lucide-react";

const values = [
  {
    icon: Globe,
    title: "Open Access",
    description:
      "We believe information should flow freely in both directions — to the world about Iran, and to people inside Iran who face censorship and restrictions.",
  },
  {
    icon: Lock,
    title: "Transparency",
    description:
      "Our methodologies, sources, and processes are documented and available for public scrutiny.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description:
      "We collaborate with researchers, journalists, and advocates worldwide to ensure accuracy and relevance.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            About OIFI
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            The Open Information For Iran initiative is a non-profit organization with a
            dual mission: making accurate, well-sourced information about Iran available
            to the world, and helping people inside Iran circumvent censorship to freely
            access information themselves. We work with researchers, technologists,
            journalists, and civil society to keep knowledge open in both directions.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="relative rounded-lg border border-border bg-background p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <value.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
