import { createClient } from '@/lib/supabase/server'
import CampaignForm from './CampaignForm'

export default async function CampaignsPage() {
  const supabase = await createClient()

  // Solo necesitamos saber cuántos leads válidos hay
  const { count, error } = await supabase
    .from('leads')
    .select('*', { count: 'exact', head: true })
    .not('email', 'is', null)

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1A2E]">Campañas Automáticas</h1>
          <p className="text-[#6b7280] text-sm mt-1">
            Envía correos masivos a todos los prospectos registrados en tu CRM.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-6 md:p-8">
        {error ? (
          <div className="text-red-500 p-4 bg-red-50 rounded-md">Error conectando con el CRM.</div>
        ) : (
          <CampaignForm totalLeads={count || 0} />
        )}
      </div>
    </div>
  )
}
