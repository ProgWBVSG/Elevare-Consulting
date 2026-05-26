'use client'

import { useState } from 'react'
import { Mail, Clock, Paperclip } from 'lucide-react'
import CampaignForm from './CampaignForm'
import styles from './campaigns.module.css'

type Lead = {
  id: string
  nombre: string
  email: string
  status?: string
}

type CampaignRecord = {
  id: string
  created_at: string
  subject: string
  audience_type: string
  recipients_count: number
  has_attachment: boolean
}

const TABS = [
  { id: 'new', label: 'Nueva Campaña', icon: Mail },
  { id: 'history', label: 'Enviados (Historial)', icon: Clock },
]

export default function CampaignsDashboard({
  leads,
  history,
}: {
  leads: Lead[]
  history: CampaignRecord[]
}) {
  const [activeTab, setActiveTab] = useState('new')

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Campañas de Email</h1>
          <p className={styles.subtitle}>
            Enviá correos masivos a tus contactos del CRM
          </p>
        </div>
      </div>

      {/* TABS */}
      <div className={styles.tabsContainer}>
        {TABS.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
            >
              <Icon size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* NUEVA CAMPAÑA */}
      {activeTab === 'new' && <CampaignForm leads={leads} />}

      {/* HISTORIAL */}
      {activeTab === 'history' && (
        <div className={styles.historyCard}>
          <div style={{ overflowX: 'auto' }}>
            <table className={styles.historyTable}>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Asunto</th>
                  <th>Audiencia</th>
                  <th>Destinatarios</th>
                  <th>Adjunto</th>
                </tr>
              </thead>
              <tbody>
                {history.length === 0 ? (
                  <tr>
                    <td colSpan={5} className={styles.emptyHistory}>
                      Todavía no enviaste campañas. Tus envíos aparecerán acá.
                    </td>
                  </tr>
                ) : (
                  history.map((record) => (
                    <tr key={record.id}>
                      <td style={{ whiteSpace: 'nowrap', color: '#64748b', fontSize: '0.85rem' }}>
                        {new Date(record.created_at).toLocaleDateString('es-AR', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                      <td style={{ fontWeight: 600 }}>{record.subject}</td>
                      <td>
                        <span
                          className={`${styles.badge} ${
                            record.audience_type === 'Todos'
                              ? styles.badgeAll
                              : styles.badgeSpecific
                          }`}
                        >
                          {record.audience_type}
                        </span>
                      </td>
                      <td>{record.recipients_count}</td>
                      <td>
                        {record.has_attachment ? (
                          <span className={`${styles.badge} ${styles.badgeAttach}`}>
                            <Paperclip size={12} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                            Sí
                          </span>
                        ) : (
                          <span style={{ color: '#94a3b8' }}>—</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
