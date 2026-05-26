'use server'

import { createClient } from '@/lib/supabase/server'
import { Resend } from 'resend'

export async function sendCampaign(formData: FormData) {
  try {
    const audienceType = formData.get('audienceType') as string
    const specificEmails = formData.get('specificEmails') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string
    const attachmentFile = formData.get('attachment') as File | null

    if (!subject || !message) {
      return { error: 'El asunto y el mensaje son obligatorios.' }
    }

    if (!process.env.RESEND_API_KEY) {
      return { error: 'Falta configurar la API KEY de Resend en el servidor.' }
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return { error: 'No autorizado.' }
    }

    let emailsToTarget: string[] = []

    if (audienceType === 'specific' && specificEmails) {
      emailsToTarget = specificEmails.split(',').map(e => e.trim()).filter(Boolean)
    } else {
      // 1. Obtener todos los leads
      const { data: leads, error: dbError } = await supabase
        .from('leads')
        .select('email')
        .not('email', 'is', null)

      if (dbError || !leads) {
        console.error('Error fetching leads:', dbError)
        return { error: 'No se pudieron obtener los contactos del CRM.' }
      }
      emailsToTarget = leads.map(lead => lead.email).filter(Boolean)
    }

    if (emailsToTarget.length === 0) {
      return { error: 'No hay contactos válidos seleccionados para enviar la campaña.' }
    }

    // 2. Preparar el adjunto si existe
    let attachments = undefined
    if (attachmentFile && attachmentFile.size > 0) {
      // Validar tamaño (máx 5MB)
      if (attachmentFile.size > 5 * 1024 * 1024) {
        return { error: 'El archivo adjunto no puede superar los 5MB.' }
      }

      const arrayBuffer = await attachmentFile.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      attachments = [
        {
          filename: attachmentFile.name,
          content: buffer
        }
      ]
    }

    // 3. Enviar con Resend
    const resend = new Resend(process.env.RESEND_API_KEY)
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
    const htmlMessage = message.replace(/\n/g, '<br />')

    const { data, error: sendError } = await resend.emails.send({
      from: `Elevare Consulting <${fromEmail}>`,
      to: ['maria@elevareconsulting.com'], // Se envía a admin
      bcc: emailsToTarget, // Copia Oculta a leads
      subject: subject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          ${htmlMessage}
          <br/><br/>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #999;">
            Recibes este email porque contactaste a Elevare Consulting.<br/>
            Si no deseas recibir más correos, por favor responde indicándolo.
          </p>
        </div>
      `,
      attachments: attachments
    })

    if (sendError) {
      console.error('Resend error:', sendError)
      return { error: `Error de envío: ${sendError.message}` }
    }

    // 4. Guardar en historial de campañas (fallback silencioso si la tabla no existe)
    try {
      await supabase.from('campaign_history').insert([{
        subject,
        audience_type: audienceType === 'specific' ? 'Específico' : 'Todos',
        recipients_count: emailsToTarget.length,
        has_attachment: !!(attachmentFile && attachmentFile.size > 0)
      }])
    } catch (histErr) {
      console.warn('No se pudo guardar en campaign_history:', histErr)
    }

    return { success: true, count: emailsToTarget.length }

  } catch (err: any) {
    console.error('Error in sendCampaign:', err)
    return { error: err.message || 'Ocurrió un error inesperado al enviar la campaña.' }
  }
}
