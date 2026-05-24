import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, ShieldCheck, Scale, Star, Zap, Quote } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/qui-sommes-nous")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous — Graabel Pharma" },
      { name: "description", content: "Une entreprise africaine qui prouve depuis 30 ans qu'excellence, éthique et performance vont de pair." },
      { property: "og:title", content: "Qui sommes-nous — Graabel Pharma" },
      { property: "og:description", content: "Notre histoire, notre mission et nos valeurs depuis 1996." },
    ],
  }),
  component: Page,
});

const milestones = [
  { year: "1996", text: "Création de Graabel Pharma, Abidjan" },
  { year: "2003", text: "Ouverture de la succursale Togo" },
  { year: "2010", text: "Lancement des formations pharmaceutiques structurées" },
  { year: "2018", text: "Ouverture Bénin + expansion du réseau délégués" },
  { year: "2024", text: "+300 délégués actifs, 20+ laboratoires partenaires" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Sérieux",
    text: "Chaque engagement est tenu. Chaque mission est traitée avec la plus haute rigueur professionnelle.",
  },
  {
    icon: Scale,
    title: "Éthique",
    text: "Nos pratiques sont transparentes, honnêtes et conformes aux standards internationaux du secteur pharmaceutique.",
  },
  {
    icon: Star,
    title: "Probité",
    text: "L'intégrité est au cœur de toutes nos relations, qu'elles soient avec nos partenaires, clients ou collaborateurs.",
  },
  {
    icon: Zap,
    title: "Efficacité",
    text: "Des résultats mesurables, des équipes formées, des actions calibrées pour maximiser la performance terrain.",
  },
];

const stats = [
  { value: 30, suffix: "", label: "ans d'expertise" },
  { value: 300, prefix: "+", label: "délégués qualifiés" },
  { value: 5, suffix: "", label: "pays de présence" },
  { value: 20, suffix: "+", label: "laboratoires partenaires" },
];

