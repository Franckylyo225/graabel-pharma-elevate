import { Reveal } from "./Reveal";
import { Quote } from "lucide-react";

const values = ["Sérieux", "Éthique", "Probité", "Efficacité"];

export function About() {
  return (
    <section id="about" className="bg-[color:var(--surface-alt)] py-24 lg:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <span className="label-accent">À propos</span>
          <h2 className="mt-4 text-4xl font-extrabold text-navy lg:text-5xl">
            Le lien essentiel entre les grands laboratoires pharmaceutiques et les
            professionnels de santé.
          </h2>
          <div className="mt-8 space-y-5 text-subtext">
            <p>
              Fondée en 1996 à Abidjan, Graabel Pharma accompagne les laboratoires
              internationaux dans la promotion, l'enregistrement et la formation
              continue de leurs produits sur les marchés d'Afrique de l'Ouest.
            </p>
            <p>
              Notre force : une équipe de plus de 300 délégués médicaux qualifiés,
              une présence dans 5 pays, et trois décennies de relations établies
              avec le corps médical, les grossistes et les centrales d'achat.
            </p>
          </div>

          <figure className="mt-12 border-l-2 border-primary pl-6">
            <Quote className="h-6 w-6 text-primary" />
            <blockquote className="mt-3 font-display text-xl font-semibold text-navy">
              « Notre engagement : porter chaque produit avec la rigueur scientifique
              et l'éthique qu'il mérite, partout où la santé en a besoin. »
            </blockquote>
            <figcaption className="mt-4 text-sm text-subtext">
              — Direction Générale, Graabel Pharma
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.15} className="lg:pt-20">
          <ul className="space-y-4">
            {values.map((v, i) => (
              <li
                key={v}
                className="group flex items-center justify-between rounded-2xl border border-border bg-background px-7 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_18px_40px_-20px_rgba(37,99,235,0.35)]"
              >
                <div className="flex items-center gap-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-tint font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl font-bold text-navy">{v}</span>
                </div>
                <span className="text-accent text-2xl">✦</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
