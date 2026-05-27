import { motion } from "motion/react";
import portrait from "../../assets/kenil-portrait.jpg";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { label: "SEO Optimization", value: 120, suffix: "+" },
  { label: "GA4 Analytics", value: 45, suffix: "+" },
  { label: "Technical SEO", value: 80, suffix: "+" },
  { label: "Ecommerce Growth", value: 30, suffix: "+" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 noise" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs text-muted-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
              </span>
              Available for new projects · 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]"
            >
              SEO & Digital
              <br />
              Marketing Specialist
              <br />
              <span className="italic text-muted-foreground">for ecommerce growth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              I help brands win the search game — combining technical SEO, GA4 analytics,
              ecommerce optimization and conversion-led strategy to turn traffic into
              measurable revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="/Kenilkumar Panchal SEO Resume.pdf"
                download="Kenilkumar Panchal SEO Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:opacity-90"
              >
                Download Resume
                <span className="transition group-hover:translate-x-0.5">↓</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium transition hover:bg-muted"
              >
                Book free SEO audit
              </a>
              <a
                href="https://wa.me/919313734819"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium transition hover:bg-muted"
              >
                <span className="h-2 w-2 rounded-full bg-foreground" />
                WhatsApp
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-border bg-muted"
            >
              <img
                src={portrait}
                alt="Kenilkumar Panchal — SEO & Digital Marketing Specialist"
                width={896}
                height={1152}
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-5">
                <div className="glass flex items-center justify-between rounded-2xl border border-border/60 p-3">
                  <div>
                    <div className="text-xs text-muted-foreground">Based in</div>
                    <div className="text-sm font-medium">Gujarat, India</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">MCA · GTU</div>
                    <div className="text-sm font-medium">Class of 2026</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-3 md:mt-28 md:grid-cols-4 md:gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] md:p-7">
                <div className="font-display text-4xl md:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs text-muted-foreground md:text-sm">{s.label}</div>
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-foreground/[0.03] transition group-hover:scale-150" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
