import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Agendar Sesión Exploratoria Gratuita | Elevare Consulting",
  description:
    "Agendá una sesión exploratoria gratuita de 30 minutos con María Gómez. Coaching ontológico, mentoría ejecutiva para mujeres y consultoría organizacional. Buenos Aires, Argentina. Sin compromiso.",
  openGraph: {
    title: "Contacto | Sesión Exploratoria Gratuita | Elevare Consulting",
    description:
      "Conversemos sobre tus desafíos de liderazgo. Agendar una sesión gratuita de 30 minutos con especialista en coaching ontológico y desarrollo organizacional.",
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
                  "Formulario de contacto para agendar sesión exploratoria gratuita de coaching ontológico y mentoría ejecutiva.",
                url: "https://elevareconsultingmg.com/contacto",
                mainEntity: {
                  "@type": "ProfessionalService",
                  name: "Elevare Consulting MG",
                  telephone: "+54-9-11-0000-0000",
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
