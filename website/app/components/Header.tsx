"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
    {
        label: "Servicios",
        href: "/servicios",
        children: [
            { label: "Coaching Interno para Empresas", href: "/coaching-interno-empresas" },
            { label: "Mentoría para Mujeres Ejecutivas", href: "/mentoria-mujeres-ejecutivas" },
            { label: "Consultoría de Procesos y Gestión", href: "/consultoria-procesos-gestion" },
        ],
    },
    { label: "Sobre María", href: "/sobre-maria" },
    { label: "Casos de Éxito", href: "/casos-de-exito" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>E</span>
                    <span className={styles.logoText}>
                        <span className={styles.logoMain}>Elevare</span>
                        <span className={styles.logoSub}>Consulting MG</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    {navLinks.map((link) =>
                        link.children ? (
                            <div
                                key={link.label}
                                className={styles.dropdown}
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <button className={styles.navLink}>
                                    {link.label}
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                                        <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </button>
                                {dropdownOpen && (
                                    <div className={styles.dropdownMenu}>
                                        {link.children.map((child) => (
                                            <Link key={child.href} href={child.href} className={styles.dropdownItem}>
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link key={link.href} href={link.href} className={styles.navLink}>
                                {link.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* CTA */}
                <Link href="/contacto" className={`btn btn-primary btn-sm ${styles.ctaBtn}`}>
                    Agenda tu sesión gratuita
                </Link>

                {/* Mobile hamburger */}
                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <span className={menuOpen ? styles.barOpen : styles.bar} />
                    <span className={menuOpen ? styles.barHidden : styles.bar} />
                    <span className={menuOpen ? styles.barOpenReverse : styles.bar} />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <div key={link.label} className={styles.mobileGroup}>
                            {link.children ? (
                                <>
                                    <span className={styles.mobileGroupLabel}>{link.label}</span>
                                    {link.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className={styles.mobileLink}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={styles.mobileLink}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link href="/contacto" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
                        Agenda tu sesión gratuita
                    </Link>
                </div>
            )}
        </header>
    );
}
