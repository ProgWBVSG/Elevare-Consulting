import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
    title: "Política de Privacidad | Elevare Consulting MG",
    description: "Política de privacidad y protección de datos de Elevare Consulting MG.",
};

export default function PrivacidadPage() {
    return (
        <>
            <Header />
            <main>
                <div className="container" style={{ padding: "var(--space-20) 0", maxWidth: "800px", margin: "0 auto" }}>
                    <h1 style={{ fontSize: "var(--text-4xl)", marginBottom: "var(--space-8)", fontFamily: "var(--font-heading)" }}>
                        Política de Privacidad
                    </h1>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", color: "var(--color-gray-700)", lineHeight: "1.8" }}>
                        <p>Última actualización: {new Date().toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}</p>

                        <section>
                            <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--color-dark)", marginBottom: "var(--space-3)" }}>1. Información que recopilamos</h2>
                            <p>Recopilamos información personal que usted nos proporciona voluntariamente al registrarse en nuestro sitio web, suscribirse a nuestro newsletter, o contactarnos directamente. La información personal recopilada puede incluir nombre, dirección de correo electrónico, número de teléfono y nombre de la empresa.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--color-dark)", marginBottom: "var(--space-3)" }}>2. Uso de la información</h2>
                            <p>Utilizamos la información recopilada para: proveer y mantener nuestros servicios de consultoría, notificarle sobre cambios en nuestros servicios, brindarle soporte, enviarle información de marketing (newsletter) y analizar cómo se utiliza nuestro sitio web para mejorarlo.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--color-dark)", marginBottom: "var(--space-3)" }}>3. Protección de datos</h2>
                            <p>Implementamos medidas de seguridad para mantener la seguridad de su información personal. No vendemos, intercambiamos ni transferimos a terceros su información personal identificable. Esto no incluye a terceros de confianza que nos asisten en la operación de nuestro sitio web o en la conducción de nuestro negocio (como nuestro proveedor de email marketing o base de datos estructurada en Supabase), siempre que dichas partes acuerden mantener esta información confidencial.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--color-dark)", marginBottom: "var(--space-3)" }}>4. Sus derechos</h2>
                            <p>Usted tiene derecho a acceder, corregir, actualizar o solicitar la eliminación de su información personal en cualquier momento. Puede ejercer estos derechos contactándonos a través de info@elevareconsultingmg.com.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--color-dark)", marginBottom: "var(--space-3)" }}>5. Cookies</h2>
                            <p>Nuestro sitio web puede utilizar "cookies" para mejorar la experiencia del usuario. Puede configurar su navegador web para rechazar las cookies, pero esto puede causar que algunas partes del sitio no funcionen correctamente.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
