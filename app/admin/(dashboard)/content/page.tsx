import { createClient } from '@/lib/supabase/server'
import ContentForm from './ContentForm'
import styles from './content.module.css'

export default async function ContentPage() {
  const supabase = await createClient()

  const { data: content, error } = await supabase
    .from('site_content')
    .select('*')
    .order('section_key', { ascending: true })

  if (error) {
    return (
      <div className={styles.errorBox}>
        Error al cargar el contenido de la base de datos.
      </div>
    )
  }

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Gestor de Contenidos</h1>
      </div>

      <div className={styles.card}>
        <p className={styles.description}>
          Los cambios que guardes aquí se reflejarán instantáneamente en la página pública de Elevare Consulting.
        </p>

        <ContentForm initialData={content || []} />
      </div>
    </div>
  )
}
