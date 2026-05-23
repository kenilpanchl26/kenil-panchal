import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const users = [
  { d: "Mon", v: 1240 },
  { d: "Tue", v: 1480 },
  { d: "Wed", v: 1390 },
  { d: "Thu", v: 1820 },
  { d: "Fri", v: 2110 },
  { d: "Sat", v: 1750 },
  { d: "Sun", v: 1620 },
];

const sources = [
  { name: "Organic Search", v: 58 },
  { name: "Direct", v: 19 },
  { name: "Referral", v: 12 },
  { name: "Social", v: 8 },
  { name: "Paid", v: 3 },
];

const devices = [
  { name: "Mobile", v: 64 },
  { name: "Desktop", v: 29 },
  { name: "Tablet", v: 7 },
];

const seoMetrics = [
  { k: "Top 3", v: 142 },
  { k: "Top 10", v: 318 },
  { k: "Top 50", v: 712 },
  { k: "Total", v: 1240 },
];

const TT = ({ active, payload }: any) =>
  active && payload?.length ? (
    <div className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs">
      {payload[0].payload.name || payload[0].payload.d}: <b>{payload[0].value}</b>
    </div>
  ) : null;

export function Dashboard() {
  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                04 — Analytics in practice
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
                Numbers that
                <br />
                tell the real story.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Every project ends in a dashboard — clear KPIs, no vanity metrics. A
              snapshot of what client reporting looks like.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                <span className="ml-3">GA4 · last 7 days</span>
              </div>
              <span>kenil.dev / reporting</span>
            </div>

            <div className="grid gap-px bg-border lg:grid-cols-4">
              {[
                { l: "Users", v: 12482, s: "+18.2%" },
                { l: "Sessions", v: 21340, s: "+22.1%" },
                { l: "Conv. rate", v: 4.6, s: "+0.8 pp", suffix: "%" },
                { l: "Bounce", v: 38, s: "-6.2 pp", suffix: "%" },
              ].map((k) => (
                <div key={k.l} className="bg-card p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {k.l}
                  </div>
                  <div className="mt-2 font-display text-3xl md:text-4xl">
                    <Counter to={k.v} />
                    {k.suffix ?? ""}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{k.s}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-px bg-border lg:grid-cols-3">
              <div className="bg-card p-6 lg:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm font-medium">Users / day</div>
                  <span className="text-xs text-muted-foreground">Trailing 7 days</span>
                </div>
                <div className="h-64 text-foreground">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={users} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="dash" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="currentColor" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="d" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip content={<TT />} />
                      <Area type="monotone" dataKey="v" stroke="currentColor" strokeWidth={2} fill="url(#dash)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-card p-6">
                <div className="mb-4 text-sm font-medium">Traffic sources</div>
                <ul className="space-y-3">
                  {sources.map((s, i) => (
                    <li key={s.name}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span>{s.name}</span>
                        <span className="text-muted-foreground">{s.v}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-foreground"
                          style={{
                            width: `${s.v}%`,
                            opacity: 1 - i * 0.15,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-px bg-border lg:grid-cols-3">
              <div className="bg-card p-6">
                <div className="mb-4 text-sm font-medium">Devices</div>
                <div className="h-48 text-foreground">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={devices}
                        innerRadius={45}
                        outerRadius={70}
                        paddingAngle={3}
                        dataKey="v"
                      >
                        {devices.map((_, i) => (
                          <Cell
                            key={i}
                            fill="currentColor"
                            opacity={1 - i * 0.3}
                            stroke="transparent"
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<TT />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 flex justify-center gap-3 text-xs text-muted-foreground">
                  {devices.map((d, i) => (
                    <div key={d.name} className="flex items-center gap-1.5">
                      <span
                        className="h-2 w-2 rounded-full bg-foreground"
                        style={{ opacity: 1 - i * 0.3 }}
                      />
                      {d.name} {d.v}%
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 lg:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm font-medium">SEO keyword positions</div>
                  <span className="text-xs text-muted-foreground">tracked / 1.2k</span>
                </div>
                <div className="h-48 text-foreground">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={seoMetrics} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
                      <XAxis dataKey="k" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip content={<TT />} />
                      <Bar dataKey="v" fill="currentColor" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
