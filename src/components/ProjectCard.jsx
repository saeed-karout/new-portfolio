import { useRef, useEffect } from 'react'
import { catColors } from '../data/projects'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity   = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const { title, category, description, image, emoji, site, github } = project
  const hasImage = image && image.trim() !== ''

  return (
    <article
      ref={ref}
      className={`${styles.card} hoverable`}
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: `opacity 0.6s ${index * 0.06}s, transform 0.6s ${index * 0.06}s, box-shadow 0.4s, border-color 0.4s`,
      }}
    >
      {/* Thumbnail */}
      <div className={styles.thumb}>
        {hasImage ? (
          <img
            src={image}
            alt={title}
            className={styles.thumbImg}
            loading="lazy"
          />
        ) : (
          <div className={styles.thumbFallback}>
            <span className={styles.thumbEmoji}>{emoji}</span>
            <span className={styles.thumbTitle}>{title}</span>
          </div>
        )}

        <div className={styles.thumbOverlay} />

        {/* Category tags */}
        <div className={styles.tags}>
          {category.map(c => (
            <span
              key={c}
              className={styles.tag}
              style={{
                borderColor: catColors[c] || 'rgba(0,245,196,0.2)',
                color:       catColors[c] || 'var(--accent)',
              }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* External links */}
        <div className={styles.extLinks}>
          {site && (
            <a href={site} target="_blank" rel="noreferrer" className={styles.extBtn} title="Live Site">
              ↗
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className={styles.extBtn} title="GitHub">
              ⌥
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <span className={styles.num}>#{String(index + 1).padStart(2, '0')}</span>
        {site && (
          <a href={site} target="_blank" rel="noreferrer" className={styles.viewBtn}>
            View Live →
          </a>
        )}
      </div>
    </article>
  )
}
