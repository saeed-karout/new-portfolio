import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { projects, categories } from '../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const [active, setActive] = useState('all')
  const ref = useReveal()

  const filtered =
    active === 'all'
      ? projects
      : projects.filter(p => p.category.includes(active))

  return (
    <section id="projects" ref={ref} className={`section-wrapper reveal ${styles.projects}`}>
      <div className={`section-header ${styles.header}`}>
        <span className="section-num">02 //</span>
        <h2 className="section-title">Selected Work</h2>
        <div className="section-line" />
      </div>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.filterBtn} hoverable ${active === cat ? styles.filterActive : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map((project, i) => (
          <ProjectCard key={project.id + project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
