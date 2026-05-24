import { Reveal } from "./Reveal";
import {
  Stethoscope, FileCheck2, LineChart, Target, GraduationCap, Truck,
  type LucideIcon,
} from "lucide-react";

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Stethoscope, title: "Prospection pharmaceutique", desc: "Visite médicale auprès du corps médical privé et public, avec un message scientifique rigoureux." },
  { icon: FileCheck2, title: "Enregistrement de produits", desc: "Accompagnement réglementaire complet auprès des autorités sanitaires de chaque pays." },
  { icon: LineChart, title: "Études de marché", desc: "Analyse et cartographie de portefeuille produits pour des décisions stratégiques éclairées." },
  { icon: Target, title: "Plan marketing", desc: "Stratégie commerciale adaptée aux réalités du terrain et au positionnement de chaque marque." },
  { icon: GraduationCap, title: "Formations & Séminaires", desc: "Sessions de formation continue assurées par nos formateurs certifiés." },
  { icon: Truck, title: "Distribution parapharmacie", desc: "Réseau de distribution structuré pour les produits parapharmaceutiques." },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="label-accent">Nos services</span>
          <h2 className="mt-4 text-4xl font-extrabold text-navy lg:text-5xl">
            Des prestations de haute qualité
          </h2>
          <p className="mt-5 text-subtext">
            Un accompagnement de bout en bout, du lancement au pilotage commercial,
            adossé à l'expertise terrain de nos équipes.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <article className="group h-full rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_50px_-30px_rgba(13,43,94,0.35)]">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-tint text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-7 font-display text-xl font-bold text-navy">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-subtext">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
