import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Presence } from "@/components/site/Presence";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/succursales")({
  head: () => ({
    meta: [
      { title: "Succursales — Graabel Pharma" },
      { name: "description", content: "Siège à Abidjan et succursales au Togo, Bénin, Sénégal et Mali. Une présence régionale au plus proche de vos marchés." },
      { property: "og:title", content: "Nos Succursales — Graabel Pharma" },
      { property: "og:description", content: "5 pays, une équipe locale, un standard unique." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      breadcrumb="Succursales"
      hero={{
        label: "Succursales",
        title: <>5 pays, <span className="text-primary">une seule exigence</span></>,
        subtitle: "Depuis Abidjan, nous opérons au Togo, au Bénin, au Sénégal et au Mali avec des équipes locales et un standard de qualité unique.",
      }}
    >
      <Presence />
      <CtaBand />
    </PageShell>
  );
}
