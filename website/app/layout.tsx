import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elevareconsultingmg.com"),
  title: {
    default: "Elevare Consulting MG | Coaching Ontológico y Mentoría Ejecutiva",
    template: "%s | Elevare Consulting MG",
  },
  description:
    "20+ años transformando líderes y organizaciones con coaching ontológico. Mentoría especializada para mujeres ejecutivas en Argentina y LATAM. Agenda tu sesión exploratoria gratuita.",
  keywords: [
    "coaching ontológico",
    "consultoría liderazgo",
    "mentoría mujeres ejecutivas",
    "coaching empresarial Argentina",
    "desarrollo liderazgo LATAM",
    "María Gómez coach",
  ],
  authors: [{ name: "María Gómez", url: "https://elevareconsultingmg.com/sobre-maria" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://elevareconsultingmg.com",
    siteName: "Elevare Consulting MG",
    title: "Elevare Consulting MG | Coaching Ontológico y Mentoría Ejecutiva",
    description:
      "20+ años transformando líderes y organizaciones con coaching ontológico. Mentoría especializada para mujeres ejecutivas en Argentina y LATAM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevare Consulting MG",
    description: "20+ años transformando líderes con coaching ontológico en LATAM.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

import FloatingWidgets from "./components/FloatingWidgets";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Elevare Consulting MG",
              description:
                "Consultoría de coaching ontológico empresarial y mentoría ejecutiva para mujeres con 20+ años de experiencia",
              founder: { "@type": "Person", name: "María Gómez" },
              url: "https://elevareconsultingmg.com",
              sameAs: [
                "https://www.instagram.com/elevareconsultingmg",
                "https://www.linkedin.com/company/elevare-consulting-729079200",
              ],
              areaServed: ["Argentina", "Paraguay", "Uruguay", "Chile"],
              serviceType: [
                "Executive Coaching",
                "Business Consulting",
                "Leadership Development",
                "Women Executive Mentoring",
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <FloatingWidgets />
      </body>
    </html>
  );
}
