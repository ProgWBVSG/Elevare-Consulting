import { supabaseAdmin } from "@/lib/supabase-admin";
import styles from "./leads.module.css";

type Lead = {
    id: string;
    nombre: string;
    email: string;
    telefono: string | null;
    empresa: string | null;
    motivo: string | null;
    mensaje: string | null;
    created_at: string;
};

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
    const { data: leads, error } = await supabaseAdmin
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <div className={styles.errorBox}>
                <h2>Error al cargar los leads</h2>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div className={styles.layout}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h2>Leads</h2>
                    <span className={styles.badge}>{leads?.length ?? 0}</span>
                </div>
                <ul className={styles.leadList}>
                    {leads && leads.length > 0 ? (
                        leads.map((lead: Lead) => (
                            <li key={lead.id} className={styles.leadItem}>
                                <div className={styles.leadAvatar}>
                                    {lead.nombre.charAt(0).toUpperCase()}
                                </div>
                                <div className={styles.leadInfo}>
                                    <span className={styles.leadName}>{lead.nombre}</span>
                                    <span className={styles.leadEmail}>{lead.email}</span>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className={styles.empty}>Aún no hay leads 📭</li>
                    )}
                </ul>
            </aside>

            {/* Main panel */}
            <main className={styles.main}>
                <div className={styles.mainHeader}>
                    <h1>Panel de Leads — Elevare Consulting</h1>
                    <p className={styles.subtitle}>Solicitudes recibidas desde el formulario de contacto</p>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                                <th>Empresa</th>
                                <th>Motivo</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads && leads.length > 0 ? (
                                leads.map((lead: Lead) => (
                                    <tr key={lead.id}>
                                        <td><strong>{lead.nombre}</strong></td>
                                        <td>
                                            <a href={`mailto:${lead.email}`} className={styles.emailLink}>
                                                {lead.email}
                                            </a>
                                        </td>
                                        <td>{lead.telefono ?? "—"}</td>
                                        <td>{lead.empresa ?? "—"}</td>
                                        <td>
                                            {lead.motivo ? (
                                                <span className={styles.motivoBadge}>{lead.motivo}</span>
                                            ) : "—"}
                                        </td>
                                        <td className={styles.date}>
                                            {new Date(lead.created_at).toLocaleDateString("es-AR", {
                                                day: "2-digit", month: "short", year: "numeric"
                                            })}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className={styles.emptyTd}>
                                        No hay leads todavía. El formulario guardará los datos aquí automáticamente.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
