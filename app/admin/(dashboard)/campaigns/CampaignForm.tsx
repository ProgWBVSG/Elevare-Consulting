'use client'

import { useTransition, useState, useRef } from 'react'
import { sendCampaign } from './actions'
import { Send, AlertCircle, CheckCircle2, Paperclip, X } from 'lucide-react'
import styles from './campaigns.module.css'

type Lead = {
  id: string
  nombre: string
  email: string
  status?: string
}

export default function CampaignForm({ leads }: { leads: Lead[] }) {
  const [isPending, startTransition] = useTransition()
  const [status, setStatus] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  
  const [audienceType, setAudienceType] = useState<'all' | 'specific'>('all')
  const [selectedEmails, setSelectedEmails] = useState<Set<string>>(new Set())
  const [fileName, setFileName] = useState<string | null>(null)
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleToggleEmail = (email: string) => {
    const newSet = new Set(selectedEmails)
    if (newSet.has(email)) {
      newSet.delete(email)
    } else {
      newSet.add(email)
    }
    setSelectedEmails(newSet)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("El archivo es demasiado grande. El máximo es 5MB.")
        e.target.value = ''
        setFileName(null)
      } else {
        setFileName(file.name)
      }
    } else {
      setFileName(null)
    }
  }

  const clearFile = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setFileName(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus(null)
    const formData = new FormData(e.currentTarget)

    const totalToVerify = audienceType === 'all' ? leads.length : selectedEmails.size
    if (totalToVerify === 0) {
      alert("No has seleccionado a nadie para enviar el correo.")
      return
    }

    if (!window.confirm(`¿Estás segura de enviar este correo a ${totalToVerify} contacto(s)? Esta acción no se puede deshacer.`)) {
      return
    }

    formData.append('audienceType', audienceType)
    if (audienceType === 'specific') {
      formData.append('specificEmails', Array.from(selectedEmails).join(','))
    }

    startTransition(async () => {
      const result = await sendCampaign(formData)
      if (result.error) {
        setStatus({ type: 'error', text: result.error })
      } else {
        setStatus({ type: 'success', text: `¡Campaña enviada con éxito a ${result.count} contactos!` })
        const form = e.target as HTMLFormElement
        form.reset()
        setFileName(null)
        setSelectedEmails(new Set())
      }
    })
  }

  if (leads.length === 0) {
    return (
      <div className={styles.messageError} style={{ margin: 0, padding: '2rem' }}>
        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-yellow-900">No hay contactos</h3>
          <p className="mt-1 text-sm">Aún no tienes leads registrados en tu CRM. Debes tener al menos un contacto para poder enviar campañas.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.card}>
        
        {/* SECCIÓN: AUDIENCIA */}
        <div className={styles.audienceSection}>
          <h2 className={styles.sectionTitle}>1. Seleccionar Audiencia</h2>
          
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input 
                type="radio" 
                name="audienceRadio" 
                className={styles.radioInput}
                checked={audienceType === 'all'} 
                onChange={() => setAudienceType('all')} 
              />
              Todos los contactos ({leads.length})
            </label>
            <label className={styles.radioLabel}>
              <input 
                type="radio" 
                name="audienceRadio" 
                className={styles.radioInput}
                checked={audienceType === 'specific'} 
                onChange={() => setAudienceType('specific')} 
              />
              Contactos específicos
            </label>
          </div>

          {audienceType === 'specific' && (
            <div className={styles.leadsList}>
              {leads.map(lead => (
                <label key={lead.id} className={styles.leadItem}>
                  <input 
                    type="checkbox"
                    className={styles.leadCheck}
                    checked={selectedEmails.has(lead.email)}
                    onChange={() => handleToggleEmail(lead.email)}
                  />
                  <div className={styles.leadInfo}>
                    <span className={styles.leadName}>{lead.nombre}</span>
                    <span className={styles.leadEmail}>{lead.email}</span>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* SECCIÓN: CONTENIDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>2. Contenido del Correo</h2>
          
          <div className={styles.field}>
            <label htmlFor="subject" className={styles.label}>Asunto del correo</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className={styles.input}
              placeholder="Ej: Invitación a nueva Masterclass de Liderazgo"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>Cuerpo del Mensaje</label>
            <p className="text-xs text-gray-500 mb-2">Puedes usar saltos de línea normales. Se convertirán en formato automático.</p>
            <textarea
              id="message"
              name="message"
              required
              rows={8}
              className={styles.textarea}
              placeholder="Hola, quería compartirles una novedad..."
            />
          </div>

          <div className={styles.field} style={{ marginTop: '2rem' }}>
            <label className={styles.label}>Archivo Adjunto (Opcional)</label>
            <div className={styles.fileInputWrapper}>
              <input
                type="file"
                name="attachment"
                className={styles.fileInput}
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
              />
              <Paperclip size={24} className="mx-auto text-gray-400 mb-2" />
              {fileName ? (
                <div className={styles.fileName}>
                  {fileName}
                  <button onClick={clearFile} className="ml-2 hover:text-red-500" type="button" title="Eliminar archivo">
                    <X size={14} style={{ display: 'inline' }} />
                  </button>
                </div>
              ) : (
                <>
                  <span style={{ fontWeight: 600, color: '#2C5F9F' }}>Haz clic para buscar</span> o arrastra un archivo aquí.
                  <p className={styles.fileHint}>PDF, Word, o Imágenes (Máx: 5MB)</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* FEEDBACK STATUS */}
        {status && (
          <div className={`${styles.message} ${status.type === 'success' ? styles.messageSuccess : styles.messageError}`}>
            {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
            {status.text}
          </div>
        )}

        {/* SECCIÓN: SUBMIT */}
        <div className={styles.footerSection}>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
            Se enviará en Copia Oculta (BCC) a {audienceType === 'all' ? leads.length : selectedEmails.size} personas.
          </span>
          <button
            type="submit"
            disabled={isPending}
            className={styles.submitBtn}
          >
            <Send size={18} />
            {isPending ? 'Enviando...' : 'Enviar Campaña Ahora'}
          </button>
        </div>

      </form>
    </div>
  )
}
