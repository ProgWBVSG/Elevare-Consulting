'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function saveLookerUrl(url: string) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { error: 'No autorizado' }
  }

  // Validación básica
  if (!url.includes('lookerstudio.google.com') && !url.includes('datastudio.google.com')) {
    return { error: 'El enlace debe ser de Google Looker Studio o Data Studio' }
  }

  const { error } = await supabase
    .from('site_content')
    .upsert(
      { section_key: 'analytics_looker_url', text_value: url, updated_at: new Date().toISOString() },
      { onConflict: 'section_key' }
    )

  if (error) {
    console.error('Error saving Looker URL:', error)
    return { error: 'Error al guardar el enlace. Verificá la tabla site_content.' }
  }

  revalidatePath('/admin/analytics')
  return { success: true }
}
