import { Reveal } from "./Reveal";

const t = [
  {
    quote:
      "Kenil rebuilt our technical SEO from the ground up. Six months in, organic traffic is up 6x and we finally have analytics we can trust.",
    name: "Aarav Mehta",
    role: "Founder, NorthLane Commerce",
  },
  {
    quote:
      "We hired Kenil for a Shopify audit and ended up with a long-term partner. Conversion rate jumped from 1.8% to 4.2% in five months.",
    name: "Priya Shah",
    role: "Head of Growth, Lumen Apparel",
  },
  {
    quote:
      "Clean reports, sharp recommendations, zero fluff. Every meeting moves the needle. Easily the best SEO investment we've made.",
    name: "Daniel Okafor",
    role: "CMO, Kindred Studio",
  },
];

export function Testimonials() {
  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            07 — Testimonials
          </div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl">
            What clients say after the dashboards turn green.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {t.map((x, i) => (
            <Reveal key={x.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7">
                <div className="font-display text-3xl leading-none">"</div>
                <blockquote className="mt-3 text-base leading-relaxed">
                  {x.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-sm font-medium text-background">
                    {x.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{x.name}</div>
                    <div className="text-xs text-muted-foreground">{x.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
