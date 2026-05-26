import { createClient } from '@/lib/supabase/server'
import LeadsDashboard from './LeadsDashboard'
import styles from './leads.module.css'

export default async function LeadsPage() {
  const supabase = await createClient()

  // Fetch all leads including the new 'tipo' and 'etiquetas' columns
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div className={styles.container}>
        <div style={{ background: '#fef2f2', color: '#991b1b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #fecaca' }}>
          <h2 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Error al cargar los contactos.</h2>
          <p>Asegurate de haber ejecutado el script SQL en Supabase para crear o actualizar la tabla.</p>
        </div>
      </div>
    )
  }

  return (
    <LeadsDashboard leads={leads || []} />
  )
}
