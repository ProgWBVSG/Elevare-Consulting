'use client'

import { useTransition, useState } from 'react'
import { sendCampaign } from './actions'
import { Send, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function CampaignForm({ totalLeads }: { totalLeads: number }) {
  const [isPending, startTransition] = useTransition()
  const [status, setStatus] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus(null)
    const formData = new FormData(e.currentTarget)

    if (!window.confirm(`¿Estás segura de enviar este correo a ${totalLeads} contactos? Esta acción no se puede deshacer.`)) {
      return
    }

    startTransition(async () => {
      const result = await sendCampaign(formData)
      if (result.error) {
        setStatus({ type: 'error', text: result.error })
      } else {
        setStatus({ type: 'success', text: `¡Campaña enviada con éxito a ${result.count} contactos!` })
        // Clear form
        const form = e.target as HTMLFormElement
        form.reset()
      }
    })
  }

  if (totalLeads === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-yellow-800 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-yellow-900">No hay contactos</h3>
          <p className="mt-1 text-sm">Aún no tienes leads registrados en tu CRM. Debes tener al menos un contacto para poder enviar campañas.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 text-sm text-blue-800">
        <strong>Audiencia:</strong> Esta campaña se enviará a todos los <strong>{totalLeads}</strong> contactos en tu CRM mediante copia oculta (BCC).
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">
            Asunto del correo
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F9F] focus:border-[#2C5F9F] transition-all"
            placeholder="Ej: Invitación a nueva Masterclass de Liderazgo"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">
            Cuerpo del Mensaje
          </label>
          <p className="text-xs text-gray-500 mb-2">Puedes usar saltos de línea normales. Se convertirán en formato HTML automáticamente.</p>
          <textarea
            id="message"
            name="message"
            required
            rows={12}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F9F] focus:border-[#2C5F9F] transition-all resize-y"
            placeholder="Hola, quería compartirles una novedad..."
          />
        </div>
      </div>

      {status && (
        <div className={`p-4 rounded-lg flex items-start gap-3 ${status.type === 'success' ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
          {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
          <span className="font-medium text-sm mt-0.5">{status.text}</span>
        </div>
      )}

      <div className="pt-4 border-t border-gray-100 flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 px-6 py-3 bg-[#D65A20] text-white rounded-lg font-bold hover:bg-[#B54512] transition-colors shadow-lg shadow-orange-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          {isPending ? 'Enviando Campaña...' : 'Enviar Campaña Ahora'}
        </button>
      </div>
    </form>
  )
}
