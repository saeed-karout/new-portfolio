import { useReveal } from '../hooks/useReveal'
import { experience } from '../data/profile'
import { Icon } from './Icons'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="section">
      <div ref={ref} className="container reveal">
        <div className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-lead">
            From agency work to international product teams — and now building my own company.
          </p>
        </div>

        <ol className={styles.list}>
          {experience.map(job => (
            <li key={job.role + job.company} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.date}>{job.date}</span>
                <span className={styles.location}>{job.location}</span>
              </div>

              <div className={styles.body}>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noreferrer">
                      {job.company} <Icon name="arrowUpRight" size={15} />
                    </a>
                  ) : job.company}
                </p>
                <ul className={styles.points}>
                  {job.points.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
