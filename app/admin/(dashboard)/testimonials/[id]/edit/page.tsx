import { updateTestimonial } from '../../actions'
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from '../../../admin-dashboard.module.css'

export default async function EditTestimonialPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: testimonial, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !testimonial) {
    notFound()
  }

  // Pre-bind the ID to the action
  const updateWithId = updateTestimonial.bind(null, testimonial.id)

  return (
    <div className={styles.adminContent}>
      <div className={styles.adminHeader}>
        <div>
          <h2>Editar Testimonio</h2>
          <p>Modificando el testimonio de {testimonial.name}</p>
        </div>
        <Link href="/admin/testimonials" className="btn btn-outline-primary" style={{ padding: '0.5rem 1rem', fontSize: '14px' }}>
          Volver
        </Link>
      </div>

      <div className={styles.statsGrid} style={{ marginTop: '2rem', display: 'block' }}>
        <div className={styles.statCard}>
          <form action={updateWithId} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nombre Completo *</label>
                <input type="text" name="name" defaultValue={testimonial.name} required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Rol / Cargo</label>
                <input type="text" name="role" defaultValue={testimonial.role || ''} placeholder="Ej: CEO" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Empresa u Origen</label>
              <input type="text" name="company" defaultValue={testimonial.company || ''} placeholder="Ej: PYME Industrial, Buenos Aires" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Testimonio *</label>
              <textarea name="text" defaultValue={testimonial.text} required rows={5} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}></textarea>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Texto Destacado (Highlight)</label>
              <input type="text" name="highlight" defaultValue={testimonial.highlight || ''} placeholder="Ej: 25% menos rotación" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>URL Foto (Opcional)</label>
                <input type="url" name="image_url" defaultValue={testimonial.image_url || ''} placeholder="https://..." style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>URL Video (Opcional)</label>
                <input type="url" name="video_url" defaultValue={testimonial.video_url || ''} placeholder="https://youtube.com/watch?v=..." style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Tipo de Testimonio</label>
                <select name="type" defaultValue={testimonial.type || 'corporate'} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}>
                  <option value="corporate">Corporativo (Empresas)</option>
                  <option value="executive">Ejecutivo (Líderes)</option>
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Estado</label>
                <select name="is_active" defaultValue={testimonial.is_active ? 'true' : 'false'} style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}>
                  <option value="true">Activo (Visible)</option>
                  <option value="false">Inactivo (Oculto)</option>
                </select>
              </div>
            </div>

            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '16px' }}>
                Actualizar Testimonio
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
