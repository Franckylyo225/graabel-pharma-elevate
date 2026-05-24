import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Graabel Pharma" },
      { name: "description", content: "Contactez Graabel Pharma à Abidjan ou dans l'une de nos succursales au Togo, Bénin, Sénégal et Mali." },
      { property: "og:title", content: "Contactez Graabel Pharma" },
      { property: "og:description", content: "Parlons de votre projet pharmaceutique en Afrique de l'Ouest." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      breadcrumb="Contact"
      hero={{
        label: "Contact",
        title: <>Parlons de <span className="text-primary">votre projet</span></>,
        subtitle: "Une question, un dossier d'enregistrement, un partenariat de promotion ? Notre équipe vous répond sous 48 heures ouvrées.",
      }}
    >
      <Contact />
    </PageShell>
  );
}
