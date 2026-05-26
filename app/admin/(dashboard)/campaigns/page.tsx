import { createClient } from '@/lib/supabase/server'
import CampaignsDashboard from './CampaignsDashboard'

export default async function CampaignsPage() {
  const supabase = await createClient()

  // Obtener leads para el formulario
  const { data: leads } = await supabase
    .from('leads')
    .select('id, nombre, email, status')
    .not('email', 'is', null)
    .order('created_at', { ascending: false })

  // Obtener historial de campañas (fallback a array vacío si la tabla no existe)
  let history: any[] = []
  try {
    const { data, error } = await supabase
      .from('campaign_history')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data) {
      history = data
    }
  } catch {
    // tabla no existe aún, silencio
  }

  return (
    <CampaignsDashboard
      leads={leads || []}
      history={history}
    />
  )
}
