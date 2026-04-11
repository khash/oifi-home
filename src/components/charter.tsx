import { Check } from "lucide-react";

const principles = [
  {
    title: "Commitment to Accuracy",
    description:
      "All information published undergoes rigorous verification processes. We cite primary sources and clearly distinguish between facts and analysis.",
  },
  {
    title: "Political Independence",
    description:
      "OIFI maintains strict independence from any government, political party, or interest group. Our work serves knowledge, not agendas.",
  },
  {
    title: "Open Methodology",
    description:
      "Our research methods are publicly documented. We welcome peer review and constructive criticism to improve our work.",
  },
  {
    title: "Accessibility",
    description:
      "Information should be available to all. We provide resources in multiple formats and work to reduce barriers to access.",
  },
  {
    title: "Ethical Standards",
    description:
      "We adhere to the highest ethical standards in research and data handling, protecting sources and respecting privacy.",
  },
  {
    title: "Collaborative Spirit",
    description:
      "We partner with academic institutions, civil society organizations, and independent researchers to strengthen our collective impact.",
  },
];

export function Charter() {
  return (
    <section id="charter" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our Charter
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            The principles that guide everything we do. These commitments define
            who we are and how we operate.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="flex gap-4 rounded-lg border border-border bg-card p-6"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Check className="h-4 w-4 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
