import { catColors, catLabel } from '../data/projects'
import { Icon, GitHubIcon } from './Icons'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  const { title, category, description, image, emoji, site, github } = project
  const hasImage = image && image.trim() !== ''

  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        {hasImage ? (
          <img src={image} alt={`Screenshot of ${title}`} loading="lazy" decoding="async" width="1200" height="675" />
        ) : (
          <span className={styles.fallback} aria-hidden="true">{emoji}</span>
        )}
      </div>

      <div className={styles.body}>
        <ul className={styles.tags} aria-label="Technologies">
          {category.map(c => (
            <li key={c} className={styles.tag}>
              <span className={styles.tagDot} style={{ background: catColors[c] || 'var(--accent)' }} aria-hidden="true" />
              {catLabel(c)}
            </li>
          ))}
        </ul>

        <h4 className={styles.title}>{title}</h4>
        <p className={styles.desc}>{description}</p>

        {(site || github) && (
          <div className={styles.links}>
            {site && (
              <a href={site} target="_blank" rel="noreferrer" className={styles.link}>
                Live site <Icon name="arrowUpRight" size={16} />
                <span className="sr-only"> — {title}</span>
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className={styles.link}>
                <GitHubIcon size={16} /> Code
                <span className="sr-only"> — {title}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
