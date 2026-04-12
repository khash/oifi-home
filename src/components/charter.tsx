import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const objectives = [
  {
    title: "Connectivity Continuity",
    description:
      "During shutdowns, a meaningful portion of the population must retain access to external communication.",
  },
  {
    title: "Outbound Information Integrity",
    description:
      "Verifiable information — visual evidence, eyewitness reporting, situational data — must continue to flow out of Iran.",
  },
  {
    title: "Internal Coordination",
    description:
      "Local, peer-to-peer communication independent of centralized infrastructure, usable within cities and communities.",
  },
  {
    title: "Resistance to Digital Isolation",
    description:
      "Persistent bridges to the global internet that counter the development of a fully enclosed national intranet.",
  },
  {
    title: "User Safety",
    description:
      "Tools that minimize detection risk. Adoption must not increase exposure to retaliation.",
  },
  {
    title: "Global Visibility",
    description:
      "Events inside Iran remain visible externally, independent of state-controlled narratives.",
  },
];

export function Charter() {
  return (
    <section id="charter" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What We Work Toward
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Seven strategic objectives drawn from our founding charter. Each one
            shapes the infrastructure we build, the tools we ship, and the data
            we make public.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {objectives.map((objective, i) => (
              <div
                key={objective.title}
                className="flex gap-4 rounded-lg border border-border bg-card p-6"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-mono text-accent-foreground">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {objective.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <a href="/charter">
                Read the Full Charter
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
