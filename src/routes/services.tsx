import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  FileCheck,
  BarChart2,
  Target,
  GraduationCap,
  Package,
  Globe,
  Search,
  Map,
  Rocket,
  LineChart,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Graabel Pharma" },
      {
        name: "description",
        content:
          "Prospection, enregistrement, étude de marché, plan marketing, formations et distribution parapharmacie en Afrique de l'Ouest.",
      },
      { property: "og:title", content: "Nos services — Graabel Pharma" },
      {
        property: "og:description",
        content: "Six expertises pharmaceutiques, déployées sur cinq marchés.",
      },
    ],
  }),
  component: Page,
});

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  visual: React.ReactNode;
};

function CoverageVisual() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <circle cx="140" cy="140" r="90" fill="hsl(217 91% 60% / 0.18)" />
      <circle cx="220" cy="120" r="90" fill="hsl(217 91% 60% / 0.22)" />
      <circle cx="190" cy="190" r="90" fill="hsl(217 91% 60% / 0.3)" />
      <circle cx="140" cy="140" r="6" fill="hsl(217 91% 60%)" />
      <circle cx="220" cy="120" r="6" fill="hsl(217 91% 60%)" />
      <circle cx="190" cy="190" r="6" fill="hsl(217 91% 60%)" />
    </svg>
  );
}

function DocumentsVisual() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <rect x="80" y="50" width="180" height="220" rx="10" fill="hsl(217 91% 60% / 0.12)" />
      <rect x="100" y="35" width="180" height="220" rx="10" fill="hsl(217 91% 60% / 0.22)" stroke="hsl(217 91% 60% / 0.4)" />
      <rect x="120" y="20" width="180" height="220" rx="10" fill="white" stroke="hsl(217 91% 60%)" />
      <rect x="140" y="50" width="110" height="6" rx="3" fill="hsl(217 91% 60% / 0.6)" />
      <rect x="140" y="70" width="140" height="4" rx="2" fill="hsl(217 91% 60% / 0.3)" />
      <rect x="140" y="84" width="120" height="4" rx="2" fill="hsl(217 91% 60% / 0.3)" />
      <rect x="140" y="98" width="135" height="4" rx="2" fill="hsl(217 91% 60% / 0.3)" />
      <circle cx="250" cy="200" r="28" fill="hsl(217 91% 60%)" />
      <path d="M240 200 l8 8 l14 -16" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartVisual() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <line x1="60" y1="220" x2="360" y2="220" stroke="hsl(217 91% 60% / 0.3)" />
      <line x1="60" y1="60" x2="60" y2="220" stroke="hsl(217 91% 60% / 0.3)" />
      {[
        { x: 90, h: 60 },
        { x: 150, h: 100 },
        { x: 210, h: 80 },
        { x: 270, h: 140 },
        { x: 330, h: 170 },
      ].map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={220 - b.h}
          width="34"
          height={b.h}
          rx="4"
          fill={i === 4 ? "hsl(217 91% 60%)" : "hsl(217 91% 60% / 0.35)"}
        />
      ))}
    </svg>
  );
}

function TargetVisual() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <circle cx="200" cy="140" r="110" fill="hsl(217 91% 60% / 0.1)" />
      <circle cx="200" cy="140" r="80" fill="hsl(217 91% 60% / 0.18)" />
      <circle cx="200" cy="140" r="48" fill="hsl(217 91% 60% / 0.32)" />
      <circle cx="200" cy="140" r="16" fill="hsl(217 91% 60%)" />
      <path d="M340 30 L210 140" stroke="hsl(217 91% 60%)" strokeWidth="3" strokeLinecap="round" />
      <path d="M340 30 L320 30 L340 50 Z" fill="hsl(217 91% 60%)" />
    </svg>
  );
}

