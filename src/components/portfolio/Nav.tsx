import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Case Studies" },
  { href: "#services", label: "Services" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a
          href="#top"
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight transition-all ${scrolled ? "glass border border-border/60" : ""
            }`}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold tracking-tight">
            KP
          </span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full border border-border/60 px-2 py-1.5 text-sm md:flex ${scrolled ? "glass" : "bg-background/40 backdrop-blur"
            }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-muted-foreground transition hover:bg-foreground hover:text-background"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90 md:inline-flex"
        >
          Let's talk →
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="rounded-full border border-border p-2.5 md:hidden"
        >
          <div className="flex h-4 w-5 flex-col justify-between">
            <span className={`h-0.5 w-full bg-foreground transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-foreground transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-5 mt-3 grid gap-1 rounded-2xl border border-border bg-background p-3 md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm hover:bg-muted"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
