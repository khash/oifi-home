const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Charter", href: "/charter" },
  { label: "Initiatives", href: "/#initiatives" },
  { label: "Terms", href: "/terms" },
];

const projectLinks = [
  { label: "Databook ↗", href: "https://databook.oifi.org" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Branding */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2">
              <img src="/oifi-icon.png" alt="OIFI" className="h-6 w-6 dark:invert" />
              <span className="text-xl font-semibold text-foreground">OIFI</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Open Information For Iran. A non-profit keeping Iran connected to
              the world, and the world informed about Iran.
            </p>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-foreground">Projects</p>
            <nav className="flex flex-col gap-3">
              {projectLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-foreground">Organization</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Open Information For Iran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