function FormationVisual() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <rect x="60" y="80" width="280" height="160" rx="12" fill="hsl(217 91% 60% / 0.12)" stroke="hsl(217 91% 60% / 0.4)" />
      <rect x="80" y="100" width="240" height="100" rx="6" fill="white" stroke="hsl(217 91% 60% / 0.3)" />
      <path d="M170 130 L230 130 L230 170 L170 170 Z" fill="hsl(217 91% 60% / 0.2)" />
      <polygon points="190,140 215,150 190,160" fill="hsl(217 91% 60%)" />
      <circle cx="120" cy="60" r="14" fill="hsl(217 91% 60% / 0.3)" />
      <circle cx="200" cy="50" r="14" fill="hsl(217 91% 60% / 0.5)" />
      <circle cx="280" cy="60" r="14" fill="hsl(217 91% 60% / 0.3)" />
    </svg>
  );
}

function DistributionVisual() {
  return (
    <svg viewBox="0 0 400 280" className="h-full w-full" aria-hidden>
      <circle cx="200" cy="140" r="22" fill="hsl(217 91% 60%)" />
      {[
        { x: 80, y: 60 },
        { x: 320, y: 60 },
        { x: 60, y: 200 },
        { x: 340, y: 200 },
        { x: 200, y: 40 },
        { x: 200, y: 240 },
      ].map((p, i) => (
        <g key={i}>
          <line x1="200" y1="140" x2={p.x} y2={p.y} stroke="hsl(217 91% 60% / 0.4)" strokeDasharray="4 4" />
          <rect x={p.x - 16} y={p.y - 14} width="32" height="28" rx="4" fill="white" stroke="hsl(217 91% 60%)" />
          <line x1={p.x - 10} y1={p.y - 4} x2={p.x + 10} y2={p.y - 4} stroke="hsl(217 91% 60%)" strokeWidth="2" />
          <line x1={p.x - 10} y1={p.y + 4} x2={p.x + 10} y2={p.y + 4} stroke="hsl(217 91% 60% / 0.5)" strokeWidth="2" />
        </g>
      ))}
    </svg>
  );
}

const services: Service[] = [
  {
    icon: Users,
    title: "Prospection pharmaceutique",
    subtitle: "Auprès du corps médical privé et public",
    description:
      "Nos délégués médicaux et pharmaceutiques couvrent l'ensemble du territoire, des capitales régionales aux villes de l'intérieur. Chaque visite est préparée, tracée et rapportée avec précision à nos laboratoires partenaires.",
    visual: <CoverageVisual />,
  },
  {
    icon: FileCheck,
    title: "Enregistrement de produits pharmaceutiques",
    subtitle: "Accompagnement réglementaire de A à Z",
    description:
      "Nous accompagnons les laboratoires dans toutes les démarches d'enregistrement auprès des autorités sanitaires locales (DPM, DPML), en assurant le suivi des dossiers jusqu'à l'obtention des AMM.",
    visual: <DocumentsVisual />,
  },
  {
    icon: BarChart2,
    title: "Étude de marché",
    subtitle: "Cartographie et analyse du marché pharmaceutique",
    description:
      "Analyse du potentiel de marché, identification des prescripteurs clés, benchmark concurrentiel, segmentation des zones géographiques. Nous vous donnons les données pour décider avec confiance.",
    visual: <ChartVisual />,
  },
  {
    icon: Target,
    title: "Plan marketing",
    subtitle: "Stratégie adaptée aux réalités du terrain africain",
    description:
      "Élaboration des plans promotionnels, définition des cibles prioritaires, coordination avec les équipes de vente et les product managers des laboratoires. Une approche hybride : rigueur européenne, connaissance locale.",
    visual: <TargetVisual />,
  },
  {
    icon: GraduationCap,
    title: "Formations & Organisations de séminaires",
    subtitle: "Renforcement des compétences, continu et structuré",
    description:
      "Sessions de formation médicale continue (EPU), organisation de symposiums et conférences scientifiques, formation des délégués aux produits des laboratoires partenaires. Nos formateurs internes et externes garantissent un niveau d'excellence.",
    visual: <FormationVisual />,
  },
  {
    icon: Package,
    title: "Distribution parapharmacie",
    subtitle: "Un réseau structuré sur toute la sous-région",
    description:
      "Distribution de produits parapharmaceutiques via notre réseau de grossistes, pharmacies et centrales d'achat. Relations directes AIRP, accès aux marchés publics et appels d'offres internationaux.",
    visual: <DistributionVisual />,
  },
];

