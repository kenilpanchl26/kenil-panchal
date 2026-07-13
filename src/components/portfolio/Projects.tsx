import { Reveal } from "./Reveal";
import { ExternalLink, Code2, Server, ShoppingCart } from "lucide-react";

type Project = {
  title: string;
  tag: string;
  desc: string;
  url: string;
  icon: typeof Code2;
  tech: string[];
  bullets: string[];
};

const projects: Project[] = [
  {
    title: "Keyaa Technologies",
    tag: "CA & Tax Consultancy",
    desc: "Full-featured React website for a CA & tax consultancy firm in Ahmedabad. Includes service booking for GST, ITR, audit & legal services with an admin panel to manage inquiries and appointments.",
    url: "https://one-stop-consultancy-servies.vercel.app/",
    icon: Server,
    tech: ["React", "Admin Panel", "REST API", "Responsive"],
    bullets: [
      "Service catalog — GST, ITR, Audit, Legal",
      "Booking & inquiry system",
      "Admin panel for managing leads",
      "SEO-optimized service pages",
      "Mobile-first responsive design",
    ],
  },
  {
    title: "CS ERP",
    tag: "SaaS · Company Secretary ERP",
    desc: "Multi-user SaaS ERP platform for Company Secretary firms. Role-based access with Super Admin, Admin, Staff profiles, and a dedicated Client Portal — managing compliance, filings, and document workflows.",
    url: "https://cs-erp-frontend.vercel.app/",
    icon: Code2,
    tech: ["React", "SaaS", "Multi-Role", "ERP", "Client Portal"],
    bullets: [
      "Super Admin, Admin & Staff role system",
      "Client Portal with document access",
      "Trademark & digital signature modules",
      "Compliance & filing management",
      "Multi-tenant SaaS architecture",
    ],
  },
  {
    title: "Shree Hari Home Decor",
    tag: "Ecommerce · Next.js",
    desc: "Premium ecommerce website for handcrafted velvet furniture. Built with Next.js for SSR/SEO, featuring product catalogs, cart, checkout, categories, and a polished storefront with testimonials and newsletter.",
    url: "https://shree-hari-home-decor.vercel.app/",
    icon: ShoppingCart,
    tech: ["Next.js", "Ecommerce", "SSR", "SEO", "Responsive"],
    bullets: [
      "Product catalog with categories & filters",
      "Cart & checkout flow",
      "SEO-optimized with server-side rendering",
      "Featured products & testimonials section",
      "Newsletter subscription integration",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                05 — IT Portfolio
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
                Apps I've built
                <br />
                <span className="italic text-muted-foreground">from concept to deployment.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Real-world web applications — ERP systems, ecommerce platforms and business websites,
              shipped on Vercel.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-6 md:space-y-10">
          {projects.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={idx * 0.08}>
                <article className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-12">
                  <div className="p-6 md:p-10 lg:col-span-7">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          {p.tag}
                        </div>
                        <h3 className="mt-1 font-display text-3xl leading-tight md:text-5xl">
                          {p.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-6 max-w-xl text-sm text-muted-foreground md:text-base">
                      {p.desc}
                    </p>

                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {p.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 inline-block h-1 w-3 shrink-0 bg-foreground" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-start justify-between border-t border-border bg-background p-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-8">
                    <div className="w-full">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-foreground/40" />
                          <span className="h-2 w-2 rounded-full bg-foreground/20" />
                          <span className="h-2 w-2 rounded-full bg-foreground/20" />
                        </div>
                        <span>Live Preview</span>
                      </div>

                      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">
                          Project {String(idx + 1).padStart(2, "0")}
                        </div>
                        <div className="mt-3 font-display text-2xl md:text-3xl">{p.title}</div>
                        <div className="mt-2 text-sm text-muted-foreground">{p.tag}</div>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {p.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="rounded-md bg-foreground/5 px-2 py-1 text-[11px] text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:opacity-90"
                    >
                      View Live Site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
