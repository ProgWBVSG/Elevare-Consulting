'use client'

import { useState, useTransition } from 'react'
import { BarChart3, ExternalLink, CheckCircle2, Settings, Link as LinkIcon } from 'lucide-react'
import { saveLookerUrl } from './actions'
import styles from './analytics.module.css'

export default function AnalyticsDashboard({ savedUrl }: { savedUrl: string | null }) {
  const [url, setUrl] = useState(savedUrl || '')
  const [isPending, startTransition] = useTransition()
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    if (!url.trim()) return
    setSaved(false)

    startTransition(async () => {
      const res = await saveLookerUrl(url.trim())
      if (res.error) {
        alert(res.error)
      } else {
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
      }
    })
  }

  const hasValidUrl = savedUrl && (savedUrl.includes('lookerstudio.google.com') || savedUrl.includes('datastudio.google.com'))

  // Transformar URL normal en URL de incrustación si el usuario pegó el link incorrecto
  let embedUrl = savedUrl || ''
  if (embedUrl && !embedUrl.includes('/embed/')) {
    embedUrl = embedUrl.replace('/reporting/', '/embed/reporting/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Analíticas Web</h1>
          <p className={styles.subtitle}>
            Métricas de tráfico en tiempo real desde Google Analytics 4
          </p>
        </div>
      </div>

      {/* CONFIG BAR */}
      <div className={styles.configBar}>
        <Settings size={18} style={{ color: '#64748b', flexShrink: 0 }} />
        <input
          type="url"
          placeholder="Pegá tu link de Looker Studio acá (ej: https://lookerstudio.google.com/embed/...)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={styles.configInput}
        />
        <button
          onClick={handleSave}
          disabled={isPending || !url.trim()}
          className={styles.configBtn}
        >
          <LinkIcon size={16} />
          {isPending ? 'Guardando...' : 'Guardar'}
        </button>
        {saved && (
          <span className={styles.configSuccess}>
            <CheckCircle2 size={16} /> ¡Guardado!
          </span>
        )}
      </div>

      {/* IFRAME o EMPTY STATE */}
      {hasValidUrl ? (
        <div className={styles.card}>
          <div className={styles.toolbar}>
            <span>Vista general del sitio web</span>
            <a href="https://analytics.google.com" target="_blank" rel="noreferrer" className={styles.gaLink}>
              Ir a Google Analytics <ExternalLink size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 4 }} />
            </a>
          </div>
          <iframe
            src={embedUrl}
            className={styles.iframe}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <BarChart3 size={40} />
          </div>
          <h3 className={styles.emptyTitle}>Conectá tu reporte de Analíticas</h3>
          <p className={styles.emptyDesc}>
            Para ver tus métricas de tráfico aquí, necesitás crear un reporte gratuito en
            Google Looker Studio y vincular tu cuenta de Google Analytics 4.
            Luego pegá el enlace de inserción en la barra de arriba.
          </p>
          <a
            href="https://lookerstudio.google.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.emptyBtn}
          >
            <BarChart3 size={16} />
            Crear reporte en Looker Studio
          </a>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepTitle}>Configurá GA4</div>
              <p className={styles.stepDesc}>
                Creá una propiedad en analytics.google.com y copiá tu ID de medición (G-XXXXXXX).
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepTitle}>Creá el Dashboard</div>
              <p className={styles.stepDesc}>
                En Looker Studio, conectá tu GA4 como fuente de datos y diseñá tu reporte.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepTitle}>Pegá el Link</div>
              <p className={styles.stepDesc}>
                Copiá el enlace de inserción (embed) y pegalo en la barra de arriba. ¡Listo!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
