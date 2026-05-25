import { createClient } from '@/lib/supabase/server'
import styles from './leads.module.css'

export default async function LeadsPage() {
  const supabase = await createClient()

  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className={styles.errorBox}>
        <p>Error al cargar los contactos.</p>
        <p>Asegurate de haber creado las tablas en Supabase.</p>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.mainHeader}>
        <h1>CRM de Contactos</h1>
        <p className={styles.subtitle}>
          Total: {leads?.length || 0} contacto{leads?.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Mensaje</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {(!leads || leads.length === 0) ? (
              <tr>
                <td colSpan={5} className={styles.emptyTd}>
                  Aún no tenés contactos.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id}>
                  <td className={styles.date}>
                    {new Date(lead.created_at).toLocaleDateString('es-AR')}
                  </td>
                  <td style={{ fontWeight: 600 }}>
                    {lead.nombre}
                  </td>
                  <td>
                    <a href={`mailto:${lead.email}`} className={styles.emailLink}>
                      {lead.email}
                    </a>
                  </td>
                  <td style={{ maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {lead.mensaje || '—'}
                  </td>
                  <td>
                    <span className={styles.motivoBadge}>
                      {lead.status || 'nuevo'}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
