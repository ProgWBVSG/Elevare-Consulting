import { createTestimonial } from '../actions'
import Link from 'next/link'
import styles from '../../admin-dashboard.module.css'

export default function CreateTestimonialPage() {
  return (
    <div className={styles.adminContent}>
      <div className={styles.adminHeader}>
        <div>
          <h2>Nuevo Testimonio</h2>
          <p>Agregá un caso de éxito a la plataforma.</p>
        </div>
        <Link href="/admin/testimonials" className="btn btn-outline-primary" style={{ padding: '0.5rem 1rem', fontSize: '14px' }}>
          Volver
        </Link>
      </div>

      <div className={styles.statsGrid} style={{ marginTop: '2rem', display: 'block' }}>
        <div className={styles.statCard}>
          <form action={createTestimonial} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nombre Completo *</label>
                <input type="text" name="name" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Rol / Cargo</label>
                <input type="text" name="role" placeholder="Ej: CEO" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Empresa u Origen</label>
              <input type="text" name="company" placeholder="Ej: PYME Industrial, Buenos Aires" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Testimonio *</label>
              <textarea name="text" required rows={5} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}></textarea>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Texto Destacado (Highlight)</label>
              <input type="text" name="highlight" placeholder="Ej: 25% menos rotación" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
              <small style={{ color: '#666', marginTop: '4px', display: 'block' }}>El texto que aparece en la etiqueta verde con el icono de check.</small>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>URL Foto (Opcional)</label>
                <input type="url" name="image_url" placeholder="https://..." style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                <small style={{ color: '#666', marginTop: '4px', display: 'block' }}>URL de la imagen desde Storage de Supabase u otro lado.</small>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>URL Video (Opcional)</label>
                <input type="url" name="video_url" placeholder="https://youtube.com/watch?v=..." style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Tipo de Testimonio</label>
              <select name="type" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}>
                <option value="corporate">Corporativo (Empresas)</option>
                <option value="executive">Ejecutivo (Líderes)</option>
              </select>
            </div>

            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '16px' }}>
                Guardar Testimonio
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
