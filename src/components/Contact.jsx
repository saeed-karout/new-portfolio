import { useReveal } from '../hooks/useReveal'
import { useForm, ValidationError } from '@formspree/react'
import { profile } from '../data/profile'
import { Icon, LinkedInIcon, WhatsAppIcon } from './Icons'
import styles from './Contact.module.css'

const channels = [
  { icon: <Icon name="mail" />,  label: 'Email',     value: profile.email,  href: `mailto:${profile.email}` },
  { icon: <WhatsAppIcon />,      label: 'WhatsApp',  value: profile.phone,  href: profile.whatsapp },
  { icon: <LinkedInIcon />,      label: 'LinkedIn',  value: 'Connect with me', href: profile.linkedin },
]

export default function Contact() {
  const ref = useReveal()
  const [state, handleSubmit] = useForm('mqkrbblk')

  return (
    <section id="contact" className="section">
      <div ref={ref} className={`container reveal ${styles.grid}`}>
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className={styles.lead}>
            I'm open to full-time and remote roles, as well as freelance projects.
            If you have a product to build or a team I could help, I'd be glad to hear from you.
          </p>

          <ul className={styles.channels}>
            {channels.map(c => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className={styles.channel}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <span className={styles.channelIcon}>{c.icon}</span>
                  <span>
                    <span className={styles.channelLabel}>{c.label}</span>
                    <span className={styles.channelValue}>{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className={styles.location}>
            <Icon name="pin" size={18} /> {profile.location}
          </p>
        </div>

        <div className={styles.formCard}>
          {state.succeeded ? (
            <div className={styles.success} role="status">
              <span className={styles.successIcon}><Icon name="check" size={26} /></span>
              <h3>Thank you — message sent!</h3>
              <p>I'll get back to you as soon as I can.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false}>
              <h3 className={styles.formTitle}>Send me a message</h3>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" name="name" type="text" autoComplete="name" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className={styles.error} />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.error} />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows={5} placeholder="Tell me a little about the role or project…" required />
                <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.error} />
              </div>

              <ValidationError errors={state.errors} className={styles.error} />

              <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={state.submitting}>
                {state.submitting ? 'Sending…' : <>Send message <Icon name="arrowRight" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
