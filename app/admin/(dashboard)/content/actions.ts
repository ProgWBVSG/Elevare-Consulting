'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function updateContent(formData: FormData) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return { error: 'No autorizado' }
  }

  const entries = Array.from(formData.entries())
  
  for (const [key, value] of entries) {
    // Ignorar variables internas de Next.js y variables auxiliares
    if (key.startsWith('$ACTION_ID_')) continue
    if (key.endsWith('_current')) continue

    let textValueToSave = ''

    // Manejo de Imágenes (Archivos)
    if (value instanceof File && value.size > 0) {
      const fileExt = value.name.split('.').pop()
      const fileName = `${key}-${Date.now()}.${fileExt}`

      // Subir a Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('public-images')
        .upload(fileName, value, {
          cacheControl: '3600',
          upsert: true
        })

      if (uploadError) {
        console.error('Upload Error:', uploadError)
        return { error: `Error al subir imagen: ${key}` }
      }

      // Obtener URL pública
      const { data: { publicUrl } } = supabase.storage
        .from('public-images')
        .getPublicUrl(fileName)

      textValueToSave = publicUrl
    } else if (typeof value === 'string') {
      textValueToSave = value
    } else {
      // Es un archivo vacío (el usuario no subió nada nuevo)
      continue
    }

    // Guardar en la tabla site_content
    const { error } = await supabase
      .from('site_content')
      .upsert(
        { 
          section_key: key, 
          text_value: textValueToSave, 
          updated_at: new Date().toISOString() 
        },
        { onConflict: 'section_key' }
      )
      
    if (error) {
      console.error('Error updating content:', error)
      return { error: `Error al actualizar: ${key}` }
    }
  }

  // Revalidate so the whole site reflects the changes
  revalidatePath('/', 'layout')
  
  return { success: true }
}
