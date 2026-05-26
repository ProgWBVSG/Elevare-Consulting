import { createClient } from '@/lib/supabase/server'
import AnalyticsDashboard from './AnalyticsDashboard'

export default async function AnalyticsPage() {
  const supabase = await createClient()

  // Cargar URL guardada desde site_content
  let savedUrl: string | null = null
  try {
    const { data } = await supabase
      .from('site_content')
      .select('text_value')
      .eq('section_key', 'analytics_looker_url')
      .single()

    if (data?.text_value) {
      savedUrl = data.text_value
    }
  } catch {
    // Si no existe, dejamos null
  }

  return <AnalyticsDashboard savedUrl={savedUrl} />
}
