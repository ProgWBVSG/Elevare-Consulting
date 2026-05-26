import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, mensaje, tipo } = await request.json()

    if (!nombre || !email) {
      return NextResponse.json({ error: 'Nombre y email son obligatorios' }, { status: 400 })
    }

    // 1. Guardar en Supabase (CRM)
    const supabase = await createClient()
    const { error: dbError } = await supabase
      .from('leads')
      .insert([{ nombre, email, telefono, mensaje, status: 'nuevo', tipo: tipo || 'Contacto' }])

    if (dbError) {
      console.error('Error insertando en Supabase:', dbError)
      return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
    }

    // 2. Enviar email con Resend (Si hay API KEY configurada)
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      // Email a María (Admin)
      await resend.emails.send({
        from: 'Notificaciones <onboarding@resend.dev>', // Cambiar por dominio real (ej. hola@elevareconsulting.com)
        to: ['maria@elevareconsulting.com'], // Cambiar por email de María
        subject: `Nuevo Lead: ${nombre}`,
        html: `
          <h2>Nuevo contacto recibido</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono || '-'}</p>
          <p><strong>Mensaje:</strong> ${mensaje || '-'}</p>
        `
      })

      // Email al Usuario (Confirmación)
      await resend.emails.send({
        from: 'Elevare Consulting <onboarding@resend.dev>', // Cambiar por dominio real
        to: [email],
        subject: 'Recibimos tu solicitud - Elevare Consulting',
        html: `
          <h2>¡Hola ${nombre}!</h2>
          <p>Hemos recibido tus datos correctamente. En breve nos pondremos en contacto contigo para avanzar.</p>
          <p>Saludos,<br>María Gómez - Elevare Consulting</p>
        `
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error en /api/contact:', err)
    return NextResponse.json({ error: 'Error procesando la solicitud' }, { status: 500 })
  }
}
