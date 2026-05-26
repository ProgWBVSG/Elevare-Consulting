'use client'

import { useState, useTransition } from 'react'
import { X, Tag as TagIcon, Plus } from 'lucide-react'
import { updateLeadTags } from './actions'
import styles from './leads.module.css'

export type Lead = {
  id: string
  created_at: string
  nombre: string
  email: string
  telefono?: string
  mensaje?: string
  status?: string
  tipo?: string
  etiquetas?: string[]
}

const TABS = [
  { id: 'all', label: 'Todos' },
  { id: 'Contacto', label: 'Contactos' },
  { id: 'Newsletter', label: 'Newsletter' },
  { id: 'Diagnostico', label: 'Diagnóstico' }
]

export default function LeadsDashboard({ leads }: { leads: Lead[] }) {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  
  const [tagInput, setTagInput] = useState('')
  const [isPending, startTransition] = useTransition()

  // Filtramos por pestaña
  const filteredLeads = leads.filter(lead => {
    if (activeTab === 'all') return true
    
    // Fallback inteligente si la columna 'tipo' no existe en la base de datos
    let leadTipo = lead.tipo
    if (!leadTipo) {
      leadTipo = lead.nombre === 'Suscripción Newsletter' ? 'Newsletter' : 'Contacto'
    }

    return leadTipo.toLowerCase() === activeTab.toLowerCase()
  })

  const getComputedTipo = (lead: Lead) => {
    if (lead.tipo) return lead.tipo
    return lead.nombre === 'Suscripción Newsletter' ? 'Newsletter' : 'Contacto'
  }

  const handleAddTag = () => {
    if (!tagInput.trim() || !selectedLead) return

    const newTag = tagInput.trim()
    const currentTags = selectedLead.etiquetas || []
    
    if (currentTags.includes(newTag)) {
      setTagInput('')
      return
    }

    const updatedTags = [...currentTags, newTag]
    
    // Optistic UI update
    setSelectedLead({ ...selectedLead, etiquetas: updatedTags })
    setTagInput('')

    startTransition(async () => {
      const res = await updateLeadTags(selectedLead.id, updatedTags)
      if (res?.error) {
        alert(res.error)
      }
    })
  }

  const handleRemoveTag = (tagToRemove: string) => {
    if (!selectedLead) return
    
    const currentTags = selectedLead.etiquetas || []
    const updatedTags = currentTags.filter(t => t !== tagToRemove)
    
    setSelectedLead({ ...selectedLead, etiquetas: updatedTags })
    
    startTransition(async () => {
      const res = await updateLeadTags(selectedLead.id, updatedTags)
      if (res?.error) {
        alert(res.error)
      }
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>CRM de Contactos</h1>
          <p className={styles.subtitle}>
            Total en esta vista: {filteredLeads.length} contacto{filteredLeads.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* TABS */}
      <div className={styles.tabsContainer}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className={styles.card}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Tipo</th>
                <th>Etiquetas</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={5} className={styles.emptyTd}>
                    No hay contactos en esta sección.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} onClick={() => setSelectedLead(lead)}>
                    <td className={styles.date}>
                      {new Date(lead.created_at).toLocaleDateString('es-AR')}
                    </td>
                    <td style={{ fontWeight: 600 }}>
                      {lead.nombre}
                    </td>
                    <td>
                      <span className={styles.emailLink}>
                        {lead.email}
                      </span>
                    </td>
                    <td>
                      <span className={styles.motivoBadge}>
                        {getComputedTipo(lead)}
                      </span>
                    </td>
                    <td>
                      <div className={styles.tagsContainer}>
                        {(lead.etiquetas || []).slice(0, 2).map((tag, i) => (
                          <span key={i} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                        {(lead.etiquetas?.length || 0) > 2 && (
                          <span className={styles.tag} style={{ background: '#e2e8f0' }}>
                            +{(lead.etiquetas?.length || 0) - 2}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* SIDE DRAWER (Panel Lateral) */}
      {selectedLead && (
        <div className={styles.drawerOverlay} onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedLead(null)
        }}>
          <div className={styles.drawer}>
            <div className={styles.drawerHeader}>
              <h2 className={styles.drawerTitle}>Detalles del Contacto</h2>
              <button className={styles.closeBtn} onClick={() => setSelectedLead(null)}>
                <X size={20} />
              </button>
            </div>
            
            <div className={styles.drawerBody}>
              <div className={styles.detailSection}>
                <div className={styles.detailLabel}>Nombre Completo</div>
                <div className={styles.detailValue}>{selectedLead.nombre}</div>
              </div>
              
              <div className={styles.detailSection}>
                <div className={styles.detailLabel}>Email</div>
                <div className={styles.detailValue}>
                  <a href={`mailto:${selectedLead.email}`} className={styles.emailLink}>
                    {selectedLead.email}
                  </a>
                </div>
              </div>

              <div className={styles.detailSection}>
                <div className={styles.detailLabel}>Teléfono</div>
                <div className={styles.detailValue}>{selectedLead.telefono || 'No provisto'}</div>
              </div>

              <div className={styles.detailSection}>
                <div className={styles.detailLabel}>Origen (Tipo)</div>
                <div className={styles.detailValue}>
                  <span className={styles.motivoBadge}>{getComputedTipo(selectedLead)}</span>
                </div>
              </div>

              <div className={styles.detailSection}>
                <div className={styles.detailLabel}>Mensaje</div>
                <div className={styles.detailValue} style={{ whiteSpace: 'pre-wrap' }}>
                  {selectedLead.mensaje || 'Sin mensaje adicional.'}
                </div>
              </div>

              <div className={styles.detailSection}>
                <div className={styles.detailLabel} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TagIcon size={14} /> Etiquetas (Tags)
                </div>
                
                <div className={styles.tagInputWrapper}>
                  <input 
                    type="text" 
                    placeholder="Escribir etiqueta..."
                    className={styles.tagInput}
                    value={tagInput}
                    onChange={e => setTagInput(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleAddTag()
                      }
                    }}
                  />
                  <button type="button" onClick={handleAddTag} className={styles.addTagBtn} disabled={isPending}>
                    <Plus size={18} />
                  </button>
                </div>

                <div className={styles.tagsContainer}>
                  {(selectedLead.etiquetas || []).map((tag, i) => (
                    <span key={i} className={styles.tag}>
                      {tag}
                      <button 
                        type="button" 
                        onClick={() => handleRemoveTag(tag)}
                        className={styles.removeTagBtn}
                        disabled={isPending}
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                  {(!selectedLead.etiquetas || selectedLead.etiquetas.length === 0) && (
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic' }}>No hay etiquetas asignadas.</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
