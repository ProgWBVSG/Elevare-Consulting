import { createClient } from '@/lib/supabase/server'
import CampaignForm from './CampaignForm'
import styles from './campaigns.module.css'

export default async function CampaignsPage() {
  const supabase = await createClient()

  // Obtenemos TODOS los leads para poder segmentar
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .not('email', 'is', null)
    .order('created_at', { ascending: false })

  return (
    <div className={styles.container}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A1A2E' }}>Campañas de Email</h1>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '0.25rem' }}>
          Segmentá tu audiencia, añadí adjuntos y enviá newsletters a tus contactos.
        </p>
      </div>

      {error ? (
        <div className={styles.messageError} style={{ margin: 0, padding: '1.5rem' }}>
          Error conectando con el CRM. Revisá tu conexión a Supabase.
        </div>
      ) : (
        <CampaignForm leads={leads || []} />
      )}
    </div>
  )
}
