import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://elevareconsultingmg.com"),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  title: {
    default: "Elevare Consulting MG | Coaching Ontológico y Mentoría Ejecutiva en Argentina",
    template: "%s | Elevare Consulting MG",
  },
  description:
    "Firma de coaching ontológico y desarrollo organizacional con 20+ años de experiencia. Mentoría especializada para mujeres ejecutivas. Consultoría de liderazgo para PYMEs en Argentina, Paraguay, Chile y EEUU. Sesión exploratoria gratuita.",
  keywords: [
    "coaching ontológico",
    "coaching ontológico empresarial",
    "coaching ontológico Argentina",
    "consultoría liderazgo",
    "desarrollo organizacional",
    "desarrollo organizacional PYMEs",
    "mentoría mujeres ejecutivas",
    "mentoría ejecutiva LATAM",
    "coaching empresarial Argentina",
    "coaching ejecutivo Buenos Aires",
    "consultoría gestión empresarial",
    "liderazgo femenino coaching",
    "síndrome del impostor mujeres",
    "María Gómez coach",
    "Elevare Consulting",
    "inteligencia relacional",
  ],
  authors: [{ name: "María Gómez", url: "https://elevareconsultingmg.com/sobre-maria" }],
  creator: "Elevare Consulting MG",
  publisher: "Elevare Consulting MG",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://elevareconsultingmg.com",
    siteName: "Elevare Consulting MG",
    title: "Elevare Consulting MG | Coaching Ontológico y Desarrollo Organizacional",
    description:
      "Transformamos líderes y organizaciones con coaching ontológico. Mentoría para mujeres ejecutivas, consultoría de procesos y desarrollo de liderazgo en Argentina y LATAM. 20+ años de experiencia.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Elevare Consulting MG — Coaching Ontológico y Mentoría Ejecutiva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevare Consulting MG | Coaching Ontológico y Mentoría Ejecutiva",
    description:
      "Firma de coaching ontológico con 20+ años transformando líderes en Argentina y LATAM. Mentoría para mujeres ejecutivas. Sesión exploratoria gratuita.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://elevareconsultingmg.com",
  },
  verification: {
    google: "-WPEX6SAzfnaY0T7IUDdZMgyW-z3QNF2iYs2qgZZ0qo",
  },
};

import FloatingWidgets from "./components/FloatingWidgets";
import LoadingScreen from "./components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react"
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <head>
        <meta name="google-site-verification" content="-WPEX6SAzfnaY0T7IUDdZMgyW-z3QNF2iYs2qgZZ0qo" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://elevareconsultingmg.com/#organization",
                  name: "Elevare Consulting MG",
                  alternateName: "Elevare Consulting",
                  description:
                    "Firma de coaching ontológico y desarrollo organizacional con 20+ años de experiencia. Consultoría de liderazgo para PYMEs y mentoría ejecutiva para mujeres en Argentina y LATAM.",
                  url: "https://elevareconsultingmg.com",
                  logo: "https://elevareconsultingmg.com/logo.png",
                  image: "https://elevareconsultingmg.com/logo.png",
                  founder: {
                    "@type": "Person",
                    name: "María Gómez",
                    jobTitle: "Coach Ejecutiva & Consultora en Desarrollo de Líderes",
                    url: "https://elevareconsultingmg.com/sobre-maria",
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Buenos Aires",
                    addressRegion: "Buenos Aires",
                    addressCountry: "AR",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -34.6037,
                    longitude: -58.3816,
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    email: "info@elevareconsultingmg.com",
                    availableLanguage: ["es", "en"],
                  },
                  sameAs: [
                    "https://www.instagram.com/elevareconsultingmg",
                    "https://www.linkedin.com/in/elevare-consulting-729079200?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                  ],
                  areaServed: [
                    { "@type": "Country", name: "Argentina" },
                    { "@type": "Country", name: "Paraguay" },
                    { "@type": "Country", name: "Chile" },
                    { "@type": "Country", name: "United States" },
                  ],
                  serviceType: [
                    "Coaching Ontológico",
                    "Coaching Ejecutivo",
                    "Consultoría de Desarrollo Organizacional",
                    "Mentoría Ejecutiva para Mujeres",
                    "Consultoría de Liderazgo",
                    "Diagnóstico Organizacional",
                  ],
                  knowsAbout: [
                    "Coaching ontológico",
                    "Inteligencia relacional",
                    "Desarrollo organizacional",
                    "Liderazgo femenino",
                    "Gestión de equipos",
                    "Cultura organizacional",
                  ],
                  priceRange: "$$",
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "09:00",
                      closes: "18:00",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://elevareconsultingmg.com/#website",
                  url: "https://elevareconsultingmg.com",
                  name: "Elevare Consulting MG",
                  description: "Coaching Ontológico y Desarrollo Organizacional en Argentina y LATAM",
                  publisher: {
                    "@id": "https://elevareconsultingmg.com/#organization",
                  },
                  inLanguage: "es-AR",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <GoogleTagManager gtmId="GTM-WS8LKHCH" />
        <LoadingScreen />
        {children}
        <FloatingWidgets />
        <Analytics />
      </body>
    </html>
  );
}
