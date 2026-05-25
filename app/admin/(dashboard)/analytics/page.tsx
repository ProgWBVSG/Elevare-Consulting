import { BarChart3, ExternalLink } from 'lucide-react'
import styles from './analytics.module.css'

export default function AnalyticsPage() {
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

      <div className={styles.card}>
        <div className={styles.toolbar}>
          <span>Vista general del sitio web</span>
          <a href="https://analytics.google.com" target="_blank" rel="noreferrer" className={styles.gaLink}>
            Ir a Google Analytics <ExternalLink size={14} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 4 }} />
          </a>
        </div>

        {/*
          IMPORTANTE: Reemplazar el src del iframe con tu link real de Looker Studio.
          Instrucciones en la guía de analytics_guide.md
        */}
        <iframe
          src="https://lookerstudio.google.com/embed/reporting/00000000-0000-0000-0000-000000000000/page/1M"
          className={styles.iframe}
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />

        {/* Placeholder visual hasta que se conecte el iframe real */}
        <div className={styles.placeholder}>
          <div className={styles.placeholderIcon}>
            <BarChart3 size={32} />
          </div>
          <h3 className={styles.placeholderTitle}>Conectá tu reporte de Analíticas</h3>
          <p className={styles.placeholderDesc}>
            Para ver tus métricas de tráfico aquí, necesitás crear un reporte gratuito en Google Looker Studio y vincular tu cuenta de Google Analytics 4.
          </p>
          <a href="https://lookerstudio.google.com/" target="_blank" rel="noreferrer" className={styles.placeholderBtn}>
            <BarChart3 size={16} />
            Crear reporte en Looker Studio
          </a>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepTitle}>Configurá GA4</div>
              <p className={styles.stepDesc}>Creá una propiedad en analytics.google.com y copiá tu ID (G-XXXXXXX).</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepTitle}>Creá el Dashboard</div>
              <p className={styles.stepDesc}>En Looker Studio, conectá tu GA4 y diseñá tu reporte.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepTitle}>Pegá el Link</div>
              <p className={styles.stepDesc}>Copiá el link de inserción y pedime que lo pegue acá.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
