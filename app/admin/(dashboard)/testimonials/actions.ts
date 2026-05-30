'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function getTestimonials() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }

  return data
}

export async function createTestimonial(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('No autorizado')
  }

  const name = formData.get('name') as string
  const role = formData.get('role') as string
  const company = formData.get('company') as string
  const text = formData.get('text') as string
  const highlight = formData.get('highlight') as string
  const type = formData.get('type') as string
  const imageUrl = formData.get('image_url') as string
  const videoUrl = formData.get('video_url') as string

  if (!name || !text) {
    throw new Error('Nombre y Testimonio son requeridos')
  }

  const { error } = await supabase
    .from('testimonials')
    .insert([{
      name,
      role,
      company,
      text,
      highlight,
      type,
      image_url: imageUrl || null,
      video_url: videoUrl || null,
      is_active: true
    }])

  if (error) {
    console.error('Error creating testimonial:', error)
    throw new Error('Error al crear el testimonio')
  }

  revalidatePath('/admin/testimonials')
  revalidatePath('/testimonios')
  revalidatePath('/')
  redirect('/admin/testimonials')
}

export async function updateTestimonial(id: string, formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('No autorizado')
  }

  const name = formData.get('name') as string
  const role = formData.get('role') as string
  const company = formData.get('company') as string
  const text = formData.get('text') as string
  const highlight = formData.get('highlight') as string
  const type = formData.get('type') as string
  const imageUrl = formData.get('image_url') as string
  const videoUrl = formData.get('video_url') as string
  const isActive = formData.get('is_active') === 'true'

  if (!name || !text) {
    throw new Error('Nombre y Testimonio son requeridos')
  }

  const { error } = await supabase
    .from('testimonials')
    .update({
      name,
      role,
      company,
      text,
      highlight,
      type,
      image_url: imageUrl || null,
      video_url: videoUrl || null,
      is_active: isActive
    })
    .eq('id', id)

  if (error) {
    console.error('Error updating testimonial:', error)
    throw new Error('Error al actualizar el testimonio')
  }

  revalidatePath('/admin/testimonials')
  revalidatePath('/testimonios')
  revalidatePath('/')
  redirect('/admin/testimonials')
}

export async function deleteTestimonial(id: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('No autorizado')
  }

  const { error } = await supabase
    .from('testimonials')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting testimonial:', error)
    throw new Error('Error al eliminar el testimonio')
  }

  revalidatePath('/admin/testimonials')
  revalidatePath('/testimonios')
  revalidatePath('/')
  redirect('/admin/testimonials')
}
