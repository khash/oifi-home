import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Non-profit organization
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
            Iran cannot be silenced
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty max-w-2xl mx-auto">
            OIFI keeps the people of Iran connected to the world, and keeps the
            world informed about Iran — during shutdowns, censorship, and
            attempts to impose digital isolation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#initiatives">
                Explore Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/charter">
                Read Our Charter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
