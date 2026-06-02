import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

const skills = [
  'React.js', 'Vue.js', 'Node.js', 'Express',
  'MERN Stack', 'TypeScript', 'Tailwind CSS', 'Vuetify',
  'Bootstrap', 'HTML / CSS', 'Git / GitHub', 'REST API',
  'MongoDB', 'Laravel', 'C#', 'Vanilla JS',
]

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Tessafold',
    location: 'Germany / USA / UAE / KSA',
    date: '06/2025 — Present',
    link: 'https://tessafold.com/',
  },
  {
    role: 'Frontend Developer',
    company: 'Plateau Agency',
    location: 'Syria & KSA',
    date: '08/2024',
    link: 'https://plateau.media/',
  },
  {
    role: 'Web Developer',
    company: 'Freelancer',
    location: 'Damascus',
    date: '01/2024',
    link: null,
  },
]

const education = [
  {
    degree: "B.Sc. Information Technology & IDNS",
    school: 'Syrian Virtual University',
    date: '01/2023 — 07/2025',
  },
  {
    degree: 'Computer Institute Diploma — Software Major',
    school: 'Syrian Virtual University',
    date: '01/2020 — 12/2022',
  },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className={`section-wrapper reveal ${styles.about}`}>
      <div className="section-header" style={{ padding: '0 40px' }}>
        <span className="section-num">01 //</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-line" />
      </div>

      <div className={styles.grid}>
        {/* Left — text + experience */}
        <div>
          <div className={styles.bio}>
            <p>
              I'm <strong>Mohamad Saeed Karout</strong>, a Web Applications Developer &amp;
              Trainer based in Damascus, Syria — currently working remotely with teams across
              Germany, USA, UAE &amp; KSA.
            </p>
            <p>
              Currently a <strong>Frontend Developer at Tessafold</strong>, a company
              specializing in software development and AI. Previously at{' '}
              <strong>Plateau Agency</strong>, a licensed marketing agency operating across
              Syria and Saudi Arabia.
            </p>
            <p>
              Specialized in front-end development, I bring ideas to life with clean,
              performant code and a sharp eye for design. Passionate about sharing knowledge
              and growing the developer community.
            </p>
          </div>

          <div className={styles.socialRow}>
            <a href="https://www.linkedin.com/in/saeedkarout/" target="_blank" rel="noreferrer" className={styles.socialLink}>
              ⬡ LinkedIn
            </a>
            <a href="https://github.com/saeed-karout" target="_blank" rel="noreferrer" className={styles.socialLink}>
              ⬡ GitHub
            </a>
            <a href="https://myportfolio-karout.netlify.app/" target="_blank" rel="noreferrer" className={styles.socialLink}>
              ⬡ Old Portfolio
            </a>
          </div>

          {/* Experience */}
          <h3 className={styles.listTitle}>Experience</h3>
          <div className={styles.timeline}>
            {experience.map((e) => (
              <div key={e.role + e.company} className={styles.timelineItem}>
                <div className={styles.timelineRole}>{e.role}</div>
                <div className={styles.timelineCompany}>
                  {e.link
                    ? <a href={e.link} target="_blank" rel="noreferrer">{e.company}</a>
                    : e.company
                  }
                  &nbsp;·&nbsp;{e.location}
                </div>
                <div className={styles.timelineDate}>{e.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — skills + education */}
        <div>
          <h3 className={styles.listTitle}>Tech Stack</h3>
          <div className={styles.skillsGrid}>
            {skills.map(s => (
              <div key={s} className={`${styles.chip} hoverable`}>{s}</div>
            ))}
          </div>

          <h3 className={styles.listTitle} style={{ marginTop: '36px' }}>Education</h3>
          <div className={styles.timeline}>
            {education.map((e) => (
              <div key={e.degree} className={styles.timelineItem}>
                <div className={styles.timelineRole}>{e.degree}</div>
                <div className={styles.timelineCompany}>{e.school}</div>
                <div className={styles.timelineDate}>{e.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