const steps = [
  { icon: Search, title: "Analyse & Brief", text: "Compréhension de vos objectifs et du marché cible." },
  { icon: Map, title: "Stratégie", text: "Plan d'action personnalisé, équipe dédiée, KPIs définis." },
  { icon: Rocket, title: "Déploiement", text: "Lancement terrain, délégués briefés, actions coordonnées." },
  { icon: LineChart, title: "Reporting", text: "Rapports réguliers, statistiques détaillées, ajustements continus." },
];

function Page() {
  return (
    <PageShell
      breadcrumb="Services"
      hero={{
        label: "Nos services",
        title: (
          <>
            Des prestations pharmaceutiques{" "}
            <span className="text-primary">de haute qualité</span>
          </>
        ),
        subtitle:
          "Nous nous entourons des meilleurs profils pour offrir des services qui font la différence sur le terrain.",
      }}
    >
      {/* Intro */}
      <section className="py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <p className="mx-auto max-w-[700px] text-center text-lg leading-relaxed text-subtext">
              GRAABEL PHARMA est le lien essentiel entre les grands laboratoires
              pharmaceutiques et les professionnels de santé. Chaque service est conçu pour
              maximiser la visibilité et les ventes de vos produits sur les marchés
              d'Afrique de l'Ouest.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service rows */}
      <section className="pb-24 lg:pb-32">
        <div className="container-x space-y-24 lg:space-y-32">
          {services.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={s.title}>
                <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={reversed ? "lg:order-2" : ""}>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-tint text-primary">
                      <s.icon className="h-7 w-7" />
                    </span>
                    <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                      Service {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy lg:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 font-display text-base font-semibold text-primary">
                      {s.subtitle}
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-subtext">{s.description}</p>
                  </div>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-[#F5F8FE] p-8">
                      {s.visual}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Process stepper */}
      <section className="bg-[#FAFBFF] py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="label-accent">Comment ça marche</span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy lg:text-5xl">
                Notre processus <span className="text-primary">en 4 étapes</span>
              </h2>
            </div>
          </Reveal>

          <div className="relative mt-16">
            {/* horizontal connector (desktop) */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
            />
            <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <li className="flex flex-col items-center text-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-base font-extrabold text-primary-foreground ring-8 ring-[#FAFBFF]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-5 grid h-10 w-10 place-items-center rounded-full bg-tint text-primary">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-subtext">
                      {step.text}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Appels d'offres */}
      <section className="bg-[#EFF6FF] py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-3xl bg-background p-10 shadow-[0_30px_60px_-30px_rgba(13,43,94,0.2)] ring-1 ring-border md:grid-cols-[auto_1fr] md:gap-12 md:p-14">
              <span className="grid h-20 w-20 place-items-center rounded-2xl bg-tint text-primary md:h-24 md:w-24">
                <Globe className="h-10 w-10 md:h-12 md:w-12" />
              </span>
              <div>
                <h3 className="font-display text-3xl font-extrabold leading-tight text-navy lg:text-4xl">
                  Appels d'offres internationaux
                </h3>
                <p className="mt-4 text-base leading-relaxed text-subtext">
                  Nous préparons et soumettons des dossiers d'appels d'offres pour les marchés
                  publics pharmaceutiques dans les 5 pays de notre zone d'intervention.
                </p>
                <span className="mt-6 inline-flex items-center rounded-full bg-tint px-4 py-2 text-xs font-semibold text-primary">
                  Côte d'Ivoire • Togo • Bénin • Sénégal • Mali
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight text-white lg:text-5xl">
              Discutons de <span className="text-primary">vos besoins</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Une équipe à l'écoute, une réponse sous 48 heures ouvrées.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
            >
              Nous contacter
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
