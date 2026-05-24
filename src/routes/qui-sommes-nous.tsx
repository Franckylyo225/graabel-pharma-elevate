import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { About } from "@/components/site/About";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/qui-sommes-nous")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous — Graabel Pharma" },
      { name: "description", content: "30 ans au service de la santé en Afrique de l'Ouest. Découvrez l'histoire, la mission et l'équipe de Graabel Pharma." },
      { property: "og:title", content: "Qui sommes-nous — Graabel Pharma" },
      { property: "og:description", content: "Notre mission : faire avancer la santé en Afrique de l'Ouest depuis 1996." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      breadcrumb="Qui sommes-nous"
      hero={{
        label: "À propos",
        title: <>30 ans d'engagement <br /><span className="text-primary">pour la santé africaine</span></>,
        subtitle: "Fondée en 1996 à Abidjan, Graabel Pharma est aujourd'hui un acteur de référence de la promotion et de la formation pharmaceutique en Afrique de l'Ouest.",
      }}
    >
      <About />
      <CtaBand />
    </PageShell>
  );
}
