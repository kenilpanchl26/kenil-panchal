import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
  LineChart,
} from "recharts";

const trafficData = [
  { m: "Jan", before: 1200, after: 1400 },
  { m: "Feb", before: 1350, after: 1900 },
  { m: "Mar", before: 1280, after: 2600 },
  { m: "Apr", before: 1500, after: 3800 },
  { m: "May", before: 1620, after: 5200 },
  { m: "Jun", before: 1700, after: 7100 },
  { m: "Jul", before: 1800, after: 9200 },
];

const cwvData = [
  { name: "LCP", v: 92 },
  { name: "CLS", v: 96 },
  { name: "INP", v: 89 },
  { name: "TTFB", v: 84 },
];

const revData = [
  { m: "W1", v: 3200 },
  { m: "W2", v: 4100 },
  { m: "W3", v: 5800 },
  { m: "W4", v: 7400 },
  { m: "W5", v: 9100 },
  { m: "W6", v: 12600 },
  { m: "W7", v: 14200 },
];

function MiniTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs shadow-sm">
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: p.color || "currentColor" }}
          />
          <span className="text-muted-foreground">{p.dataKey}:</span>
          <span className="font-medium">{p.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

type Case = {
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  metrics: { label: string; value: number; suffix?: string }[];
  chart: "area" | "bar" | "line";
};

const cases: Case[] = [
  {
    tag: "Case Study 01 · Technical SEO",
    title: "Full technical audit & 6x organic traffic",
    desc: "End-to-end technical SEO overhaul for a SaaS marketplace — crawl architecture, schema, internal linking and Core Web Vitals.",
    bullets: [
      "Technical SEO audit (200+ URL crawl)",
      "Meta & title optimization across 1.2k pages",
      "Sitemap restructure & robots tuning",
      "Schema (Product, FAQ, Breadcrumb)",
      "Internal linking cluster model",
      "Core Web Vitals — LCP 4.1s → 1.8s",
    ],
    metrics: [
      { label: "Organic traffic", value: 612, suffix: "%" },
      { label: "Indexed pages", value: 1200, suffix: "+" },
      { label: "CWV score", value: 92, suffix: "/100" },
    ],
    chart: "area",
  },
  {
    tag: "Case Study 02 · Ecommerce SEO",
    title: "Ecommerce SEO — from clicks to conversions",
    desc: "Shopify store scaling from 4k → 38k monthly sessions with product, category and CRO optimization stacked together.",
    bullets: [
      "Product SEO templates & rich snippets",
      "Category architecture & faceted SEO",
      "Conversion rate optimization (CRO)",
      "Mobile-first UX overhaul",
      "Speed optimization (Lighthouse 96)",
      "+228% organic revenue in 5 months",
    ],
    metrics: [
      { label: "Revenue lift", value: 228, suffix: "%" },
      { label: "Conv. rate", value: 4, suffix: ".2%" },
      { label: "Sessions", value: 38, suffix: "k" },
    ],
    chart: "bar",
  },
  {
    tag: "Case Study 03 · Local SEO",
    title: "Local SEO — #1 in 12 city keywords",
    desc: "Google Business Profile + local-pack strategy for a multi-location service brand competing against national players.",
    bullets: [
      "GBP optimization & posts cadence",
      "Local keyword & geo-cluster strategy",
      "Maps ranking in top 3-pack",
      "Review growth (4.3 → 4.9 ★)",
      "Local citations & backlinks",
      "+340% direction requests",
    ],
    metrics: [
      { label: "Top-3 keywords", value: 12, suffix: "" },
      { label: "Calls / mo", value: 410, suffix: "+" },
      { label: "Rating", value: 4, suffix: ".9 ★" },
    ],
    chart: "line",
  },
];

function ChartFor({ type }: { type: Case["chart"] }) {
  if (type === "area") {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={trafficData} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity={0.35} />
              <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="m" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
          <Tooltip content={<MiniTooltip />} />
          <Area
            type="monotone"
            dataKey="before"
            stroke="currentColor"
            strokeOpacity={0.25}
            strokeDasharray="4 4"
            fill="transparent"
          />
          <Area type="monotone" dataKey="after" stroke="currentColor" fill="url(#g1)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
  if (type === "bar") {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={cwvData} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
          <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
          <Tooltip content={<MiniTooltip />} />
          <Bar dataKey="v" fill="currentColor" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={revData} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
        <XAxis dataKey="m" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
        <Tooltip content={<MiniTooltip />} />
        <Line type="monotone" dataKey="v" stroke="currentColor" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function CaseStudies() {
  return (
    <section id="work" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            03 — Selected Work
          </div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
            Case studies that read like P&L statements.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6 md:space-y-10">
          {cases.map((c, idx) => (
            <Reveal key={c.title} delay={0.08}>
              <article className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-12">
                <div className="p-6 md:p-10 lg:col-span-7">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {c.tag}
                  </div>
                  <h3 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                    {c.desc}
                  </p>

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {c.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 inline-block h-1 w-3 shrink-0 bg-foreground" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-2xl border border-border bg-background p-4"
                      >
                        <div className="font-display text-2xl md:text-3xl">
                          {typeof m.value === "number" ? (
                            <>
                              <Counter to={m.value} />
                              {m.suffix}
                            </>
                          ) : (
                            m.value
                          )}
                        </div>
                        <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border bg-background p-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-8">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-foreground/40" />
                      <span className="h-2 w-2 rounded-full bg-foreground/20" />
                      <span className="h-2 w-2 rounded-full bg-foreground/20" />
                    </div>
                    <span>analytics.kenil.dev</span>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground">
                        {c.chart === "bar" ? "Core Web Vitals" : c.chart === "line" ? "Revenue / week" : "Organic sessions"}
                      </div>
                      <div className="font-display text-3xl">
                        {c.chart === "bar" ? "92" : c.chart === "line" ? "$14.2k" : "9.2k"}
                      </div>
                    </div>
                    <div className="rounded-full border border-border px-2.5 py-1 text-xs">
                      ↑ {idx === 0 ? "612" : idx === 1 ? "228" : "340"}%
                    </div>
                  </div>
                  <div className="mt-4 h-56 text-foreground">
                    <ChartFor type={c.chart} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
