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
    default: "Elevare Consulting | Consultoría Organizacional basada en Ciencias del Comportamiento",
    template: "%s | Elevare Consulting",
  },
  description:
    "Consultora de negocios en Argentina y LATAM. Desarrollo organizacional, academia de retail, estructuración de financiamiento y tecnología, con diagnóstico basado en ciencias del comportamiento. Solicitá tu diagnóstico.",
  keywords: [
    "consultora de negocios",
    "consultoría organizacional",
    "desarrollo organizacional",
    "academia de retail",
    "estructuración de financiamiento",
    "tecnología para empresas",
    "ciencias del comportamiento organizacional",
    "diagnóstico organizacional",
    "consultoría de negocios Argentina",
    "consultoría empresarial LATAM",
    "gestión del cambio",
    "Elevare Consulting",
  ],
  authors: [{ name: "Elevare Consulting", url: "https://elevareconsultingmg.com" }],
  creator: "Elevare Consulting MG",
  publisher: "Elevare Consulting MG",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://elevareconsultingmg.com",
    siteName: "Elevare Consulting",
    title: "Elevare Consulting | Consultoría Organizacional basada en Ciencias del Comportamiento",
    description:
      "Diagnóstico, intervención y medición de resultados basados en ciencias del comportamiento. Desarrollo organizacional, retail, financiamiento y tecnología para empresas que quieren crecer.",
    images: [
      {
        url: "/og-elevare.png",
        width: 1200,
        height: 630,
        alt: "Elevare Consulting — Consultora de negocios: desarrollo organizacional, retail, financiamiento y tecnología",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevare Consulting | Consultoría Organizacional basada en Ciencias del Comportamiento",
    description:
      "Consultora de negocios: desarrollo organizacional, retail, financiamiento y tecnología. Diagnóstico con base científica. Solicitá tu diagnóstico.",
    images: ["/og-elevare.png"],
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
import { Analytics } from "@vercel/analytics/react"
import { GoogleTagManager } from "@next/third-parties/google";
import { createClient } from '@/lib/supabase/server';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data } = await supabase.from('site_content').select('section_key, text_value');
  const content = new Map();
  data?.forEach(item => content.set(item.section_key, item.text_value));

  const waPhone = content.get('contact_whatsapp') || "5491125464650";
  const waMsg = content.get('contact_whatsapp_text') || "Hola, estoy visitando el sitio de Elevare y me gustaría hacer una consulta.";

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
                  name: "Elevare Consulting",
                  alternateName: "Elevare Consulting MG",
                  description:
                    "Consultora de negocios que trabaja cuatro áreas integradas: desarrollo organizacional, academia de retail, estructuración de financiamiento y tecnología. El diagnóstico y la medición de resultados se apoyan en ciencias del comportamiento. Argentina y LATAM.",
                  url: "https://elevareconsultingmg.com",
                  logo: "https://elevareconsultingmg.com/logo.png",
                  image: "https://elevareconsultingmg.com/logo.png",
                  founder: {
                    "@type": "Person",
                    name: "María Gómez",
                    jobTitle: "Fundadora & Consultora en Desarrollo Organizacional",
                    url: "https://elevareconsultingmg.com",
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
                    "Desarrollo Organizacional",
                    "Academia de Retail",
                    "Estructuración de Financiamiento",
                    "Tecnología",
                    "Diagnóstico Organizacional",
                  ],
                  knowsAbout: [
                    "Desarrollo organizacional",
                    "Ciencias del comportamiento aplicadas a la gestión",
                    "Estructuración de financiamiento y capital",
                    "Gestión de retail y punto de venta",
                    "Tecnología y digitalización de procesos",
                    "Cultura organizacional y gestión del cambio",
                    "Indicadores de gestión (KPIs)",
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
                  description: "Consultoría para Líderes y Organizaciones que Buscan Trascender en Argentina y LATAM",
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
        {children}
        <FloatingWidgets waPhone={waPhone} waMsg={waMsg} />
        <Analytics />
      </body>
    </html>
  );
}
