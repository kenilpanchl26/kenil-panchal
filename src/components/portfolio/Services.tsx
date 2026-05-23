import { Reveal } from "./Reveal";
import {
  Search,
  ShoppingCart,
  Wrench,
  Gauge,
  BarChart3,
  LineChart,
  Megaphone,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Keyword research, on-page and off-page execution that compounds month over month.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce SEO",
    desc: "Product, category and faceted SEO for Shopify, WooCommerce and custom stores.",
  },
  {
    icon: Wrench,
    title: "Technical SEO",
    desc: "Crawl architecture, schema, indexation and JS rendering issues, fixed.",
  },
  {
    icon: Gauge,
    title: "Website Optimization",
    desc: "Core Web Vitals, Lighthouse 90+, and UX tuning for conversion.",
  },
  {
    icon: BarChart3,
    title: "GA4 Setup",
    desc: "Full GA4 implementation with events, conversions and Looker dashboards.",
  },
  {
    icon: LineChart,
    title: "Search Console Setup",
    desc: "GSC configuration, indexation hygiene and search performance reporting.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "Content systems, paid amplification and brand storytelling that performs.",
  },
  {
    icon: ClipboardCheck,
    title: "SEO Audits",
    desc: "Deep technical + content + backlink audits with prioritized action plans.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            05 — Services
          </div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
            Eight ways I help brands grow on search.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group flex h-full flex-col justify-between bg-card p-7 transition hover:bg-foreground hover:text-background">
                  <div>
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                    <h3 className="mt-10 font-display text-2xl">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground group-hover:text-background/70">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-wider">
                    <span>Get started</span>
                    <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
