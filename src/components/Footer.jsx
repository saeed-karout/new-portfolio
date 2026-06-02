import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>MSK</div>
      <p className={styles.copy}>© {new Date().getFullYear()} Mohamad Saeed Karout · Damascus, Syria</p>
      
    </footer>
  )
}
