import { profile, intro, stats } from '../data/profile'
import { Icon, GitHubIcon, LinkedInIcon } from './Icons'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.status}>
            {/* <span className={styles.dot} aria-hidden="true" /> */}
            {profile.status}
          </p>

          <h1 className={styles.title}>
            Hi, I'm {profile.name.split(' ')[0]}.
            <span className={styles.titleSub}>
              I build web applications <em>end to end</em> — from the API to the interface.
            </span>
          </h1>

          <p className={styles.intro}>{intro}</p>

          <div className={styles.ctas}>
            <a href="#projects" className="btn btn-primary">
              View my work <Icon name="arrowRight" />
            </a>
            {profile.cvUrl ? (
              <a href={profile.cvUrl} className="btn btn-secondary" download>
                <Icon name="download" /> Download CV
              </a>
            ) : (
              <a href="#contact" className="btn btn-secondary">Contact me</a>
            )}
          </div>
        </div>

        <aside className={styles.card} aria-label="Profile summary">
          <div className={styles.cardTop}>
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} className={styles.avatar} width="88" height="88" fetchpriority="high" />
            ) : (
              <span className={styles.avatar} aria-hidden="true">{profile.initials}</span>
            )}
            <div>
              <p className={styles.cardName}>{profile.name}</p>
              <p className={styles.cardRole}>{profile.role}</p>
            </div>
          </div>

          <dl className={styles.facts}>
            <div>
              <dt>Now</dt>
              <dd>Founder & CEO, <a href="https://shamstores.com/" target="_blank" rel="noreferrer">Sham Stores</a></dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>Node.js · Express · MySQL · React.js</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>

          <div className={styles.socials}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GitHubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedInIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email"><Icon name="mail" /></a>
          </div>
        </aside>
      </div>

      <div className="container">
        <ul className={styles.stats}>
          {stats.map(s => (
            <li key={s.label}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
