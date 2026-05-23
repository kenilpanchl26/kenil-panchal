import { Reveal } from "./Reveal";
import {
  Search,
  Wrench,
  ShoppingCart,
  Globe,
  BarChart3,
  LineChart,
  Megaphone,
  Target,
  Share2,
  Store,
  PenTool,
} from "lucide-react";

const skills = [
  { name: "SEO", icon: Search, score: 96 },
  { name: "Technical SEO", icon: Wrench, score: 94 },
  { name: "Ecommerce SEO", icon: ShoppingCart, score: 92 },
  { name: "WordPress", icon: Globe, score: 95 },
  { name: "GA4", icon: BarChart3, score: 90 },
  { name: "Search Console", icon: LineChart, score: 93 },
  { name: "Meta Ads", icon: Megaphone, score: 82 },
  { name: "Google Ads", icon: Target, score: 84 },
  { name: "Social Media", icon: Share2, score: 80 },
  { name: "Shopify", icon: Store, score: 86 },
  { name: "Content Strategy", icon: PenTool, score: 88 },
];

const tools = [
  "Google Analytics",
  "Search Console",
  "Ahrefs",
  "SEMrush",
  "WordPress",
  "Shopify",
  "Canva",
  "Meta Ads",
  "Google Ads",
  "Screaming Frog",
  "Looker Studio",
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                02 — Skills & Stack
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
                A toolkit built
                <br />
                for compounding growth.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Eleven core disciplines, refined across audits, migrations and ecommerce
              launches — paired with the industry-standard tools below.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.name} delay={i * 0.04}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-foreground/30">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-muted-foreground">
                      {s.score}
                    </span>
                  </div>
                  <div className="mt-10 text-sm font-medium">{s.name}</div>
                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-foreground transition-all duration-1000 ease-out group-hover:bg-foreground"
                      style={{ width: `${s.score}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Daily-driver tools
              </div>
              <div className="hidden text-xs text-muted-foreground md:block">
                Stack · 2026
              </div>
            </div>
            <div className="flex flex-wrap gap-2 p-6">
              {tools.map((t) => (
                <div
                  key={t}
                  className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm transition hover:bg-foreground hover:text-background"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
