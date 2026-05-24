import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Breadcrumb } from "./Breadcrumb";
import { PageHero } from "./PageHero";

type Props = {
  breadcrumb: string;
  hero: {
    label: string;
    title: React.ReactNode;
    subtitle?: string;
  };
  children: React.ReactNode;
};

export function PageShell({ breadcrumb, hero, children }: Props) {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <PageHero {...hero} />
      <Breadcrumb page={breadcrumb} />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {children}
      </motion.div>
      <Footer />
    </main>
  );
}
