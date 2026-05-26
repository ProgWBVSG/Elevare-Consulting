'use client'

import { Activity, Users, Globe, MousePointerClick, ExternalLink, TrendingUp, Search } from 'lucide-react'
import styles from './analytics.module.css'

export default function AnalyticsDashboard() {
  const GA_BASE_URL = 'https://analytics.google.com/analytics/web/'

  const reports = [
    {
      id: 'realtime',
      title: 'En Vivo Ahora',
      description: 'Veé cuántas personas están navegando en tu web en este exacto momento y qué páginas miran.',
      icon: Activity,
      color: '#ef4444', // red
      link: `${GA_BASE_URL}#/p/realtime`
    },
    {
      id: 'acquisition',
      title: 'Origen del Tráfico',
      description: 'Descubrí de dónde vienen tus clientes (Google, Instagram, links directos o campañas).',
      icon: TrendingUp,
      color: '#3b82f6', // blue
      link: `${GA_BASE_URL}#/p/reports/acquisitionoverview`
    },
    {
      id: 'demographics',
      title: 'Datos Demográficos',
      description: 'Conocé los países, ciudades y edades de las personas que visitan Elevare Consulting.',
      icon: Globe,
      color: '#10b981', // green
      link: `${GA_BASE_URL}#/p/reports/demographicsuser`
    },
    {
      id: 'pages',
      title: 'Páginas más vistas',
      description: 'Averiguá qué servicios interesan más y qué páginas retienen más tiempo a los visitantes.',
      icon: MousePointerClick,
      color: '#8b5cf6', // purple
      link: `${GA_BASE_URL}#/p/reports/pagesandusercreens`
    },
    {
      id: 'events',
      title: 'Comportamiento',
      description: 'Mirá qué botones tocan más y cómo interactúan los usuarios con la web.',
      icon: Users,
      color: '#f59e0b', // amber
      link: `${GA_BASE_URL}#/p/reports/engagementoverview`
    },
    {
      id: 'search',
      title: 'Búsquedas (SEO)',
      description: 'Conectá Google Search Console para ver con qué palabras clave te encuentran en Google.',
      icon: Search,
      color: '#64748b', // slate
      link: 'https://search.google.com/search-console'
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Centro de Analíticas Web</h1>
          <p className={styles.subtitle}>
            Acceso directo a las métricas oficiales de Google Analytics 4
          </p>
        </div>
      </div>

      <div className={styles.infoBanner}>
        <div className={styles.infoIconWrapper}>
          <Activity size={24} />
        </div>
        <div className={styles.infoText}>
          <h3 className={styles.infoTitle}>Tus datos están siendo registrados</h3>
          <p className={styles.infoDesc}>
            Google Tag Manager ya está midiendo tu web. Recordá que Google Analytics tarda <strong>hasta 24 horas</strong> en procesar los primeros datos. Si los reportes de abajo se ven vacíos hoy, es completamente normal.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {reports.map((report) => {
          const Icon = report.icon
          return (
            <a
              key={report.id}
              href={report.link}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox} style={{ backgroundColor: `${report.color}15`, color: report.color }}>
                  <Icon size={24} />
                </div>
                <ExternalLink size={16} className={styles.externalIcon} />
              </div>
              <h3 className={styles.cardTitle}>{report.title}</h3>
              <p className={styles.cardDesc}>{report.description}</p>
            </a>
          )
        })}
      </div>

      <div className={styles.footerLink}>
        <a href={GA_BASE_URL} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
          Abrir Google Analytics Completo
        </a>
      </div>
    </div>
  )
}
