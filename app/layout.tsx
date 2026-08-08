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
    "Transformamos organizaciones a través de las ciencias del comportamiento. Estructura de financiamiento, desarrollo de liderazgo, gestión de procesos y diseño organizacional para empresas que buscan crecer. Solicitá tu diagnóstico.",
  keywords: [
    "consultoría organizacional",
    "ciencias del comportamiento organizacional",
    "desarrollo organizacional",
    "desarrollo de liderazgo",
    "gestión de procesos",
    "diseño organizacional",
    "estructura de financiamiento",
    "coaching ejecutivo",
    "consultoría de negocios Argentina",
    "consultoría gestión empresarial",
    "academia de retail",
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
      "Diagnóstico, intervención y resultados de gestión basados en ciencias del comportamiento. Financiamiento, liderazgo, procesos y diseño organizacional para empresas que quieren crecer.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Elevare Consulting — Consultoría organizacional basada en ciencias del comportamiento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevare Consulting | Consultoría Organizacional basada en Ciencias del Comportamiento",
    description:
      "Transformamos organizaciones a través de las ciencias del comportamiento. Financiamiento, liderazgo, procesos y diseño organizacional. Solicitá tu diagnóstico.",
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
                    "Consultoría organizacional basada en ciencias del comportamiento. Estructura de financiamiento, desarrollo de liderazgo, gestión de procesos y diseño organizacional para empresas en Argentina y LATAM.",
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
                    "Consultoría para Líderes",
                    "Coaching Ejecutivo",
                    "Consultoría de Desarrollo Organizacional",
                    "Mentoría Ejecutiva para Mujeres",
                    "Consultoría de Liderazgo",
                    "Diagnóstico Organizacional",
                  ],
                  knowsAbout: [
                    "Consultoría para líderes y organizaciones",
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
