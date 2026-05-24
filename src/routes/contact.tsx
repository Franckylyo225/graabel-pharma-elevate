import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin,
  Phone,
  Smartphone,
  Mail,
  Globe2,
  Clock,
  Zap,
  Loader2,
  Check,
  ExternalLink,
  Send,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Graabel Pharma" },
      {
        name: "description",
        content:
          "Contactez Graabel Pharma à Abidjan, Lomé ou Cotonou. Réponse sous 24 heures ouvrables.",
      },
      { property: "og:title", content: "Contactez Graabel Pharma" },
      {
        property: "og:description",
        content: "Parlons de votre projet pharmaceutique en Afrique de l'Ouest.",
      },
    ],
  }),
  component: Page,
});

const PAYS = ["Côte d'Ivoire", "Togo", "Bénin", "Sénégal", "Mali", "Autre"] as const;
const OBJETS = [
  "Devenir partenaire laboratoire",
  "Information sur nos services",
  "Enregistrement de produit",
  "Formation & séminaires",
  "Recrutement",
  "Autre",
] as const;
const FLAGS = [
  { code: "ci", flag: "🇨🇮", dial: "+225" },
  { code: "tg", flag: "🇹🇬", dial: "+228" },
  { code: "bj", flag: "🇧🇯", dial: "+229" },
  { code: "sn", flag: "🇸🇳", dial: "+221" },
  { code: "ml", flag: "🇲🇱", dial: "+223" },
];

const schema = z.object({
  prenom: z.string().trim().min(1, "Le prénom est requis").max(80),
  nom: z.string().trim().min(1, "Le nom est requis").max(80),
  societe: z.string().trim().min(1, "La société est requise").max(120),
  email: z.string().trim().email("Adresse email invalide").max(255),
  countryCode: z.string().optional(),
  telephone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal("")),
  pays: z.enum(PAYS, { errorMap: () => ({ message: "Sélectionnez un pays" }) }),
  objet: z.enum(OBJETS, { errorMap: () => ({ message: "Sélectionnez un objet" }) }),
  message: z
    .string()
    .trim()
    .min(10, "Message trop court (10 caractères minimum)")
    .max(2000, "Message trop long (2000 caractères maximum)"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Votre accord est requis" }),
  }),
});

type FormValues = z.infer<typeof schema>;

