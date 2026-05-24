import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Rocket,
  RefreshCw,
  Map,
  PieChart,
  Users,
  Link as LinkIcon,
  Plus,
  Check,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise — Graabel Pharma" },
      {
        name: "description",
        content:
          "30 ans de terrain pharmaceutique en Afrique de l'Ouest. Lancement, relancement, cartographie et restructuration d'équipe.",
      },
      { property: "og:title", content: "Notre expertise — Graabel Pharma" },
      {
        property: "og:description",
        content: "Ce que nous avons construit ne s'improvise pas.",
      },
    ],
  }),
  component: Page,
});

const heroStats = [
  { value: 30, suffix: "", label: "ans d'expertise pharmaceutique en Afrique" },
  { value: 300, prefix: "+", label: "délégués médicaux et pharmaceutiques qualifiés" },
  { value: 10, suffix: "", label: "superviseurs expérimentés sur le terrain" },
  { value: 5, suffix: "", label: "pays couverts avec des équipes locales dédiées" },
];

const domains = [
  {
    icon: Rocket,
    title: "Lancement de nouveaux produits",
    text: "Stratégie de lancement, plans de communication, formation des équipes, suivi des premiers résultats terrain.",
    variant: "primary" as const,
    span: "md:col-span-2",
  },
  {
    icon: RefreshCw,
    title: "Relancement produits en souffrance",
    text: "Diagnostic, repositionnement, plan d'action ciblé pour remettre en croissance un produit sous-performant.",
    variant: "light" as const,
  },
  {
    icon: Map,
    title: "Maîtrise de la couverture territoriale",
    text: "Déploiement stratégique des délégués dans les capitales et les villes secondaires pour une couverture maximale.",
    variant: "light" as const,
  },
  {
    icon: PieChart,
    title: "Cartographie du marché",
    text: "Analyse complète du portefeuille produits, identification des prescripteurs clés et des zones à fort potentiel.",
    variant: "light" as const,
  },
  {
    icon: Users,
    title: "Organisation & restructuration d'équipe",
    text: "Audit des équipes existantes, recrutement, formation, mise en place de process de management performants.",
    variant: "light" as const,
  },
  {
    icon: LinkIcon,
    title: "Relations AIRP / Grossistes / Centrale d'Achat",
    text: "Réseau de distribution éprouvé, accès privilégié aux circuits d'approvisionnement institutionnels et privés.",
    variant: "primary" as const,
    span: "md:col-span-2",
  },
];

const methods = [
  {
    title: "Déploiement structuré",
    text: "Les délégués sont affectés selon des stratégies définies conjointement avec les laboratoires partenaires.",
  },
  {
    title: "Animation scientifique",
    text: "Coordination des EPU (Équipes de Promotion Universitaire) et promotion médicale auprès des professionnels de santé.",
  },
  {
    title: "Encadrement opérationnel",
    text: "Chaque labo partenaire dispose d'une équipe dédiée, encadrée par un Superviseur et un Superviseur Adjoint.",
  },
  {
    title: "Gouvernance groupe",
    text: "Pilotage financier depuis le siège d'Abidjan, coordination homogène des filiales, vision stratégique globale.",
  },
];

const metrics = [
  { label: "Taux de couverture territoriale", value: 92 },
  { label: "Satisfaction laboratoires partenaires", value: 96 },
  { label: "Délégués formés chaque année", value: 100 },
];

