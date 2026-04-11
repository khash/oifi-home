import { Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Initiatives() {
  return (
    <section id="initiatives" className="py-20 md:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our Initiatives
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Ongoing projects that advance our mission of open information access.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="overflow-hidden rounded-xl border border-border bg-background">
            <div className="p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary">
                  <Database className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      The Databook Project
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      Active
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A comprehensive, open-source database documenting verified information
                    about Iran. The Databook aggregates data from reliable sources, providing
                    researchers and the public with structured, searchable access to
                    demographic, economic, social, and historical information.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      Open Data
                    </span>
                    <span className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      Research
                    </span>
                    <span className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      Documentation
                    </span>
                  </div>

                  <div className="mt-8">
                    <Button variant="outline" size="sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            More initiatives coming soon. Want to contribute?{" "}
            <a href="#" className="font-medium text-foreground hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
