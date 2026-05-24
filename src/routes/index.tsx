import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Expertise } from "@/components/site/Expertise";
import { HowWeWork } from "@/components/site/HowWeWork";
import { Partners } from "@/components/site/Partners";
import { Presence } from "@/components/site/Presence";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Expertise />
      <HowWeWork />
      <Partners />
      <Presence />
      <CtaBand />
      <Contact />
      <Footer />
    </main>
  );
}
