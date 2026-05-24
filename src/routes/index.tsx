import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Expertise } from "@/components/site/Expertise";
import { HowWeWork } from "@/components/site/HowWeWork";
import { Partners } from "@/components/site/Partners";
import { Presence } from "@/components/site/Presence";
import { CtaBand } from "@/components/site/CtaBand";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Hero />
        <About />
        <Services />
        <Expertise />
        <HowWeWork />
        <Partners />
        <Presence />
        <CtaBand />
      </motion.div>
      <Footer />
    </main>
  );
}
