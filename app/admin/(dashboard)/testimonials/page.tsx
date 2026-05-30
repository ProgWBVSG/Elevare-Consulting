import { getTestimonials } from './actions'
import Link from 'next/link'
import styles from '../admin-dashboard.module.css'
import { deleteTestimonial } from './actions'
import { revalidatePath } from 'next/cache'

export default async function TestimonialsAdminPage() {
  const testimonials = await getTestimonials()

  return (
    <div className={styles.adminContent}>
      <div className={styles.adminHeader}>
        <div>
          <h2>Testimonios</h2>
          <p>Administrá los casos de éxito, reseñas y testimonios.</p>
        </div>
        <Link href="/admin/testimonials/create" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '14px' }}>
          + Nuevo Testimonio
        </Link>
      </div>

      <div className={styles.statsGrid} style={{ marginTop: '2rem', display: 'block' }}>
        <div className={styles.statCard}>
          <table className={styles.leadsTable} style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #eee', textAlign: 'left' }}>
                <th style={{ padding: '1rem' }}>Nombre</th>
                <th style={{ padding: '1rem' }}>Rol / Empresa</th>
                <th style={{ padding: '1rem' }}>Destacado</th>
                <th style={{ padding: '1rem' }}>Estado</th>
                <th style={{ padding: '1rem', textAlign: 'right' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((t: any) => (
                <tr key={t.id} style={{ borderBottom: '1px solid #f5f5f5' }}>
                  <td style={{ padding: '1rem' }}>
                    <strong>{t.name}</strong>
                    {t.image_url && <span style={{ marginLeft: 8, fontSize: '12px', background: '#eee', padding: '2px 6px', borderRadius: 4 }}>📷 Foto</span>}
                    {t.video_url && <span style={{ marginLeft: 8, fontSize: '12px', background: '#e3f2fd', padding: '2px 6px', borderRadius: 4 }}>🎥 Video</span>}
                  </td>
                  <td style={{ padding: '1rem', color: '#666' }}>
                    {t.role} {t.company ? `en ${t.company}` : ''}
                  </td>
                  <td style={{ padding: '1rem', color: '#666' }}>
                    {t.highlight || '-'}
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 600,
                      background: t.is_active ? '#e8f5e9' : '#ffebee',
                      color: t.is_active ? '#2e7d32' : '#c62828'
                    }}>
                      {t.is_active ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <Link href={`/admin/testimonials/${t.id}/edit`} style={{ color: '#1976d2', marginRight: '1rem', textDecoration: 'none', fontWeight: 500 }}>
                      Editar
                    </Link>
                    <form action={async () => {
                      'use server'
                      await deleteTestimonial(t.id)
                      revalidatePath('/admin/testimonials')
                    }} style={{ display: 'inline' }}>
                      <button type="submit" style={{ color: '#d32f2f', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500 }}>
                        Eliminar
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
              {testimonials.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                    No hay testimonios todavía.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
