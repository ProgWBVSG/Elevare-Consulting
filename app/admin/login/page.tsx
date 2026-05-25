'use client'

import { useActionState } from 'react'
import { login } from './actions'
import { Lock } from 'lucide-react'

// Define the action returning a string (error message) or undefined (success)
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-blue-100 flex items-center justify-center rounded-full mb-4">
            <Lock className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Elevare Admin</h2>
          <p className="mt-2 text-sm text-gray-600">
            Ingresa tus credenciales para acceder al panel
          </p>
        </div>
        
        <form className="mt-8 space-y-6" action={formAction}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="maria@elevareconsulting.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
              {errorMessage}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isPending}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400"
            >
              {isPending ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
