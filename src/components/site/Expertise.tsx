import { Reveal } from "./Reveal";
import { Rocket, RefreshCw, Map, Users } from "lucide-react";

const blocks = [
  { icon: Rocket, title: "Lancement de nouveaux produits", desc: "De la stratégie de pré-lancement au déploiement national." },
  { icon: RefreshCw, title: "Relancement de produits en souffrance", desc: "Redonner vie aux marques à fort potentiel sous-exploité." },
  { icon: Map, title: "Couverture territoriale maîtrisée", desc: "Une présence terrain rigoureuse et mesurable." },
  { icon: Users, title: "Organisation & restructuration d'équipe", desc: "Structuration, recrutement et montée en compétence." },
];

export function Expertise() {
  return (
    <section id="expertise" className="bg-navy text-white py-24 lg:py-32">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
            Notre expertise
          </span>
          <h2 className="mt-4 text-4xl font-extrabold lg:text-6xl">
            30 ans. <span className="text-white/60">+300 délégués.</span>{" "}
            <span className="text-accent">5 pays.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
          {blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="group h-full bg-navy p-10 transition-colors hover:bg-white/[0.03]">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-accent">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold">{b.title}</h3>
                <p className="mt-3 text-white/60">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-lg text-white/80">
            Relation étroite{" "}
            <span className="font-semibold text-white">AIRP / Grossistes / Centrale d'Achat</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
