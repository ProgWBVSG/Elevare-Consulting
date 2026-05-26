'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function updateLeadTags(leadId: string, tags: string[]) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { error: 'No autorizado' }
  }

  const { error } = await supabase
    .from('leads')
    .update({ etiquetas: tags })
    .eq('id', leadId)

  if (error) {
    console.error('Error updating tags:', error)
    return { error: 'Error al actualizar las etiquetas. ¿Ejecutaste el script SQL en Supabase para agregar la columna?' }
  }

  revalidatePath('/admin/leads')
  return { success: true }
}
