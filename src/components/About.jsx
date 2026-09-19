import { useReveal } from '../hooks/useReveal'
import { about, services } from '../data/profile'
import { Icon } from './Icons'
import styles from './About.module.css'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section section-alt">
      <div ref={ref} className="container reveal">
        <div className={styles.grid}>
          <div>
            <span className="eyebrow">About me</span>
            <h2 className="section-title">A developer who cares about the whole product.</h2>
          </div>

          <div className={styles.text}>
            {about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        <ul className={styles.services}>
          {services.map(s => (
            <li key={s.title} className={styles.service}>
              <span className={styles.icon}><Icon name={s.icon} size={22} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
