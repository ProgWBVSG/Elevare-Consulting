import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET() {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Falta configurar la API KEY de Resend en el servidor.' }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

    const { data, error } = await resend.emails.send({
      from: `Elevare Test <${fromEmail}>`,
      to: ['agente.ai.test@elevareconsultingmg.com'],
      subject: 'Prueba de Campaña Exitosa',
      html: '<p>Este es un mensaje de prueba para verificar que el envío de correos funciona correctamente desde el servidor de Vercel.</p>'
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
