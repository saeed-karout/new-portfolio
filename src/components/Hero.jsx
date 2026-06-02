import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

// ── Animated counter ─────────────────────────
function Counter({ end, suffix = '', delay = 0 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      setTimeout(() => {
        const duration = 2000
        const fps = 60
        const inc = end / (duration / (1000 / fps))
        let current = 0
        const timer = setInterval(() => {
          current += inc
          if (current >= end) { setVal(end); clearInterval(timer); return }
          setVal(Math.floor(current))
        }, 1000 / fps)
      }, delay)
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, delay])

  return <span ref={ref}>{val}{suffix}</span>
}

// ── Floating particles ────────────────────────
function Particles() {
  return (
    <div className={styles.particles} aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className={styles.particle}
          style={{
            left: `${Math.random() * 100}%`,
            width:  `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDuration: `${Math.random() * 15 + 10}s`,
            animationDelay:    `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <Particles />

      {/* Grid background */}
      <div className={styles.gridBg} aria-hidden="true" />

      {/* Orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.tag}>
          Available for work &nbsp;·&nbsp; Frontend Developer
        </p>

        <h1 className={styles.name}>
          <span className={styles.glitch} data-text="MOHAMAD">MOHAMAD</span>
          <span className={styles.nameLine2}>
            SAEED <span className={styles.accentWord}>KAROUT</span>
          </span>
        </h1>

        <p className={styles.subtitle}>
          Web Applications Developer crafting{' '}
          <strong>high-performance</strong> digital experiences with Vue.js,
          React.js &amp; MERN Stack. Based in Damascus, working globally.
        </p>

        <div className={styles.ctaRow}>
          <a
            href="#projects"
            className="btn-primary"
            onClick={e => {
              e.preventDefault()
              document.querySelector('#projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View My Work →
          </a>
          <a href="mailto:mohamadsaeedkarout@gmail.com" className="btn-outline">
            Let's Talk
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statNum}>
            <Counter end={20} suffix="+" delay={400} />
          </div>
          <div className={styles.statLabel}>Projects Built</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>
            <Counter end={3} suffix="+" delay={600} />
          </div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNum}>
            <Counter end={8} suffix="+" delay={800} />
          </div>
          <div className={styles.statLabel}>Frameworks</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  )
}
