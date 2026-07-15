'use client'

import { useTransition, useState } from 'react'
import { updateContent } from './actions'
import { Save, Image as ImageIcon } from 'lucide-react'
import styles from './content.module.css'

// ─── ESQUEMA DEL CMS ────────────────────────────────
export const CMS_SCHEMA = [
  {
    group: 'Inicio',
    fields: [
      { key: 'hero_badge', label: 'Badge Superior', type: 'text', default: 'Consultora de Negocios · Management & Desarrollo Organizacional' },
      { key: 'hero_title_main', label: 'Título Principal', type: 'text', default: 'Potenciá tu Empresa' },
      { key: 'hero_title_sub', label: 'Subtítulo', type: 'text', default: 'con Management Estratégico' },
      { key: 'hero_subtitle', label: 'Párrafo Hero', type: 'textarea', default: 'Consultora especializada en management, desarrollo organizacional y estructuración financiera para PYMEs...' },
      { key: 'hero_image', label: 'Imagen de Fondo del Hero', type: 'image', default: '' },
      { key: 'pain_intro_badge', label: 'Badge Problemas', type: 'text', default: '¿Te identificás con esto?' },
      { key: 'pain_intro_title', label: 'Título Problemas', type: 'text', default: '¿Tu empresa o tu gestión no está dando los resultados que esperabas?' },
      { key: 'pain_intro_desc', label: 'Descripción Problemas', type: 'textarea', default: 'Trabajamos con dos tipos de desafíos...' },
    ]
  },
  {
    group: 'Contacto y Redes',
    fields: [
      { key: 'contact_whatsapp', label: 'Número de WhatsApp (ej. 5491125464650)', type: 'text', default: '5491125464650' },
      { key: 'contact_whatsapp_text', label: 'Mensaje Predefinido de WhatsApp', type: 'textarea', default: 'Hola Elevare, vengo de la web y quiero consultar por...' },
      { key: 'contact_email', label: 'Email de Contacto', type: 'text', default: 'contacto@elevareconsultingmg.com' },
      { key: 'contact_linkedin', label: 'Link a LinkedIn', type: 'text', default: 'https://www.linkedin.com/in/elevare-consulting-729079200/?isSelfProfile=false' },
      { key: 'contact_instagram', label: 'Link a Instagram', type: 'text', default: 'https://instagram.com/elevare' },
      { key: 'cta_intro_badge', label: 'Badge Siguiente Paso', type: 'text', default: 'Siguiente Paso' },
      { key: 'cta_title', label: 'Título Final (Llamado a la Acción)', type: 'text', default: '¿Listo para profesionalizar la gestión de tu empresa?' },
      { key: 'cta_desc', label: 'Descripción Final', type: 'textarea', default: 'Agendá una sesión exploratoria gratuita de 30 minutos...' },
    ]
  },
  {
    group: 'Footer Global',
    fields: [
      { key: 'footer_about', label: 'Texto "Sobre Nosotros" en Footer', type: 'textarea', default: 'Transformamos empresas estructurando el negocio y desarrollando a sus líderes.' },
      { key: 'footer_address', label: 'Dirección (Sede)', type: 'text', default: 'Buenos Aires, Argentina' },
      { key: 'footer_copyright', label: 'Texto Copyright', type: 'text', default: '© 2026 Elevare Consulting MG. Todos los derechos reservados.' },
    ]
  },
  {
    group: 'Imágenes Adicionales',
    fields: [
      { key: 'img_empresas_hero', label: 'Hero Empresas', type: 'image', default: '' },
      { key: 'img_lideres_hero', label: 'Hero Líderes', type: 'image', default: '' },
      { key: 'img_mujeres_hero', label: 'Hero Mujeres Ejecutivas', type: 'image', default: '' },
    ]
  }
]

type ContentItem = {
  id?: string
  section_key: string
  text_value: string
  updated_at?: string
}

export default function ContentForm({ initialData }: { initialData: ContentItem[] }) {
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [activeTab, setActiveTab] = useState(CMS_SCHEMA[0].group)
  const [previewImages, setPreviewImages] = useState<Record<string, string>>({})

  const getValue = (key: string, defaultValue: string) => {
    const found = initialData.find(d => d.section_key === key)
    return found ? found.text_value : defaultValue
  }

  const handleImageChange = (key: string, file: File | null) => {
    if (file) {
      const url = URL.createObjectURL(file)
      setPreviewImages(prev => ({ ...prev, [key]: url }))
    }
  }

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
      {/* TABS HEADER */}
      <div className={styles.tabsContainer}>
        {CMS_SCHEMA.map(tab => (
          <button
            key={tab.group}
            type="button"
            className={`${styles.tabBtn} ${activeTab === tab.group ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab(tab.group)}
          >
            {tab.group}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className={styles.grid}>
        {CMS_SCHEMA.find(t => t.group === activeTab)?.fields.map(field => {
          const val = getValue(field.key, field.default)
          const preview = previewImages[field.key] || (val.startsWith('http') ? val : null)

          return (
            <div key={field.key} className={styles.field}>
              <label htmlFor={field.key} className={styles.label}>
                {field.label}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  id={field.key}
                  name={field.key}
                  defaultValue={val}
                  className={styles.textarea}
                />
              ) : field.type === 'image' ? (
                <div className={styles.fileInputWrapper}>
                  {preview ? (
                    <img src={preview} alt="Preview" className={styles.imagePreview} />
                  ) : (
                    <div className={styles.imagePreview} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6' }}>
                      <ImageIcon size={20} color="#9ca3af" />
                    </div>
                  )}
                  <input
                    type="file"
                    id={field.key}
                    name={field.key}
                    accept="image/*"
                    onChange={(e) => handleImageChange(field.key, e.target.files?.[0] || null)}
                    className={styles.input}
                    style={{ border: 'none', padding: 0 }}
                  />
                  <input type="hidden" name={`${field.key}_current`} value={val} />
                </div>
              ) : (
                <input
                  type="text"
                  id={field.key}
                  name={field.key}
                  defaultValue={val}
                  className={styles.input}
                />
              )}
            </div>
          )
        })}
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