function Page() {
  return (
    <PageShell
      breadcrumb="Qui sommes-nous"
      hero={{
        label: "À propos",
        title: <>Qui sommes-<span className="text-primary">nous ?</span></>,
        subtitle:
          "Une entreprise africaine qui prouve, depuis 30 ans, qu'excellence, éthique et performance vont de pair.",
      }}
    >
      {/* SECTION 1 — Notre histoire */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-10 -left-4 select-none font-display text-[160px] font-extrabold leading-none text-[#DBEAFE] sm:text-[200px] lg:text-[240px]"
                >
                  1996
                </span>
                <div className="relative">
                  <span className="label-accent">Notre histoire</span>
                  <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy lg:text-5xl">
                    Une aventure africaine,{" "}
                    <span className="text-primary">trois décennies</span> d'engagement
                  </h2>
                  <div className="mt-8 space-y-5 text-base leading-relaxed text-subtext">
                    <p>
                      Fondée en 1996 à Abidjan, Graabel Pharma est née d'une conviction simple : la
                      santé en Afrique mérite des partenaires de promotion d'un niveau d'exigence
                      équivalent à ceux des grands marchés internationaux.
                    </p>
                    <p>
                      De ses débuts en Côte d'Ivoire à son réseau actuel couvrant cinq pays
                      d'Afrique de l'Ouest, l'entreprise s'est construite sur la durée, en
                      privilégiant la rigueur, la formation continue de ses équipes et des relations
                      de long terme avec ses laboratoires partenaires.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ol className="relative border-l-2 border-border pl-8">
                {milestones.map((m, i) => (
                  <li key={m.year} className={i < milestones.length - 1 ? "pb-10" : ""}>
                    <span className="absolute -left-[9px] grid h-4 w-4 place-items-center rounded-full bg-primary ring-4 ring-background" />
                    <p className="font-display text-2xl font-extrabold text-navy">{m.year}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-subtext">{m.text}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Mission & Vision */}
      <section className="bg-[#EFF6FF] py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal>
              <article className="h-full rounded-3xl bg-background p-10 shadow-[0_24px_60px_-30px_rgba(13,43,94,0.25)] ring-1 ring-border lg:p-12">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-tint text-primary">
                  <Target className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-navy lg:text-3xl">
                  Notre Mission
                </h3>
                <p className="mt-4 text-base leading-relaxed text-subtext">
                  Être le lien essentiel et fiable entre les grands laboratoires pharmaceutiques
                  internationaux et les professionnels de santé en Afrique de l'Ouest.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="h-full rounded-3xl bg-primary p-10 text-primary-foreground shadow-[0_24px_60px_-30px_rgba(37,99,235,0.55)] lg:p-12">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-white/15 text-white ring-1 ring-inset ring-white/30">
                  <Eye className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold lg:text-3xl">
                  Notre Vision
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/85">
                  Devenir le partenaire de promotion pharmaceutique de référence en Afrique
                  sub-saharienne, reconnu pour la rigueur de ses équipes et la qualité de ses
                  résultats.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Valeurs */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="label-accent">Nos valeurs fondatrices</span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy lg:text-5xl">
                Les principes qui guident{" "}
                <span className="text-primary">chacune de nos actions</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <article className="group h-full rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-28px_rgba(13,43,94,0.3)]">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-tint text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-navy">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-subtext">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Message du CEO */}
      <section className="bg-[#FAFBFF] py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="relative mx-auto max-w-4xl text-center">
              <Quote
                aria-hidden
                className="mx-auto h-[120px] w-[120px] text-primary/15"
                strokeWidth={1.5}
              />
              <blockquote className="-mt-6 font-display text-xl italic leading-[1.55] text-navy md:text-2xl lg:text-[26px]">
                « À chaque étape de ma carrière, je m'efforce de démontrer qu'un Africain noir
                sub-saharien peut diriger une entreprise avec sérieux, éthique, probité et
                efficacité, tout en offrant un service de qualité qui satisfait partenaires, clients
                et employés. »
              </blockquote>

              <div className="mt-10 flex items-center justify-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground ring-4 ring-background">
                  KGA
                </span>
                <div className="text-left">
                  <p className="font-display text-base font-bold text-navy">
                    Kodjo Gerson ADJANADO
                  </p>
                  <p className="text-sm text-subtext">Directeur Général, Graabel Pharma</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5 — Chiffres clés */}
      <section className="bg-navy py-24 text-white lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center rounded-full bg-primary/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary ring-1 ring-inset ring-primary/30">
                Nos chiffres clés
              </span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight lg:text-5xl">
                30 ans, mesurés en{" "}
                <span className="text-[#F59E0B]">résultats concrets</span>
              </h2>
            </div>
          </Reveal>

          <dl className="mt-16 grid grid-cols-2 gap-y-12 gap-x-8 border-t border-white/10 pt-12 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="text-center">
                  <dd className="font-display text-5xl font-extrabold tracking-tight text-[#F59E0B] lg:text-6xl">
                    <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-white/70">
                    {s.label}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* SECTION 6 — Organisation */}
      <section className="bg-[#FAFBFF] py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="label-accent">Notre organisation</span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy lg:text-5xl">
                Une structure professionnelle{" "}
                <span className="text-primary">et rigoureuse</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16">
              {/* Top — DG */}
              <div className="flex justify-center">
                <OrgNode title="Directeur Général" highlight />
              </div>
              <Connector />

              {/* Level 2 */}
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center">
                  <OrgNode title="Dir. Commercial R1" />
                  <Connector />
                  <OrgNode subtitle="Niveau 3" title="Superviseur VM" />
                  <Connector />
                  <OrgNode subtitle="Terrain" title="Délégués" />
                </div>
                <div className="flex flex-col items-center">
                  <OrgNode title="Dir. Commercial R2" />
                  <Connector />
                  <OrgNode subtitle="Niveau 3" title="Superviseur VM" />
                  <Connector />
                  <OrgNode subtitle="Terrain" title="Délégués" />
                </div>
                <div className="flex flex-col items-center">
                  <OrgNode title="Dir. Admin & Financier" />
                  <Connector />
                  <OrgNode subtitle="Support" title="Équipe Admin & Finance" />
                </div>
              </div>

              {/* Detached */}
              <div className="mt-12 border-t border-dashed border-border pt-12">
                <p className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-subtext">
                  Fonctions transverses
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <OrgNode title="Responsable Formation" />
                  <OrgNode title="Responsable Statistiques" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight text-primary-foreground lg:text-5xl">
              Prêt à faire confiance à Graabel Pharma ?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
              Parlons de votre prochain projet pharmaceutique en Afrique de l'Ouest.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-background px-8 py-4 text-base font-semibold text-primary transition-transform duration-200 hover:scale-[1.03]"
            >
              Contactez-nous
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function OrgNode({
  title,
  subtitle,
  highlight,
}: {
  title: string;
  subtitle?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`w-full max-w-xs rounded-2xl border bg-background px-5 py-4 text-center shadow-[0_10px_30px_-18px_rgba(13,43,94,0.25)] transition-colors ${
        highlight
          ? "border-primary/60 ring-2 ring-primary/20"
          : "border-border hover:border-primary/40"
      }`}
    >
      {subtitle && (
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-subtext">
          {subtitle}
        </p>
      )}
      <p
        className={`font-display text-sm font-bold ${highlight ? "text-primary" : "text-navy"} ${subtitle ? "mt-1" : ""}`}
      >
        {title}
      </p>
    </div>
  );
}

function Connector() {
  return <div aria-hidden className="mx-auto my-4 h-8 w-px bg-border" />;
}
