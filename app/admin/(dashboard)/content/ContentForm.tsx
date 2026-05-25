'use client'

import { useTransition, useState } from 'react'
import { updateContent } from './actions'
import { Save } from 'lucide-react'

type ContentItem = {
  id: string
  section_key: string
  text_value: string
  updated_at: string
}

export default function ContentForm({ initialData }: { initialData: ContentItem[] }) {
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(null)
    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await updateContent(formData)
      if (result.error) {
        setMessage({ type: 'error', text: result.error })
      } else {
        setMessage({ type: 'success', text: 'Cambios guardados con éxito.' })
        setTimeout(() => setMessage(null), 3000)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6">
        {initialData.map((item) => (
          <div key={item.id} className="space-y-2">
            <label htmlFor={item.section_key} className="block text-sm font-medium text-gray-700 uppercase tracking-wider">
              {item.section_key.replace(/_/g, ' ')}
            </label>
            {item.text_value.length > 100 || item.section_key.includes('subtitle') ? (
              <textarea
                id={item.section_key}
                name={item.section_key}
                defaultValue={item.text_value}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
              />
            ) : (
              <input
                type="text"
                id={item.section_key}
                name={item.section_key}
                defaultValue={item.text_value}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
              />
            )}
          </div>
        ))}
      </div>

      {message && (
        <div className={`p-4 rounded-md text-sm ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {message.text}
        </div>
      )}

      <div className="pt-4 border-t border-gray-100 flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 transition-colors"
        >
          <Save className="w-4 h-4" />
          {isPending ? 'Guardando...' : 'Guardar Cambios'}
        </button>
      </div>
    </form>
  )
}
