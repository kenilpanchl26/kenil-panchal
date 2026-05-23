import { Reveal } from "./Reveal";

const timeline = [
  {
    year: "2026",
    title: "MCA · Gujarat Technological University",
    desc: "Master of Computer Applications with focus on web technologies, data analytics and applied SEO research.",
  },
  {
    year: "2024 — Now",
    title: "Freelance SEO & Growth Specialist",
    desc: "Ecommerce SEO, technical audits, GA4 implementations and conversion-led content strategy for global brands.",
  },
  {
    year: "2023",
    title: "WordPress & Shopify Development",
    desc: "Designed and shipped 25+ production websites with on-page SEO, Core Web Vitals and CRO baked in from day one.",
  },
  {
    year: "2022",
    title: "Started in Digital Marketing",
    desc: "Performance marketing (Meta & Google Ads), social media strategy and the fundamentals of search.",
  },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                01 — About
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
                Engineer's mind.
                <br />
                Marketer's instinct.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                I'm Kenilkumar Panchal — an SEO & digital marketing specialist who treats
                growth as a system. I bridge the gap between development and marketing,
                shipping clean technical foundations alongside content and analytics that
                actually move revenue.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "WordPress",
                  "Shopify",
                  "GA4",
                  "Search Console",
                  "Schema",
                  "CWV",
                  "Meta Ads",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ol className="relative space-y-3 border-l border-border pl-6">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.08}>
                  <li className="relative rounded-2xl border border-border bg-card p-6 transition hover:bg-muted/40 md:p-8">
                    <span className="absolute -left-[31px] top-8 h-3 w-3 rounded-full border-2 border-background bg-foreground" />
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl md:text-3xl">{t.title}</h3>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {t.year}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground md:text-base">
                      {t.desc}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
