import { useState } from "react";
import { Heart, Share2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContactForm } from "@/components/contact-form";
import { submitForm } from "@/lib/forms";

export function Support() {
  const [contactOpen, setContactOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNewsletterStatus("loading");
    try {
      await submitForm({ formType: "newsletter", data: { email: newsletterEmail } });
      setNewsletterStatus("success");
    } catch {
      setNewsletterStatus("error");
    }
  }

  return (
    <>
      <section id="support" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Support Our Mission
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              There are many ways to contribute to open information access for
              Iran. Your support makes our work possible.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {/* Support our mission */}
            <div className="flex flex-col rounded-xl bg-primary-foreground/5 p-8 backdrop-blur-sm border border-primary-foreground/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/10">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Support Our Mission</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-foreground/70">
                Believe in the right to free information? Stand with us. Whether you have time, skills, or simply a voice — your support helps keep knowledge open and accessible.
              </p>
              <div className="mt-6">
                <Button
                  variant="secondary"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={() => setContactOpen(true)}
                >
                  Get Involved
                </Button>
              </div>
            </div>

            {/* Spread the word */}
            <div className="flex flex-col rounded-xl bg-primary-foreground/5 p-8 backdrop-blur-sm border border-primary-foreground/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/10">
                <Share2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Spread the Word</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-foreground/70">
                Share our mission with your network. Follow us on social media and help amplify voices advocating for open information access.
              </p>
              <div className="mt-6">
                <Button
                  variant="secondary"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="#">Share Our Mission</a>
                </Button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col rounded-xl bg-primary-foreground/5 p-8 backdrop-blur-sm border border-primary-foreground/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/10">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Stay Connected</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-foreground/70">
                Subscribe to our newsletter for updates on our initiatives, research findings, and ways to get involved.
              </p>
              <div className="mt-6">
                {newsletterStatus === "success" ? (
                  <p className="text-sm font-medium text-primary-foreground">
                    You're subscribed. Thank you.
                  </p>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:border-primary-foreground/50 focus-visible:ring-primary-foreground/20"
                    />
                    {newsletterStatus === "error" && (
                      <p className="text-xs text-primary-foreground/70">Something went wrong. Try again.</p>
                    )}
                    <Button
                      type="submit"
                      variant="secondary"
                      className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      disabled={newsletterStatus === "loading"}
                    >
                      {newsletterStatus === "loading" ? "Subscribing…" : "Subscribe"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-2xl rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-8 text-center">
            <p className="text-lg font-medium">
              OIFI is an independent, volunteer-run initiative.
            </p>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Every contribution goes directly toward our research and infrastructure.
            </p>
          </div>
        </div>
      </section>

      <ContactForm open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}
