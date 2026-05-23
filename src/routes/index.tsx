import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "../components/portfolio/Nav";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Skills } from "../components/portfolio/Skills";
import { CaseStudies } from "../components/portfolio/CaseStudies";
import { Dashboard } from "../components/portfolio/Dashboard";
import { Services } from "../components/portfolio/Services";
import { Blog } from "../components/portfolio/Blog";
import { Testimonials } from "../components/portfolio/Testimonials";
import { Contact } from "../components/portfolio/Contact";
import { Footer, StickyCTA } from "../components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Kenilkumar Panchal — SEO & Digital Marketing Specialist | Ecommerce Growth",
      },
      {
        name: "description",
        content:
          "Kenilkumar Panchal — SEO & Digital Marketing Specialist helping ecommerce brands grow with technical SEO, GA4 analytics, and conversion-led optimization.",
      },
      {
        name: "keywords",
        content:
          "SEO specialist, technical SEO, ecommerce SEO, GA4, digital marketing, Shopify SEO, WordPress SEO, Kenilkumar Panchal",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Kenilkumar Panchal — SEO & Digital Marketing Specialist",
      },
      {
        property: "og:description",
        content:
          "Technical SEO, ecommerce growth and analytics that turn search traffic into revenue.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { rel: "canonical", href: "/" } as never,
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kenilkumar Panchal",
    jobTitle: "SEO & Digital Marketing Specialist",
    description:
      "SEO & Digital Marketing Specialist for ecommerce and business growth. Technical SEO, GA4 analytics, and conversion-led optimization.",
    knowsAbout: [
      "SEO",
      "Technical SEO",
      "Ecommerce SEO",
      "Google Analytics 4",
      "Google Search Console",
      "WordPress",
      "Shopify",
      "Meta Ads",
      "Google Ads",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Gujarat Technological University",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <CaseStudies />
        <Dashboard />
        <Services />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "var(--color-foreground)",
            color: "var(--color-background)",
            border: "none",
          },
        }}
      />
    </div>
  );
}
