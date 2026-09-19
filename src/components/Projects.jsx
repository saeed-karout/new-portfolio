import { useMemo, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { featuredProjects, projects, categories, catLabel } from '../data/projects'
import { Icon } from './Icons'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

const INITIAL_COUNT = 6

function Featured({ project, index }) {
  const ref = useReveal()
  const { title, tagline, role, description, points, stack, image, site } = project

  return (
    <article ref={ref} className={`reveal ${styles.feature} ${index % 2 ? styles.flip : ''}`}>
      <a href={site} target="_blank" rel="noreferrer" className={styles.shot} tabIndex={-1} aria-hidden="true">
        <img src={image} alt="" loading="lazy" decoding="async" width="1200" height="600" />
      </a>

      <div className={styles.featureBody}>
        <p className={styles.role}>{role}</p>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.desc}>{description}</p>

        <ul className={styles.points}>
          {points.map(p => (
            <li key={p}><Icon name="check" size={18} /> <span>{p}</span></li>
          ))}
        </ul>

        <ul className={styles.stack} aria-label="Technologies">
          {stack.map(s => <li key={s} className="chip">{s}</li>)}
        </ul>

        <a href={site} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
          Visit {title} <Icon name="arrowUpRight" />
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')
  const [showAll, setShowAll] = useState(false)
  const headRef = useReveal()

  const filtered = useMemo(
    () => active === 'all' ? projects : projects.filter(p => p.category.includes(active)),
    [active]
  )
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)

  return (
    <section id="projects" className="section">
      <div className="container">
        <div ref={headRef} className="section-head reveal">
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">Products I've built</h2>
          <p className="section-lead">
            A few projects I'm proud of, with what I built and the tools I used.
          </p>
        </div>

        <div className={styles.features}>
          {featuredProjects.map((p, i) => <Featured key={p.title} project={p} index={i} />)}
        </div>

        <div className={styles.moreHead}>
          <h3 className={styles.moreTitle}>More projects</h3>
          <div className={styles.filters} role="group" aria-label="Filter projects by technology">
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
                onClick={() => { setActive(cat); setShowAll(false) }}
                aria-pressed={active === cat}
              >
                {catLabel(cat)}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {visible.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>

        {filtered.length > INITIAL_COUNT && (
          <div className={styles.moreWrap}>
            <button className="btn btn-secondary" onClick={() => setShowAll(v => !v)} aria-expanded={showAll}>
              {showAll ? 'Show fewer' : `Show all ${filtered.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
