import { Reveal } from "./Reveal";

const posts = [
  {
    cat: "Ecommerce",
    title: "How I improved ecommerce SEO and 3x'd organic revenue",
    date: "May 2026",
    read: "8 min",
  },
  {
    cat: "Technical SEO",
    title: "The 2026 technical SEO checklist (the one I actually use)",
    date: "Apr 2026",
    read: "12 min",
  },
  {
    cat: "Analytics",
    title: "GA4 setup guide — events, conversions and clean data",
    date: "Mar 2026",
    read: "10 min",
  },
  {
    cat: "Performance",
    title: "How to improve Core Web Vitals on WordPress & Shopify",
    date: "Feb 2026",
    read: "9 min",
  },
  {
    cat: "Tools",
    title: "Best SEO tools for 2026 — the lean stack that works",
    date: "Jan 2026",
    read: "7 min",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                06 — Writing
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
                Field notes & playbooks.
              </h2>
            </div>
            <a
              href="#"
              className="hidden text-sm text-muted-foreground underline-offset-4 hover:underline md:inline-block"
            >
              View all →
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <a
                href="#"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-foreground/30"
              >
                <div className="mb-8 aspect-[16/10] overflow-hidden rounded-xl bg-muted">
                  <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_30%,var(--color-foreground)_0%,transparent_60%)] opacity-[0.08] transition group-hover:opacity-[0.14]">
                    <span className="font-display text-5xl text-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.cat}
                </div>
                <h3 className="mt-2 font-display text-xl leading-snug md:text-2xl">
                  {p.title}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-6 text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span>{p.read}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
