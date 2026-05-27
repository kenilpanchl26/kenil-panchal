export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 text-lg font-medium">
              <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
              Kenilkumar Panchal
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              SEO & Digital Marketing Specialist focused on ecommerce growth, technical
              SEO and conversion-led analytics.
            </p>
          </div>

          {[
            {
              h: "Sitemap",
              l: ["About", "Skills", "Case Studies", "Services", "Blog", "Contact"],
            },
            {
              h: "Services",
              l: ["SEO Audits", "Ecommerce SEO", "Technical SEO", "GA4 Setup"],
            },
            {
              h: "Connect",
              l: ["LinkedIn", "Twitter / X", "GitHub", "WhatsApp"],
            },
          ].map((c) => (
            <div key={c.h} className="md:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {c.h}
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {c.l.map((x) => (
                  <li key={x}>
                    <a
                      href="#"
                      className="text-foreground/80 transition hover:text-foreground"
                    >
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="font-display text-[14vw] leading-none tracking-tighter">
          KENIL.
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Kenilkumar Panchal. All rights reserved.</div>
          <div>Built with intent. Optimized for Lighthouse.</div>
        </div>
      </div>
    </footer>
  );
}

export function StickyCTA() {
  return (
    <a
      href="https://wa.me/919313734819"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-lg shadow-foreground/10 transition hover:opacity-90 md:inline-flex"
      aria-label="Chat on WhatsApp"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-background opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-background" />
      </span>
      Chat on WhatsApp
    </a>
  );
}
