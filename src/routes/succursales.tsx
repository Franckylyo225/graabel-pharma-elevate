import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Smartphone,
  Mail,
  Globe2,
  Users,
  TrendingUp,
  Building2,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/succursales")({
  head: () => ({
    meta: [
      { title: "Succursales — Graabel Pharma" },
      {
        name: "description",
        content:
          "Siège à Abidjan, succursales au Togo et au Bénin, bientôt au Sénégal et au Mali. Nos équipes locales en Afrique de l'Ouest.",
      },
      { property: "og:title", content: "Nos succursales — Graabel Pharma" },
      { property: "og:description", content: "5 pays, une même exigence pharmaceutique." },
    ],
  }),
  component: Page,
});

type Country = {
  id: string;
  flag: string;
  name: string;
  badge: string;
  variant: "primary" | "default" | "muted";
  address?: string;
  phones?: string[];
  mobiles?: string[];
  email?: string;
  web?: string;
  team?: string;
  message?: string;
};

const countries: Country[] = [
  {
    id: "ci",
    flag: "🇨🇮",
    name: "Côte d'Ivoire",
    badge: "Siège social",
    variant: "primary",
    address:
      "Cocody Riviera Les Jardins, Villa 204 / Ilot A8, 28 BP 725 Abidjan 28",
    phones: ["+225 27 22 43 17 73", "+225 27 22 43 60 25"],
    mobiles: ["+225 07 78 41 14 58", "+225 07 79 43 09 46"],
    email: "info@graabelpharma.com",
    web: "www.graabelpharma.com",
    team: "Équipe siège + délégués actifs sur tout le territoire",
  },
  {
    id: "tg",
    flag: "🇹🇬",
    name: "Togo",
    badge: "Succursale",
    variant: "default",
    address:
      "Sito Avédji, Immeuble « LE JARDIN » Appt R2, 04 BP 104 Lomé 04",
    phones: ["+228 22 51 24 44"],
    mobiles: ["+228 90 79 65 40"],
    email: "infotogo@graabelpharma.com",
    team: "Équipe locale et délégués actifs",
  },
  {
    id: "bj",
    flag: "🇧🇯",
    name: "Bénin",
    badge: "Succursale",
    variant: "default",
    address:
      "Maison Yetongnon Eric c/3448 Agla, 01 BP 5685 Cotonou",
    mobiles: ["+229 01 94 78 44 44"],
    email: "infotogo@graabelpharma.com",
    team: "Équipe locale et délégués actifs",
  },
  {
    id: "sn",
    flag: "🇸🇳",
    name: "Sénégal",
    badge: "Prochainement",
    variant: "muted",
    message:
      "Notre présence au Sénégal est en cours de déploiement. Contactez le siège pour toute demande.",
  },
  {
    id: "ml",
    flag: "🇲🇱",
    name: "Mali",
    badge: "Prochainement",
    variant: "muted",
    message:
      "Notre expansion au Mali est en cours de finalisation. Restez connectés.",
  },
];

const reasons = [
  {
    icon: TrendingUp,
    title: "Marché en expansion",
    text: "Le marché pharmaceutique africain croît de 8 à 10 % par an, porté par l'augmentation de la classe moyenne et l'amélioration des systèmes de santé.",
  },
  {
    icon: Building2,
    title: "Infrastructures en développement",
    text: "Les gouvernements investissent massivement dans les hôpitaux publics, les centrales d'achat et les politiques de santé — autant d'opportunités pour nos partenaires.",
  },
  {
    icon: Handshake,
    title: "Un réseau de confiance",
    text: "30 ans de présence terrain nous ont permis de construire des relations solides avec les décideurs, grossistes, pharmaciens et prescripteurs clés.",
  },
];

// Approximate map points within a 600×520 viewBox of West Africa
const mapPoints = [
  { id: "ci", label: "Côte d'Ivoire", city: "Abidjan", x: 245, y: 335, active: true, hq: true },
  { id: "tg", label: "Togo", city: "Lomé", x: 330, y: 340, active: true },
  { id: "bj", label: "Bénin", city: "Cotonou", x: 360, y: 335, active: true },
  { id: "sn", label: "Sénégal", city: "Dakar", x: 70, y: 215, active: false },
  { id: "ml", label: "Mali", city: "Bamako", x: 175, y: 235, active: false },
];

