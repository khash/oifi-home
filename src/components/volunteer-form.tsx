import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitForm } from "@/lib/forms";

const roles = ["Developer", "Researcher", "Translator", "Community Organizer"];

interface VolunteerFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultRole?: string;
}

export function VolunteerForm({ open, onOpenChange, defaultRole }: VolunteerFormProps) {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    role: defaultRole ?? "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  function set(field: string, value: string) {
    setFields((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await submitForm({ formType: "volunteer", data: fields });
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  function handleOpenChange(open: boolean) {
    if (!open) {
      setFields({ name: "", email: "", role: defaultRole ?? "", message: "" });
      setStatus("idle");
      setError("");
    }
    onOpenChange(open);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apply to Volunteer</DialogTitle>
          <DialogDescription>
            Join our global community working to keep information open and accessible.
            All skill levels welcome — remote opportunities available worldwide.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="py-6 text-center">
            <p className="text-base font-medium text-foreground">Application received.</p>
            <p className="mt-1 text-sm text-muted-foreground">We'll be in touch soon.</p>
            <Button className="mt-6" onClick={() => handleOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="vol-name">Name</Label>
              <Input
                id="vol-name"
                placeholder="Your name"
                value={fields.name}
                onChange={(e) => set("name", e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="vol-email">Email</Label>
              <Input
                id="vol-email"
                type="email"
                placeholder="you@example.com"
                value={fields.email}
                onChange={(e) => set("email", e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="vol-role">Area of Interest</Label>
              <select
                id="vol-role"
                value={fields.role}
                onChange={(e) => set("role", e.target.value)}
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <option value="" disabled>
                  Select a role…
                </option>
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="vol-message">
                Tell us about yourself{" "}
                <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <Textarea
                id="vol-message"
                placeholder="Background, skills, motivation…"
                rows={3}
                value={fields.message}
                onChange={(e) => set("message", e.target.value)}
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={status === "loading"} className="mt-2">
              {status === "loading" ? "Submitting…" : "Submit Application"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