function ProgressBar({ label, value }: { label: string; value: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [pct, setPct] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setPct(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between">
        <span className="font-display text-sm font-semibold text-navy">{label}</span>
        <span className="font-display text-2xl font-extrabold text-primary tabular-nums">
          {pct}%
        </span>
      </div>
      <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-[#E5EAF2]">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-[1400ms] ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

const labWork = [
  "Maîtrise technique et scientifique",
  "Développement produit",
  "Stratégie internationale",
];
const graabelWork = [
  "Connaissance terrain approfondie",
  "Réseaux locaux éprouvés",
  "Promotion & formation opérationnelle",
];

function Page() {
  return (
    <PageShell
      breadcrumb="Expertise"
      hero={{
        label: "Expertise",
        title: (
          <>
            30 ans de terrain.
            <br />
            Une expertise <span className="text-primary">sans équivalent.</span>
          </>
        ),
        subtitle: "Ce que nous avons construit ne s'improvise pas.",
      }}
    >
      {/* SECTION 1 — Stat callouts */}
      <section className="bg-navy py-24 text-white lg:py-28">
        <div className="container-x">
          <dl className="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="border-l-2 border-[#F59E0B]/60 pl-6">
                  <dd className="font-display text-5xl font-extrabold leading-none tracking-tight text-[#F59E0B] lg:text-6xl">
                    <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-4 text-sm font-medium leading-snug text-white/75">
                    {s.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* SECTION 2 — Domains */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="label-accent">Domaines d'expertise</span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy lg:text-5xl">
                Ce que nous maîtrisons{" "}
                <span className="text-primary">parfaitement</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {domains.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06} className={d.span ?? ""}>
                <article
                  className={`group h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                    d.variant === "primary"
                      ? "bg-primary text-primary-foreground shadow-[0_24px_60px_-28px_rgba(37,99,235,0.55)]"
                      : "border border-border bg-background hover:border-primary/40 hover:shadow-[0_24px_50px_-28px_rgba(13,43,94,0.3)]"
                  }`}
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-xl ${
                      d.variant === "primary"
                        ? "bg-white/15 text-white ring-1 ring-inset ring-white/30"
                        : "bg-tint text-primary"
                    }`}
                  >
                    <d.icon className="h-6 w-6" />
                  </span>
                  <h3
                    className={`mt-6 font-display text-xl font-bold leading-tight ${
                      d.variant === "primary" ? "text-white" : "text-navy"
                    } lg:text-2xl`}
                  >
                    {d.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      d.variant === "primary" ? "text-white/85" : "text-subtext"
                    }`}
                  >
                    {d.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Méthodes */}
      <section className="bg-[#FAFBFF] py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="label-accent">Notre approche</span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy lg:text-5xl">
                Une méthodologie structurée,{" "}
                <span className="text-primary">des résultats mesurables</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {methods.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-background p-7">
                  <span className="font-display text-3xl font-extrabold text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-subtext">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Force terrain */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="label-accent">Notre force terrain</span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy lg:text-5xl">
                Des équipes compétentes et{" "}
                <span className="text-primary">profondément engagées</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-subtext">
                GRAABEL PHARMA s'appuie sur des délégués médicaux et pharmaceutiques
                rigoureusement sélectionnés, formés en continu par des formateurs internes
                et des experts des laboratoires partenaires.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-8 rounded-3xl border border-border bg-background p-8 lg:p-10">
                {metrics.map((m) => (
                  <ProgressBar key={m.label} label={m.label} value={m.value} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Complémentarité */}
      <section className="bg-navy py-24 text-white lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center rounded-full bg-primary/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary ring-1 ring-inset ring-primary/30">
                Complémentarité
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight lg:text-4xl">
                Laboratoire <span className="text-[#F59E0B]">+</span> Graabel Pharma :
                un partenariat naturel
              </h2>
            </div>
          </Reveal>

          <div className="relative mt-14 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <article className="rounded-3xl border border-white/10 p-8 lg:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                  Ce que fait
                </p>
                <h3 className="mt-1 font-display text-2xl font-extrabold lg:text-3xl">
                  le laboratoire
                </h3>
                <ul className="mt-6 space-y-3">
                  {labWork.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#F59E0B]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            {/* center divider */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#F59E0B] text-navy shadow-[0_10px_30px_-10px_rgba(245,158,11,0.7)] lg:grid"
            >
              <Plus className="h-8 w-8" strokeWidth={3} />
            </span>

            <Reveal delay={0.1}>
              <article className="rounded-3xl bg-[#EFF6FF] p-8 text-navy lg:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Ce que fait
                </p>
                <h3 className="mt-1 font-display text-2xl font-extrabold lg:text-3xl">
                  Graabel Pharma
                </h3>
                <ul className="mt-6 space-y-3">
                  {graabelWork.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-navy/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight text-primary-foreground lg:text-5xl">
              Votre prochain lancement mérite les meilleurs.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-background px-8 py-4 text-base font-semibold text-primary transition-transform duration-200 hover:scale-[1.03]"
            >
              Démarrer une collaboration
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
