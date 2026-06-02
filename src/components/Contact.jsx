import { useReveal } from '../hooks/useReveal'
import { useForm, ValidationError } from '@formspree/react'
import styles from './Contact.module.css'

const contactItems = [
  { icon: '✉', label: 'Email',             value: 'mohamadsaeedkarout@gmail.com' },
  { icon: '📞', label: 'Phone / WhatsApp', value: '+963 957 608 833' },
  { icon: '📍', label: 'Location',         value: 'Damascus, Syria · Remote Worldwide' },
]

export default function Contact() {
  const ref = useReveal()
  const [state, handleSubmit] = useForm("mqkrbblk")

  return (
    <section id="contact" ref={ref} className={`section-wrapper reveal ${styles.contact}`}>
      <div className={`section-header ${styles.header}`}>
        <span className="section-num">03 //</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
      </div>

      <div className={styles.inner}>
        {/* Info side */}
        <div className={styles.info}>
          <h2 className={styles.bigText}>
            LET'S <span className={styles.bigOutline}>WORK</span>
          </h2>
          <p className={styles.subText}>
            Available for freelance projects, full-time positions, and collaborations.
            Let's build something extraordinary together.
          </p>

          <div className={styles.items}>
            {contactItems.map(item => (
              <div key={item.label} className={`${styles.item} hoverable`}>
                <span className={styles.itemIcon}>{item.icon}</span>
                <div>
                  <strong className={styles.itemLabel}>{item.label}</strong>
                  <span className={styles.itemValue}>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form side */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Your Name</label>
            <input 
              className={styles.input} 
              type="text" 
              name="name"
              placeholder="John Doe" 
              required 
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input 
              className={styles.input} 
              type="email" 
              name="email"
              placeholder="john@example.com" 
              required 
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Message</label>
            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          
          <button
            type="submit"
            disabled={state.submitting}
            className={`${styles.submit} hoverable`}
            style={state.succeeded ? { background: '#10b981' } : {}}
          >
            {state.submitting 
              ? 'Submitting...' 
              : state.succeeded 
                ? 'Message Sent ✓' 
                : 'Send Message →'
            }
          </button>

          {state.succeeded && (
            <div className={styles.successMessage}>
              ✓ Your message has been sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  )
}