'use client'

import { useActionState } from 'react'
import { login } from './actions'
import { Lock } from 'lucide-react'
import styles from './admin-login.module.css'

async function loginAction(prevState: any, formData: FormData) {
  const result = await login(formData)
  if (result?.error) {
    return result.error
  }
  return null
}

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(loginAction, null)

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconCircle}>
            <Lock />
          </div>
          <h2 className={styles.title}>Elevare Admin</h2>
          <p className={styles.subtitle}>
            Ingresá tus credenciales para acceder al panel
          </p>
        </div>

        <form className={styles.form} action={formAction}>
          <div className={styles.fieldGroup}>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Correo Electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username email"
                required
                className={styles.input}
                placeholder="maria@elevareconsulting.com"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={styles.input}
                placeholder="••••••••"
              />
            </div>
          </div>

          {errorMessage && (
            <div className={styles.error}>
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className={styles.button}
          >
            {isPending ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className={styles.branding}>
          ELEVARE CONSULTING MG
        </div>
      </div>
    </div>
  )
}
