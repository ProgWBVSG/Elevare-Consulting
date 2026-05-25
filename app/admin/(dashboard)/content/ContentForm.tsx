'use client'

import { useTransition, useState } from 'react'
import { updateContent } from './actions'
import { Save } from 'lucide-react'
import styles from './content.module.css'

type ContentItem = {
  id?: string
  section_key: string
  text_value: string
  updated_at?: string
}

// Valores por defecto para sembrar la base de datos si está vacía
const DEFAULT_CONTENT: ContentItem[] = [
  { section_key: 'hero_badge', text_value: 'Consultora de Negocios · Management & Desarrollo Organizacional' },
  { section_key: 'hero_title_main', text_value: 'Potenciá tu Empresa' },
  { section_key: 'hero_title_sub', text_value: 'con Management Estratégico' },
  { section_key: 'hero_subtitle', text_value: 'Consultora especializada en management, desarrollo organizacional y estructuración financiera para PYMEs. Diagnosticamos cultura, clima, procesos y liderazgo para convertirlos en ventajas competitivas concretas.' },
  { section_key: 'pain_intro_badge', text_value: '¿Te identificás con esto?' },
  { section_key: 'pain_intro_title', text_value: '¿Tu empresa o tu gestión no está dando los resultados que esperabas?' },
  { section_key: 'pain_intro_desc', text_value: 'Trabajamos con dos tipos de desafíos — pero con la misma raíz: la necesidad de management profesional, estructura clara y liderazgo efectivo.' },
  { section_key: 'pain_pyme_title', text_value: 'Para PYMEs que necesitan estructura' },
  { section_key: 'pain_pyme_1_title', text_value: 'Tu equipo gerencial no lidera como esperabas' },
  { section_key: 'pain_pyme_1_desc', text_value: 'Invirtieron en capacitaciones, pero los mandos medios siguen sin tomar decisiones autónomas ni asumir accountability.' },
  { section_key: 'pain_lider_title', text_value: 'Para líderes que necesitan acompañamiento' },
  { section_key: 'pain_lider_1_title', text_value: 'Sentís que liderás en piloto automático' },
  { section_key: 'pain_lider_1_desc', text_value: 'Cumplís con el rol, pero sabés que podrías tener más impacto. Te falta una mirada externa estratégica.' },
  { section_key: 'services_intro_badge', text_value: 'Nuestros Servicios' },
  { section_key: 'services_intro_title', text_value: 'Cómo transformamos organizaciones y líderes' },
  { section_key: 'why_intro_badge', text_value: '¿Por qué Elevare?' },
  { section_key: 'why_intro_title', text_value: 'Líderes más efectivos. Equipos más rentables.' },
  { section_key: 'why_intro_desc', text_value: 'Mientras otros facilitan talleres, nosotros diagnosticamos, diseñamos e implementamos hasta ver el cambio real. Management concreto, ejecución directa, resultados medibles.' },
  { section_key: 'cta_intro_badge', text_value: 'Siguiente Paso' },
  { section_key: 'cta_title', text_value: '¿Listo para profesionalizar la gestión de tu empresa?' },
  { section_key: 'cta_desc', text_value: 'Agendá una sesión exploratoria gratuita de 30 minutos. Sin compromiso. Conversamos sobre tus desafíos específicos y evaluamos juntos cómo nuestra consultoría puede transformar tu organización.' },
  { section_key: 'contact_email', text_value: 'hola@elevareconsulting.com' }
]

export default function ContentForm({ initialData }: { initialData: ContentItem[] }) {
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  // Merge DB data with defaults
  const mergedData = DEFAULT_CONTENT.map(def => {
    const found = initialData.find(d => d.section_key === def.section_key)
    return found || def
  })

  // Add any extra keys that might be in DB but not in defaults
  initialData.forEach(d => {
    if (!mergedData.find(m => m.section_key === d.section_key)) {
      mergedData.push(d)
    }
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(null)
    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      const result = await updateContent(formData)
      if (result.error) {
        setMessage({ type: 'error', text: result.error })
      } else {
        setMessage({ type: 'success', text: 'Cambios guardados con éxito.' })
        setTimeout(() => setMessage(null), 3000)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.grid}>
        {mergedData.map((item) => (
          <div key={item.section_key} className={styles.field}>
            <label htmlFor={item.section_key} className={styles.label}>
              {item.section_key.replace(/_/g, ' ')}
            </label>
            {item.text_value.length > 80 || item.section_key.includes('desc') || item.section_key.includes('subtitle') ? (
              <textarea
                id={item.section_key}
                name={item.section_key}
                defaultValue={item.text_value}
                className={styles.textarea}
              />
            ) : (
              <input
                type="text"
                id={item.section_key}
                name={item.section_key}
                defaultValue={item.text_value}
                className={styles.input}
              />
            )}
          </div>
        ))}
      </div>

      {message && (
        <div className={`${styles.message} ${message.type === 'success' ? styles.messageSuccess : styles.messageError}`}>
          {message.text}
        </div>
      )}

      <div className={styles.submitSection}>
        <button
          type="submit"
          disabled={isPending}
          className={styles.saveBtn}
        >
          <Save />
          {isPending ? 'Guardando...' : 'Guardar Cambios'}
        </button>
      </div>
    </form>
  )
}
