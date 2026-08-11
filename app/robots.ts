import type { MetadataRoute } from "next";

// Crawlers de asistentes de IA. Se listan de forma explícita para que puedan
// leer y citar el sitio cuando alguien pregunta por consultoría de negocios,
// en lugar de depender del comodín "*".
const aiCrawlers = [
  "GPTBot",            // ChatGPT / OpenAI
  "OAI-SearchBot",     // ChatGPT Search
  "ChatGPT-User",      // navegación de ChatGPT a pedido del usuario
  "ClaudeBot",         // Claude / Anthropic
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",     // Perplexity
  "Perplexity-User",
  "Google-Extended",   // Gemini / Google AI
  "Applebot-Extended", // Apple Intelligence
  "meta-externalagent",// Meta AI
  "Bingbot",           // Bing / Copilot
  "DuckAssistBot",
  "cohere-ai",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/admin/"],
      })),
    ],
    sitemap: "https://elevareconsultingmg.com/sitemap.xml",
    host: "https://elevareconsultingmg.com",
  };
}
