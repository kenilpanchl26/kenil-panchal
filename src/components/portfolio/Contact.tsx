import { useState } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { Mail, MessageCircle, Linkedin, Twitter, Github, MapPin } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(2, "Add a subject").max(150),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setLoading(true);
    try {
      // Simulated submission — wire up to your API/edge function when ready
      await new Promise((r) => setTimeout(r, 900));
      toast.success("Message sent. I'll reply within 24 hours.");
      e.currentTarget.reset();
    } catch {
      toast.error("Something went wrong. Try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                08 — Contact
              </div>
              <h2 className="mt-4 font-display text-4xl leading-[1.02] md:text-6xl">
                Let's grow
                <br />
                <span className="italic text-muted-foreground">something serious.</span>
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Tell me about your product, your current traffic and what success looks
                like. I reply within 24 hours.
              </p>

              <div className="mt-10 space-y-3">
                {[
                  { icon: Mail, label: "kenilpanchal55@gmail.com", href: "mailto:kenilpanchal55@gmail.com" },
                  { icon: MessageCircle, label: "WhatsApp · +91 93139 34819", href: "https://wa.me/919313934819" },
                  { icon: Linkedin, label: "linkedin.com/in/kenil-panchal", href: "https://www.linkedin.com/in/kenil-panchal-278991389?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                  { icon: MapPin, label: "Gujarat, India · Remote worldwide", href: "#" },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition hover:bg-muted"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background">
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <span className="text-sm">{c.label}</span>
                      <span className="ml-auto text-muted-foreground transition group-hover:translate-x-0.5">→</span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 flex gap-2">
                {[Linkedin, Twitter, Github].map((I, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:bg-foreground hover:text-background"
                  >
                    <I className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-border bg-card p-6 md:p-10"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field name="name" label="Your name" placeholder="Kenil Panchal" />
                  <Field name="email" label="Email" placeholder="you@brand.com" type="email" />
                </div>
                <div className="mt-5">
                  <Field name="subject" label="Subject" placeholder="Ecommerce SEO audit for ..." />
                </div>
                <div className="mt-5">
                  <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your site, current traffic, and the outcome you want."
                    className="w-full resize-none rounded-xl border border-border bg-background p-4 text-sm outline-none transition focus:border-foreground"
                  />
                </div>

                <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <p className="text-xs text-muted-foreground">
                    Free 20-min discovery call — no obligations.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send message"}
                    <span>→</span>
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background p-4 text-sm outline-none transition focus:border-foreground"
      />
    </div>
  );
}