const HQ_ADDRESS =
  "Cocody Riviera Les Jardins, Villa 204 / Ilot A8, 28 BP 725 Abidjan 28, Côte d'Ivoire";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  HQ_ADDRESS,
)}`;

const faq = [
  {
    q: "Êtes-vous ouverts à de nouveaux laboratoires partenaires ?",
    a: "Oui, nous étudions toutes les demandes de collaboration avec des laboratoires souhaitant développer leur présence en Afrique de l'Ouest. Contactez-nous avec votre portfolio produits.",
  },
  {
    q: "Dans quels pays intervenez-vous ?",
    a: "Nous sommes actifs en Côte d'Ivoire (siège), au Togo et au Bénin. Nous sommes en cours de déploiement au Sénégal et au Mali.",
  },
  {
    q: "Combien de délégués pouvez-vous mobiliser ?",
    a: "Notre réseau compte plus de 300 délégués médicaux et pharmaceutiques qualifiés, encadrés par une dizaine de superviseurs.",
  },
  {
    q: "Proposez-vous des services d'enregistrement de produits ?",
    a: "Oui, nous accompagnons les laboratoires dans l'ensemble des démarches réglementaires auprès des autorités sanitaires locales.",
  },
  {
    q: "Quelle est la durée minimale d'un contrat de promotion ?",
    a: "Nous adaptons nos contrats à vos besoins, avec des formules à partir de 6 mois pour les lancements de produits.",
  },
];

function Page() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { countryCode: "ci" },
  });

  const onSubmit = async (_values: FormValues) => {
    setStatus("loading");
    // Simulated send — no backend wiring per scope
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("success");
    reset({ countryCode: "ci" } as Partial<FormValues> as FormValues);
    setTimeout(() => setStatus("idle"), 4500);
  };

  return (
    <PageShell
      breadcrumb="Contact"
      hero={{
        label: "Contact",
        title: <>Parlons de <span className="text-primary">votre projet.</span></>,
        subtitle: "Notre équipe vous répond sous 24 heures ouvrables.",
      }}
    >
      {/* Form + Info */}
      <section className="py-24 lg:py-28">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
            {/* FORM */}
            <Reveal>
              <div className="rounded-3xl bg-background p-8 shadow-[0_30px_70px_-30px_rgba(13,43,94,0.25)] ring-1 ring-border md:p-10 lg:p-12">
                <h2 className="font-display text-2xl font-extrabold text-navy lg:text-3xl">
                  Envoyez-nous un message
                </h2>
                <p className="mt-2 text-sm text-subtext">
                  Les champs marqués d'un <span className="text-primary">*</span> sont obligatoires.
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="mt-8 space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Prénom" required error={errors.prenom?.message}>
                      <input
                        type="text"
                        autoComplete="given-name"
                        className={inputCls(!!errors.prenom)}
                        {...register("prenom")}
                      />
                    </Field>
                    <Field label="Nom" required error={errors.nom?.message}>
                      <input
                        type="text"
                        autoComplete="family-name"
                        className={inputCls(!!errors.nom)}
                        {...register("nom")}
                      />
                    </Field>
                  </div>

                  <Field label="Société / Laboratoire" required error={errors.societe?.message}>
                    <input
                      type="text"
                      autoComplete="organization"
                      className={inputCls(!!errors.societe)}
                      {...register("societe")}
                    />
                  </Field>

                  <Field label="Email professionnel" required error={errors.email?.message}>
                    <input
                      type="email"
                      autoComplete="email"
                      className={inputCls(!!errors.email)}
                      {...register("email")}
                    />
                  </Field>

                  <Field label="Téléphone" error={errors.telephone?.message}>
                    <div
                      className={`flex overflow-hidden rounded-xl border bg-background transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 ${
                        errors.telephone ? "border-red-400" : "border-border"
                      }`}
                    >
                      <select
                        aria-label="Indicatif pays"
                        className="border-r border-border bg-[#F7FAFF] px-3 text-sm font-semibold text-navy focus:outline-none"
                        {...register("countryCode")}
                      >
                        {FLAGS.map((f) => (
                          <option key={f.code} value={f.code}>
                            {f.flag} {f.dial}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        autoComplete="tel"
                        placeholder="07 78 41 14 58"
                        className="flex-1 bg-background px-4 py-3 text-sm text-navy placeholder:text-subtext/60 focus:outline-none"
                        {...register("telephone")}
                      />
                    </div>
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Pays" required error={errors.pays?.message}>
                      <select className={inputCls(!!errors.pays)} defaultValue="" {...register("pays")}>
                        <option value="" disabled>
                          Sélectionner…
                        </option>
                        {PAYS.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Objet" required error={errors.objet?.message}>
                      <select className={inputCls(!!errors.objet)} defaultValue="" {...register("objet")}>
                        <option value="" disabled>
                          Sélectionner…
                        </option>
                        {OBJETS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Message" required error={errors.message?.message}>
                    <textarea
                      rows={5}
                      placeholder="Présentez-nous votre projet, vos produits, vos besoins…"
                      className={`${inputCls(!!errors.message)} resize-y`}
                      {...register("message")}
                    />
                  </Field>

                  <div>
                    <label className="flex cursor-pointer items-start gap-3 text-sm text-navy">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-primary"
                        {...register("consent")}
                      />
                      <span className="text-subtext">
                        J'accepte que mes données soient utilisées pour traiter ma demande.{" "}
                        <span className="text-primary">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-2 text-xs font-medium text-red-500">
                        {errors.consent.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300 ${
                      status === "success"
                        ? "bg-emerald-500 text-white"
                        : "bg-primary text-primary-foreground hover:scale-[1.01] hover:bg-primary/95"
                    } disabled:cursor-not-allowed disabled:opacity-80`}
                  >
                    {status === "loading" && (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours…
                      </>
                    )}
                    {status === "success" && (
                      <>
                        <Check className="h-4 w-4" strokeWidth={3} /> Message envoyé&nbsp;!
                      </>
                    )}
                    {status === "idle" && (
                      <>
                        Envoyer le message <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>

            {/* INFO COLUMN */}
            <Reveal delay={0.1}>
              <div className="space-y-5">
                {/* Siège */}
                <article className="rounded-2xl bg-background p-7 ring-1 ring-border">
                  <header className="flex items-center gap-3">
                    <span className="text-2xl leading-none">🇨🇮</span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                        Siège social
                      </p>
                      <h3 className="font-display text-lg font-bold text-navy">
                        Côte d'Ivoire — Abidjan
                      </h3>
                    </div>
                  </header>
                  <ul className="mt-5 space-y-3 text-sm text-navy">
                    <InfoLine icon={MapPin}>
                      Cocody Riviera Les Jardins, Villa 204/Ilot A8, Abidjan 28
                    </InfoLine>
                    <InfoLine icon={Phone}>+225 27 22 43 17 73</InfoLine>
                    <InfoLine icon={Smartphone}>+225 07 78 41 14 58</InfoLine>
                    <InfoLine icon={Mail}>
                      <a href="mailto:info@graabelpharma.com" className="hover:text-primary">
                        info@graabelpharma.com
                      </a>
                    </InfoLine>
                    <InfoLine icon={Globe2}>www.graabelpharma.com</InfoLine>
                  </ul>
                </article>

                {/* Togo */}
                <article className="rounded-2xl bg-background p-6 ring-1 ring-border">
                  <header className="flex items-center gap-3">
                    <span className="text-xl leading-none">🇹🇬</span>
                    <h3 className="font-display text-sm font-bold text-navy">
                      Togo — Lomé
                    </h3>
                  </header>
                  <ul className="mt-4 space-y-2.5 text-sm text-navy">
                    <InfoLine icon={MapPin} compact>
                      Sito Avédji, Immeuble « LE JARDIN », Appt R2
                    </InfoLine>
                    <InfoLine icon={Phone} compact>
                      +228 22 51 24 44
                    </InfoLine>
                    <InfoLine icon={Mail} compact>
                      <a href="mailto:infotogo@graabelpharma.com" className="hover:text-primary">
                        infotogo@graabelpharma.com
                      </a>
                    </InfoLine>
                  </ul>
                </article>

                {/* Bénin */}
                <article className="rounded-2xl bg-background p-6 ring-1 ring-border">
                  <header className="flex items-center gap-3">
                    <span className="text-xl leading-none">🇧🇯</span>
                    <h3 className="font-display text-sm font-bold text-navy">
                      Bénin — Cotonou
                    </h3>
                  </header>
                  <ul className="mt-4 space-y-2.5 text-sm text-navy">
                    <InfoLine icon={MapPin} compact>
                      Maison Yetongnon Eric c/3448, Agla
                    </InfoLine>
                    <InfoLine icon={Smartphone} compact>
                      +229 01 94 78 44 44
                    </InfoLine>
                  </ul>
                </article>

                {/* Horaires */}
                <article className="rounded-2xl bg-[#EFF6FF] p-6">
                  <header className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-primary">
                      <Clock className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-sm font-bold text-navy">Horaires</h3>
                  </header>
                  <ul className="mt-4 space-y-1.5 text-sm text-navy">
                    <li>Lundi – Vendredi : 08h00 – 18h00</li>
                    <li>Samedi : 09h00 – 13h00</li>
                    <li className="text-subtext">Fuseau horaire : GMT (Abidjan)</li>
                  </ul>
                </article>

                {/* Response promise */}
                <article className="flex items-start gap-4 rounded-2xl border border-[#F59E0B]/40 bg-[#FFF8E6] p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F59E0B] text-white">
                    <Zap className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-navy">
                      Réponse garantie sous 24h ouvrables
                    </p>
                    <p className="mt-1 text-xs text-subtext">
                      Notre équipe revient vers vous rapidement avec une première analyse.
                    </p>
                  </div>
                </article>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-24 lg:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-[#EAF1FB]">
              <div className="relative h-72 w-full md:h-96">
                {/* stylized blue grid map */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 800 400"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path
                        d="M40 0 H0 V40"
                        fill="none"
                        stroke="hsl(217 91% 60% / 0.18)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="800" height="400" fill="url(#grid)" />
                  <path
                    d="M0 250 Q 200 200, 400 230 T 800 210"
                    stroke="hsl(217 91% 60% / 0.35)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M100 100 L 300 120 L 320 280 L 120 260 Z"
                    fill="hsl(217 91% 60% / 0.08)"
                  />
                  <path
                    d="M500 90 L 720 110 L 700 320 L 480 290 Z"
                    fill="hsl(217 91% 60% / 0.08)"
                  />
                </svg>
                {/* Pin */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="relative grid h-14 w-14 place-items-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
                    <span className="relative grid h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-[0_10px_24px_-6px_rgba(37,99,235,0.6)]">
                      <MapPin className="h-6 w-6" />
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 border-t border-border bg-background p-6 md:flex-row md:items-center md:justify-between md:p-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                    Siège social
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-navy">
                    {HQ_ADDRESS}
                  </p>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Voir sur Google Maps <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAFBFF] py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="label-accent">FAQ</span>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-navy lg:text-5xl">
                Questions <span className="text-primary">fréquentes</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 max-w-3xl">
              <Accordion type="single" collapsible className="space-y-3">
                {faq.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="rounded-2xl border border-border bg-background px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-[0_16px_40px_-22px_rgba(13,43,94,0.25)]"
                  >
                    <AccordionTrigger className="py-5 text-left font-display text-base font-bold text-navy hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-subtext">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function inputCls(error: boolean) {
  return `w-full rounded-xl border bg-background px-4 py-3 text-sm text-navy placeholder:text-subtext/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
    error ? "border-red-400 focus:border-red-400" : "border-border focus:border-primary"
  }`;
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-navy">
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}

function InfoLine({
  icon: Icon,
  children,
  compact,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`grid shrink-0 place-items-center rounded-lg bg-tint text-primary ${
          compact ? "h-7 w-7" : "h-8 w-8"
        }`}
      >
        <Icon className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
      </span>
      <span className="leading-snug">{children}</span>
    </li>
  );
}
