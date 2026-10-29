import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ContactForm.module.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const nameId = useId()
  const emailId = useId()
  const phoneId = useId()
  const messageId = useId()

  function updateField(field, value) {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: '' }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}

    if (!values.name.trim()) nextErrors.name = 'Enter your name.'
    if (!values.email.trim()) {
      nextErrors.email = 'Enter your email address.'
    } else if (!EMAIL_PATTERN.test(values.email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!values.message.trim()) nextErrors.message = 'Enter a message.'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setErrors({})
    setSubmitted(true)
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Contact Us</span>
        </nav>

        <div className={styles.inner}>
          <h1 className={styles.title}>Send Us a Message</h1>
          <p className={styles.intro}>
            Questions about an order, a jar, or anything else — send us a message below,
            or write to us directly at{' '}
            <a href="mailto:hello@deccanhoney.co">hello@deccanhoney.co</a>.
          </p>

          {submitted ? (
            <p className={styles.success} role="status">
              Thanks for reaching out — we've received your message and will get back to
              you within 1–2 business days.
            </p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor={nameId} className="visually-hidden">
                    Name
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    placeholder="Name *"
                    value={values.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    aria-invalid={errors.name ? 'true' : undefined}
                    aria-describedby={errors.name ? `${nameId}-error` : undefined}
                    className={styles.input}
                  />
                  {errors.name && (
                    <p id={`${nameId}-error`} className={styles.error} role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor={emailId} className="visually-hidden">
                    Email
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    placeholder="Email *"
                    value={values.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    aria-invalid={errors.email ? 'true' : undefined}
                    aria-describedby={errors.email ? `${emailId}-error` : undefined}
                    className={styles.input}
                  />
                  {errors.email && (
                    <p id={`${emailId}-error`} className={styles.error} role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor={phoneId} className="visually-hidden">
                  Phone number
                </label>
                <input
                  id={phoneId}
                  type="tel"
                  placeholder="Phone number"
                  value={values.phone}
                  onChange={(event) => updateField('phone', event.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor={messageId} className="visually-hidden">
                  Message
                </label>
                <textarea
                  id={messageId}
                  placeholder="Message *"
                  rows={5}
                  value={values.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  aria-invalid={errors.message ? 'true' : undefined}
                  aria-describedby={errors.message ? `${messageId}-error` : undefined}
                  className={styles.textarea}
                />
                {errors.message && (
                  <p id={`${messageId}-error`} className={styles.error} role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className={styles.submit}>
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
