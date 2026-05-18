import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
    title: "Términos y Condiciones | Elevare Consulting MG",
    description: "Términos y condiciones de uso de los servicios de Elevare Consulting MG.",
};

export default function TerminosPage() {
    return (
        <>
            <Header />
            <main>
                <div className="container" style={{ padding: "var(--space-20) 0", maxWidth: "800px", margin: "0 auto" }}>
                    <h1 style={{ fontSize: "var(--text-4xl)", marginBottom: "var(--space-8)", fontFamily: "var(--font-heading)" }}>
                        Términos y Condiciones
                    </h1>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", color: "var(--color-gray-700)", lineHeight: "1.8" }}>
                        <p>Última actualización: {new Date().toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}</p>

                        <section>
                            <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--color-dark)", marginBottom: "var(--space-3)" }}>1. Aceptación de los Términos</h2>
                            <p>Al acceder y utilizar el sitio web de Elevare Consulting MG (en adelante, "la Empresa"), usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de los términos, no podrá acceder al servicio.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--color-dark)", marginBottom: "var(--space-3)" }}>2. Servicios de Consultoría y Mentoría</h2>
                            <p>Elevare Consulting MG proporciona servicios de consultoría organizacional, coaching para empresas y mentoría para líderes. Toda la información proporcionada a través de sesiones exploratorias, programas de mentoría o comunicaciones directas constituye asesoramiento profesional basado en la experiencia, pero los resultados específicos dependen de la implementación y contexto del cliente. La Empresa no garantiza resultados financieros específicos.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--color-dark)", marginBottom: "var(--space-3)" }}>3. Propiedad Intelectual</h2>
                            <p>Todo el contenido presente en este sitio, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes y material descargable, es propiedad exclusiva de Elevare Consulting MG o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual e industrial aplicables.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--color-dark)", marginBottom: "var(--space-3)" }}>4. Confidencialidad</h2>
                            <p>La Empresa se compromete a mantener en estricta confidencialidad toda la información sensible de negocios compartida por los clientes durante las sesiones de consultoría y mentoría, no divulgándola a terceros sin consentimiento previo, salvo requerimiento legal.</p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: "var(--text-2xl)", color: "var(--color-dark)", marginBottom: "var(--space-3)" }}>5. Modificaciones de los Términos</h2>
                            <p>Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento. El uso continuado del sitio web después de cualquier cambio constituye su aceptación de los nuevos Términos.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
