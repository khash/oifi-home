const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Charter", href: "#charter" },
  { label: "Initiatives", href: "#initiatives" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <a href="/" className="text-xl font-semibold text-foreground">
              OIFI
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              Open Information For Iran. A non-profit working to make information
              freely accessible — to the world, and from within Iran.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
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

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Open Information For Iran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
