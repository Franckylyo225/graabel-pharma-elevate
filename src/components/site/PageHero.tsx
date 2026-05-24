import { motion } from "framer-motion";

type Props = {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
};

export function PageHero({ label, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* subtle geometric shape on the right */}
      <svg
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-1/2 hidden -translate-y-1/2 opacity-[0.08] md:block"
        width="640"
        height="640"
        viewBox="0 0 640 640"
        fill="none"
      >
        <circle cx="320" cy="320" r="260" stroke="white" strokeWidth="1" />
        <circle cx="320" cy="320" r="180" stroke="white" strokeWidth="1" />
        <circle cx="320" cy="320" r="100" stroke="white" strokeWidth="1" />
        <path d="M60 320h520M320 60v520" stroke="white" strokeWidth="1" />
        <rect x="180" y="180" width="280" height="280" stroke="white" strokeWidth="1" transform="rotate(45 320 320)" />
      </svg>

      <div className="container-x relative z-10 pb-20 pt-36 md:pb-28 md:pt-44 lg:pb-32 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-primary/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary ring-1 ring-inset ring-primary/30">
            {label}
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base text-white/70 md:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
