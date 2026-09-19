import { useState, useEffect } from 'react'
import { profile } from '../data/profile'
import { Icon } from './Icons'
import styles from './Navbar.module.css'

const links = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#skills',     label: 'Skills' },
  { href: '#contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <header className={`${styles.nav} ${scrolled || menuOpen ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} onClick={close}>
          <span className={styles.mark} aria-hidden="true">{profile.initials}</span>
          <span className={styles.brandName}>{profile.name}</span>
        </a>

        <nav aria-label="Main" className={styles.desktop}>
          <ul className={styles.links}>
            {links.map(l => (
              <li key={l.href}><a href={l.href} className={styles.link}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          {profile.cvUrl ? (
            <a href={profile.cvUrl} className="btn btn-primary btn-sm" download>
              <Icon name="download" /> Download CV
            </a>
          ) : (
            <a href="#contact" className="btn btn-primary btn-sm">Get in touch</a>
          )}
          <button
            className={styles.toggle}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`}
        hidden={!menuOpen}
      >
        <ul className="container">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={styles.mobileLink} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
