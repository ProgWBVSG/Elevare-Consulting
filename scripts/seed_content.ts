import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // fallback to anon if service not available

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase credentials")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const initialContent = [
  // HERO
  { section_key: 'hero_badge', text_value: 'Consultora de Negocios · Management & Desarrollo Organizacional' },
  { section_key: 'hero_title_main', text_value: 'Potenciá tu Empresa' },
  { section_key: 'hero_title_sub', text_value: 'con Management Estratégico' },
  { section_key: 'hero_subtitle', text_value: 'Consultora especializada en management, desarrollo organizacional y estructuración financiera para PYMEs. Diagnosticamos cultura, clima, procesos y liderazgo para convertirlos en ventajas competitivas concretas.' },
  
  // PAIN POINTS INTRO
  { section_key: 'pain_intro_badge', text_value: '¿Te identificás con esto?' },
  { section_key: 'pain_intro_title', text_value: '¿Tu empresa o tu gestión no está dando los resultados que esperabas?' },
  { section_key: 'pain_intro_desc', text_value: 'Trabajamos con dos tipos de desafíos — pero con la misma raíz: la necesidad de management profesional, estructura clara y liderazgo efectivo.' },

  // PYMES PAIN POINTS
  { section_key: 'pain_pyme_title', text_value: 'Para PYMEs que necesitan estructura' },
  { section_key: 'pain_pyme_1_title', text_value: 'Tu equipo gerencial no lidera como esperabas' },
  { section_key: 'pain_pyme_1_desc', text_value: 'Invirtieron en capacitaciones, pero los mandos medios siguen sin tomar decisiones autónomas ni asumir accountability.' },
  { section_key: 'pain_pyme_2_title', text_value: 'Alta rotación y clima laboral deteriorado' },
  { section_key: 'pain_pyme_2_desc', text_value: 'El clima es tenso, personas valiosas renuncian y cada día es apagar un incendio. Falta diagnóstico real.' },
  
  // LIDERES PAIN POINTS
  { section_key: 'pain_lider_title', text_value: 'Para líderes que necesitan acompañamiento' },
  { section_key: 'pain_lider_1_title', text_value: 'Sentís que liderás en piloto automático' },
  { section_key: 'pain_lider_1_desc', text_value: 'Cumplís con el rol, pero sabés que podrías tener más impacto. Te falta una mirada externa estratégica.' },
  { section_key: 'pain_lider_2_title', text_value: 'No lográs que tu equipo funcione sin vos' },
  { section_key: 'pain_lider_2_desc', text_value: 'Terminás haciendo todo porque es más rápido que delegar. Tu equipo no tiene autonomía real.' },

  // SERVICES INTRO
  { section_key: 'services_intro_badge', text_value: 'Nuestros Servicios' },
  { section_key: 'services_intro_title', text_value: 'Cómo transformamos organizaciones y líderes' },

  // WHY ELEVARE
  { section_key: 'why_intro_badge', text_value: '¿Por qué Elevare?' },
  { section_key: 'why_intro_title', text_value: 'Líderes más efectivos. Equipos más rentables.' },
  { section_key: 'why_intro_desc', text_value: 'Mientras otros facilitan talleres, nosotros diagnosticamos, diseñamos e implementamos hasta ver el cambio real. Management concreto, ejecución directa, resultados medibles.' },

  // CTA FINAL
  { section_key: 'cta_intro_badge', text_value: 'Siguiente Paso' },
  { section_key: 'cta_title', text_value: '¿Listo para profesionalizar la gestión de tu empresa?' },
  { section_key: 'cta_desc', text_value: 'Agendá una sesión exploratoria gratuita de 30 minutos. Sin compromiso. Conversamos sobre tus desafíos específicos y evaluamos juntos cómo nuestra consultoría puede transformar tu organización.' },
  
  // CONTACT EMAIL (from old data)
  { section_key: 'contact_email', text_value: 'hola@elevareconsulting.com' }
]

async function seed() {
  console.log("Seeding content...")
  
  for (const item of initialContent) {
    // Upsert para no duplicar
    const { error } = await supabase
      .from('site_content')
      .upsert(
        { section_key: item.section_key, text_value: item.text_value, updated_at: new Date().toISOString() },
        { onConflict: 'section_key' }
      )
    
    if (error) {
      console.error(`Error inserting ${item.section_key}:`, error.message)
    } else {
      console.log(`✓ Inserted ${item.section_key}`)
    }
  }

  console.log("Seeding completed!")
}

seed()
