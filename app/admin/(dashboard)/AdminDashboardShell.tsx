'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Users, FileText, LogOut, Menu, X } from 'lucide-react'
import styles from './admin-dashboard.module.css'

const navItems = [
  { href: '/admin/leads', label: 'CRM (Contactos)', icon: Users },
  { href: '/admin/content', label: 'Contenidos Web', icon: FileText },
]

export default function AdminDashboardShell({
  children,
  userEmail,
}: {
  children: React.ReactNode
  userEmail: string
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={styles.layout}>
      {/* Hamburger — solo visible en mobile */}
      <button
        className={styles.hamburger}
        onClick={() => setSidebarOpen(true)}
        aria-label="Abrir menú"
      >
        <Menu />
      </button>

      {/* Overlay para cerrar sidebar en mobile */}
      <div
        className={`${styles.overlay} ${sidebarOpen ? styles.overlayVisible : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.brandName}>Elevare Admin</h2>
          <p className={styles.userEmail}>{userEmail}</p>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className={styles.sidebarFooter}>
          <form action="/api/auth/signout" method="POST">
            <button type="submit" className={styles.logoutBtn}>
              <LogOut />
              Cerrar Sesión
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
