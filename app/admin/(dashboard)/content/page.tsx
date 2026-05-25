import { createClient } from '@/lib/supabase/server'
import ContentForm from './ContentForm'

export default async function ContentPage() {
  const supabase = await createClient()

  const { data: content, error } = await supabase
    .from('site_content')
    .select('*')
    .order('section_key', { ascending: true })

  if (error) {
    return (
      <div className="p-6 text-red-500 text-center bg-white rounded-lg shadow">
        Error al cargar el contenido de la base de datos.
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Gestor de Contenidos</h1>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden p-6">
        <p className="text-sm text-gray-500 mb-6">
          Los cambios que guardes aquí se reflejarán instantáneamente en la página pública de Elevare Consulting.
        </p>

        <ContentForm initialData={content || []} />
      </div>
    </div>
  )
}
