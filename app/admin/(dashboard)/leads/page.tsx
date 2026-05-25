import { createClient } from '@/lib/supabase/server'

export default async function LeadsPage() {
  const supabase = await createClient()

  // Fetch leads
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">CRM de Contactos</h1>
        <div className="text-sm text-gray-500">
          Total: {leads?.length || 0}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        {error ? (
          <div className="p-6 text-red-500 text-center">
            Error al cargar los contactos. (Asegúrate de haber creado las tablas en Supabase).
          </div>
        ) : leads?.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            Aún no tienes contactos.
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 font-semibold text-sm text-gray-600">Fecha</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Nombre</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Email</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Mensaje</th>
                <th className="p-4 font-semibold text-sm text-gray-600">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leads?.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-sm font-medium text-gray-900">
                    {lead.nombre}
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                      {lead.email}
                    </a>
                  </td>
                  <td className="p-4 text-sm text-gray-600 max-w-xs truncate">
                    {lead.mensaje || '-'}
                  </td>
                  <td className="p-4 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
