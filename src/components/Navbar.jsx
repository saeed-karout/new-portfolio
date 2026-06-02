import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#about',    label: 'About' },
  { href: '#projects', label: 'Work'  },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a className={styles.logo} onClick={() => scrollTo('#hero')}>MSK</a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}>
              <a className={styles.link} onClick={() => scrollTo(l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`${styles.mobileNav} ${menuOpen ? styles.mobileOpen : ''}`}>
        {links.map(l => (
          <a key={l.href} className={styles.mobileLink} onClick={() => scrollTo(l.href)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