function WestAfricaMap() {
  return (
    <div className="relative mx-auto aspect-[6/5.2] w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-[#F5F8FE] p-6 lg:p-10">
      <svg
        viewBox="0 0 600 520"
        className="h-full w-full"
        role="img"
        aria-label="Carte de l'Afrique de l'Ouest"
      >
        {/* Stylized West Africa landmass */}
        <path
          d="M40 200
             C 60 170, 110 150, 160 160
             C 200 150, 230 165, 270 180
             C 320 175, 370 165, 420 180
             C 470 195, 520 220, 540 270
             C 555 310, 540 360, 510 390
             C 470 420, 410 430, 360 425
             C 310 440, 260 445, 215 430
             C 175 425, 140 410, 115 385
             C 85 360, 60 320, 50 280
             C 40 250, 35 220, 40 200 Z"
          fill="white"
          stroke="hsl(217 91% 60% / 0.35)"
          strokeWidth="1.5"
        />
        {/* Soft inner shading */}
        <path
          d="M70 230 C 130 210, 220 215, 300 210 C 380 215, 460 235, 510 290"
          stroke="hsl(217 91% 60% / 0.2)"
          strokeWidth="1"
          fill="none"
        />

        {/* Points */}
        {mapPoints.map((p) => (
          <g key={p.id}>
            {p.active && (
              <circle
                cx={p.x}
                cy={p.y}
                r="22"
                fill="hsl(217 91% 60%)"
                opacity="0.18"
              >
                <animate
                  attributeName="r"
                  values="14;26;14"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.28;0;0.28"
                  dur="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
            <circle
              cx={p.x}
              cy={p.y}
              r={p.hq ? 9 : 7}
              fill={p.active ? "hsl(217 91% 60%)" : "hsl(217 91% 60% / 0.35)"}
              stroke="white"
              strokeWidth="2"
            />
            {p.hq && (
              <circle
                cx={p.x}
                cy={p.y}
                r="3"
                fill="white"
              />
            )}
            <text
              x={p.x + 14}
              y={p.y - 6}
              fontSize="13"
              fontWeight="700"
              fill="#0D2B5E"
              fontFamily="system-ui, sans-serif"
            >
              {p.label}
            </text>
            <text
              x={p.x + 14}
              y={p.y + 10}
              fontSize="11"
              fill="#64748B"
              fontFamily="system-ui, sans-serif"
            >
              {p.city}
              {p.hq ? " · Siège" : ""}
              {!p.active ? " · Bientôt" : ""}
            </text>
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full bg-background/90 px-5 py-2 text-xs font-medium text-subtext shadow-sm ring-1 ring-border backdrop-blur">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" /> Présence active
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary/30" /> En développement
        </span>
      </div>
    </div>
  );
}

function CountryCard({ country }: { country: Country }) {
  const isPrimary = country.variant === "primary";
  const isMuted = country.variant === "muted";

  const base = isPrimary
    ? "bg-primary text-primary-foreground shadow-[0_30px_70px_-30px_rgba(37,99,235,0.6)]"
    : isMuted
    ? "bg-[#F1F5F9] text-navy ring-1 ring-border"
    : "bg-background ring-1 ring-border";

  const labelTone = isPrimary ? "text-white/80" : isMuted ? "text-subtext" : "text-subtext";
  const valueTone = isPrimary ? "text-white" : "text-navy";
  const iconWrap = isPrimary
    ? "bg-white/15 text-white ring-1 ring-inset ring-white/30"
    : "bg-tint text-primary";

  return (
    <article className={`flex h-full flex-col rounded-3xl p-8 lg:p-10 ${base}`}>
      {/* Top band */}
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-4xl leading-none" aria-hidden>
            {country.flag}
          </span>
          <div>
            <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${labelTone}`}>
              {country.badge}
            </p>
            <h3 className={`font-display text-2xl font-extrabold leading-tight lg:text-3xl ${valueTone}`}>
              {country.name}
            </h3>
          </div>
        </div>
      </header>

      {country.message ? (
        <p
          className={`mt-8 text-base leading-relaxed ${
            isPrimary ? "text-white/85" : "text-subtext"
          }`}
        >
          {country.message}
        </p>
      ) : (
        <dl className="mt-8 space-y-5">
          {country.address && (
            <Row icon={MapPin} label="Adresse" value={country.address} iconWrap={iconWrap} labelTone={labelTone} valueTone={valueTone} />
          )}
          {country.phones && (
            <Row icon={Phone} label="Téléphone" value={country.phones.join(" · ")} iconWrap={iconWrap} labelTone={labelTone} valueTone={valueTone} />
          )}
          {country.mobiles && (
            <Row icon={Smartphone} label="Mobile" value={country.mobiles.join(" · ")} iconWrap={iconWrap} labelTone={labelTone} valueTone={valueTone} />
          )}
          {country.email && (
            <Row icon={Mail} label="Email" value={country.email} iconWrap={iconWrap} labelTone={labelTone} valueTone={valueTone} />
          )}
          {country.web && (
            <Row icon={Globe2} label="Web" value={country.web} iconWrap={iconWrap} labelTone={labelTone} valueTone={valueTone} />
          )}
          {country.team && (
            <Row icon={Users} label="Équipe" value={country.team} iconWrap={iconWrap} labelTone={labelTone} valueTone={valueTone} />
          )}
        </dl>
      )}

      <div className="mt-auto pt-8">
        <Link
          to="/contact"
          className={`inline-flex items-center gap-2 text-sm font-semibold transition-transform hover:translate-x-1 ${
            isPrimary ? "text-white" : "text-primary"
          }`}
        >
          Nous contacter
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function Row({
  icon: Icon,
  label,
  value,
  iconWrap,
  labelTone,
  valueTone,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  iconWrap: string;
  labelTone: string;
  valueTone: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${iconWrap}`}>
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <dt className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${labelTone}`}>
          {label}
        </dt>
        <dd className={`mt-1 break-words text-sm font-medium leading-snug ${valueTone}`}>
          {value}
        </dd>
      </div>
    </div>
  );
}

function Page() {
  return (
    <PageShell
      breadcrumb="Succursales"
      hero={{
        label: "Nos succursales",
        title: <>5 pays. <span className="text-primary">Une même exigence.</span></>,
        subtitle:
          "GRAABEL PHARMA est présent dans 5 pays d'Afrique de l'Ouest avec des équipes locales dédiées.",
      }}
    >
      {/* SECTION 1 — Map */}
      <section className="py-24 lg:py-28">
        <div className="container-x">
          <Reveal>
            <WestAfricaMap />
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — Country cards */}
      <section className="bg-[#FAFBFF] py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="label-accent">Implantations</span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy lg:text-5xl">
                Le siège et nos <span className="text-primary">succursales</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 space-y-6">
            {/* Flagship full-width */}
            <Reveal>
              <CountryCard country={countries[0]} />
            </Reveal>

            {/* Active branches */}
            <div className="grid gap-6 lg:grid-cols-2">
              {countries.slice(1, 3).map((c, i) => (
                <Reveal key={c.id} delay={i * 0.08}>
                  <CountryCard country={c} />
                </Reveal>
              ))}
            </div>

            {/* Coming soon */}
            <div className="grid gap-6 lg:grid-cols-2">
              {countries.slice(3).map((c, i) => (
                <Reveal key={c.id} delay={i * 0.08}>
                  <CountryCard country={c} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Why West Africa */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="label-accent">Pourquoi l'Afrique de l'Ouest</span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy lg:text-5xl">
                Un marché pharmaceutique{" "}
                <span className="text-primary">en pleine croissance</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-28px_rgba(13,43,94,0.3)]">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-tint text-primary">
                    <r.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-navy">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-subtext">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight text-white lg:text-5xl">
              Votre laboratoire veut entrer{" "}
              <span className="text-primary">sur ces marchés ?</span>
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
            >
              Discutons-en
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
