import Link from 'next/link'
import { LayoutDashboard, Users, FileText, LogOut } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Elevare Admin</h2>
          <p className="text-sm text-gray-500 mt-1 truncate">{user.email}</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link 
            href="/admin/leads" 
            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Users className="w-5 h-5 text-gray-500" />
            CRM (Contactos)
          </Link>
          
          <Link 
            href="/admin/content" 
            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
          >
            <FileText className="w-5 h-5 text-gray-500" />
            Contenidos Web
          </Link>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <form action="/api/auth/signout" method="POST">
            <button 
              type="submit"
              className="flex items-center gap-3 w-full px-3 py-2 text-red-600 rounded-md hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Cerrar Sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">
        {children}
      </main>
    </div>
  )
}
