import { Radio, Eye, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Radio,
    title: "Connectivity Continuity",
    description:
      "During shutdowns, a meaningful portion of the population must retain access to external communication. Connectivity should be degraded — never eliminated.",
  },
  {
    icon: Eye,
    title: "Global Visibility",
    description:
      "Events inside Iran must remain visible to the outside world, with verifiable information flowing out continuously — independent of state-controlled narratives.",
  },
  {
    icon: ShieldCheck,
    title: "User Safety",
    description:
      "Tools and systems are designed to minimize detection risk. Adoption must never increase exposure to retaliation.",
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
            Open Information For Iran is a non-profit countering two forces at
            once: the Iranian state's ability to disconnect its population from
            the global internet, and its ability to obscure events inside the
            country from the outside world. We build infrastructure,
            circumvention tools, and open datasets so that people inside Iran
            can communicate, and so that the world can continue to see and
            understand what happens there.
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
