import { useReveal } from '../hooks/useReveal'
import { skills, teaching, education, certifications, languages } from '../data/profile'
import { Icon } from './Icons'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useReveal()
  const bgRef = useReveal()

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <span className="eyebrow">Skills</span>
            <h2 className="section-title">Tools I work with every day</h2>
          </div>

          <div className={styles.groups}>
            {skills.map(g => (
              <div key={g.group} className={styles.group}>
                <h3 className={styles.groupTitle}>{g.group}</h3>
                <ul className={styles.chips}>
                  {g.items.map(s => <li key={s} className="chip">{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div ref={bgRef} className={`reveal ${styles.background}`}>
          {/* Teaching */}
          <article className={`${styles.panel} ${styles.teach}`}>
            <span className={styles.icon}><Icon name="users" size={22} /></span>
            <h3 className={styles.panelTitle}>{teaching.title}</h3>
            <p className={styles.panelDate}>{teaching.date}</p>
            <p className={styles.panelText}>{teaching.text}</p>
            <ul className={styles.highlights}>
              {teaching.highlights.map(h => (
                <li key={h.label}><strong>{h.value}</strong><span>{h.label}</span></li>
              ))}
            </ul>
          </article>

          {/* Education */}
          <article className={styles.panel}>
            <span className={styles.icon}><Icon name="graduation" size={22} /></span>
            <h3 className={styles.panelTitle}>Education</h3>
            <ul className={styles.entries}>
              {education.map(e => (
                <li key={e.degree}>
                  <p className={styles.entryTitle}>{e.degree}</p>
                  <p className={styles.entryMeta}>{e.school} · {e.date}</p>
                </li>
              ))}
            </ul>
          </article>

          {/* Certifications + languages */}
          <article className={styles.panel}>
            <span className={styles.icon}><Icon name="award" size={22} /></span>
            <h3 className={styles.panelTitle}>Certifications</h3>
            <ul className={styles.entries}>
              {certifications.map(c => <li key={c}><p className={styles.entryTitle}>{c}</p></li>)}
            </ul>

            <h3 className={`${styles.panelTitle} ${styles.spaced}`}>Languages</h3>
            <ul className={styles.entries}>
              {languages.map(l => (
                <li key={l.name}>
                  <p className={styles.entryTitle}>{l.name}</p>
                  <p className={styles.entryMeta}>{l.level}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
