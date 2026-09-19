import { profile } from '../data/profile'
import { Icon, GitHubIcon, LinkedInIcon } from './Icons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {profile.name} · Built with React & Vite
        </p>
        <div className={styles.links}>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" size={18} /></a>
          <a href="#top" className={styles.top}>Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
