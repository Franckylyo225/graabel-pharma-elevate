import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Counter } from "./Counter";

const stats = [
  { value: 30, suffix: "", label: "ans d'expertise" },
  { value: 300, prefix: "+", label: "délégués qualifiés" },
  { value: 5, suffix: "", label: "pays de présence" },
  { value: 20, suffix: "+", label: "laboratoires partenaires" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container-x grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-accent"
          >
            Depuis 1996
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold text-navy"
          >
            30 ans au service de la{" "}
            <span className="text-primary">santé en Afrique.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-xl text-lg text-subtext"
          >
            Formation & Promotion de produits pharmaceutiques depuis 1996.
            Le partenaire de confiance des grands laboratoires en Afrique de l'Ouest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
            >
              Découvrir nos services <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#partners"
              className="inline-flex items-center rounded-full border border-border bg-background px-7 py-4 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
            >
              Nos partenaires
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-4xl font-extrabold text-navy">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </dt>
                <dd className="mt-2 text-sm text-subtext">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative mx-auto hidden aspect-square w-full max-w-lg lg:block"
        >
          <HeroArt />
        </motion.div>
      </div>
    </section>
  );
}

function HeroArt() {
  return (
    <svg viewBox="0 0 500 500" className="h-full w-full">
      <defs>
        <radialGradient id="g1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EFF6FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="250" cy="250" r="240" fill="url(#g1)" />
      <circle cx="250" cy="250" r="180" fill="none" stroke="#DBEAFE" strokeWidth="1" />
      <circle cx="250" cy="250" r="120" fill="none" stroke="#DBEAFE" strokeWidth="1" />

      {/* molecule */}
      <g stroke="#2563EB" strokeWidth="1.5" fill="none">
        <line x1="250" y1="120" x2="350" y2="200" />
        <line x1="350" y1="200" x2="330" y2="320" />
        <line x1="330" y1="320" x2="220" y2="360" />
        <line x1="220" y1="360" x2="150" y2="270" />
        <line x1="150" y1="270" x2="250" y2="120" />
        <line x1="250" y1="120" x2="220" y2="360" />
        <line x1="350" y1="200" x2="150" y2="270" />
      </g>
      {[
        [250, 120], [350, 200], [330, 320], [220, 360], [150, 270],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="18" fill="#2563EB" />
          <circle cx={x} cy={y} r="32" fill="#2563EB" opacity="0.12" />
        </g>
      ))}
      <circle cx="250" cy="250" r="26" fill="#0D2B5E" />
      <circle cx="250" cy="250" r="44" fill="#0D2B5E" opacity="0.1" />

      <g fill="#F59E0B">
        <circle cx="410" cy="120" r="6" />
        <circle cx="100" cy="400" r="4" />
        <circle cx="430" cy="380" r="5" />
      </g>
    </svg>
  );
}
