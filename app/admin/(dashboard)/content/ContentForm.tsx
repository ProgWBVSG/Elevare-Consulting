'use client'

import { useTransition, useState } from 'react'
import { updateContent } from './actions'
import { Save } from 'lucide-react'
import styles from './content.module.css'

type ContentItem = {
  id: string
  section_key: string
  text_value: string
  updated_at: string
}

export default function ContentForm({ initialData }: { initialData: ContentItem[] }) {
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

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
        {initialData.map((item) => (
          <div key={item.id} className={styles.field}>
            <label htmlFor={item.section_key} className={styles.label}>
              {item.section_key.replace(/_/g, ' ')}
            </label>
            {item.text_value.length > 100 || item.section_key.includes('subtitle') ? (
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
