'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function updateContent(formData: FormData) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { error: 'No autorizado' }
  }

  // Iterate over form data and update the database
  const entries = Array.from(formData.entries())
  
  for (const [key, value] of entries) {
    if (key.startsWith('$ACTION_ID_')) continue // Ignore Next.js internal action keys

    const { error } = await supabase
      .from('site_content')
      .update({ text_value: value as string, updated_at: new Date().toISOString() })
      .eq('section_key', key)
      
    if (error) {
      console.error('Error updating content:', error)
      return { error: `Error al actualizar: ${key}` }
    }
  }

  // Revalidate the entire site so changes reflect immediately
  revalidatePath('/', 'layout')
  
  return { success: true }
}
