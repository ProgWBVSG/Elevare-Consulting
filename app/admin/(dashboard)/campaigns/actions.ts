'use server'

import { createClient } from '@/lib/supabase/server'
import { Resend } from 'resend'

export async function sendCampaign(formData: FormData) {
  try {
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

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

    // 1. Obtener todos los leads
    const { data: leads, error: dbError } = await supabase
      .from('leads')
      .select('email')
      .not('email', 'is', null)

    if (dbError || !leads) {
      console.error('Error fetching leads:', dbError)
      return { error: 'No se pudieron obtener los contactos del CRM.' }
    }

    const emails = leads.map(lead => lead.email).filter(Boolean)

    if (emails.length === 0) {
      return { error: 'No hay contactos en el CRM con correo electrónico.' }
    }

    // 2. Enviar con Resend (usamos BCC o enviamos uno por uno en Promise.all para no exponer emails entre ellos)
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Nota: El plan gratis de Resend limita a 100 emails por día y 100 por petición.
    // Para simplificar, enviamos todo en BCC (Copia Oculta). 
    // Lo ideal es tener un dominio verificado (ej. hola@tudominio.com). Por defecto usa onboarding@resend.dev
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

    // Formatear mensaje conservando saltos de línea
    const htmlMessage = message.replace(/\n/g, '<br />')

    const { data, error: sendError } = await resend.emails.send({
      from: `Elevare Consulting <${fromEmail}>`,
      to: ['maria@elevareconsulting.com'], // Se envía a admin
      bcc: emails, // Se envía oculto a todos los leads
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
    })

    if (sendError) {
      console.error('Resend error:', sendError)
      return { error: `Error de envío: ${sendError.message}` }
    }

    return { success: true, count: emails.length }

  } catch (err: any) {
    console.error('Error in sendCampaign:', err)
    return { error: err.message || 'Ocurrió un error inesperado al enviar la campaña.' }
  }
}
