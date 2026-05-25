import { createClient } from '@/lib/supabase/server'
import CampaignForm from './CampaignForm'

export default async function CampaignsPage() {
  const supabase = await createClient()

  // Obtenemos TODOS los leads para poder segmentar
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .not('email', 'is', null)
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A2E]">Campañas Automáticas</h1>
          <p className="text-[#6b7280] text-sm mt-1">
            Segmenta tu audiencia, añade adjuntos y envía newsletters.
          </p>
        </div>
      </div>

      {error ? (
        <div className="text-red-500 p-4 bg-red-50 rounded-md">Error conectando con el CRM.</div>
      ) : (
        <CampaignForm leads={leads || []} />
      )}
    </div>
  )
}
