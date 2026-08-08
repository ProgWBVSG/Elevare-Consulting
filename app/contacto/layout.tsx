import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Solicitá tu Diagnóstico | Elevare Consulting",
  description:
    "Contanos qué está frenando a tu organización. Te damos una devolución concreta sobre por dónde empezar, basada en evidencia. Sin costo y sin compromiso. Buenos Aires, Argentina y LATAM.",
  openGraph: {
    title: "Contacto | Solicitá tu Diagnóstico | Elevare Consulting",
    description:
      "Empezamos por el diagnóstico. Consultoría organizacional basada en ciencias del comportamiento para PYMEs y equipos. Devolución concreta, sin compromiso.",
    url: "https://elevareconsultingmg.com/contacto",
  },
  alternates: {
    canonical: "https://elevareconsultingmg.com/contacto",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                name: "Contacto — Elevare Consulting",
                description:
                  "Formulario de contacto para solicitar un diagnóstico de consultoría organizacional basada en ciencias del comportamiento.",
                url: "https://elevareconsultingmg.com/contacto",
                mainEntity: {
                  "@type": "ProfessionalService",
                  name: "Elevare Consulting MG",
                  telephone: "+54-9-11-2546-4650",
                  email: "contacto@elevareconsultingmg.com",
                  url: "https://elevareconsultingmg.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Buenos Aires",
                    addressCountry: "AR",
                  },
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Inicio",
                    item: "https://elevareconsultingmg.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Contacto",
                    item: "https://elevareconsultingmg.com/contacto",
                  },
                ],
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
