import { useId, useState } from 'react'
import styles from './Newsletter.module.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const inputId = useId()
  const errorId = useId()

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = email.trim()

    if (!trimmed) {
      setError('Enter your email address.')
      return
    }
    if (!EMAIL_PATTERN.test(trimmed)) {
      setError('Enter a valid email address.')
      return
    }

    setError('')
    setSubmitted(true)
  }

  return (
    <section className={styles.section} aria-labelledby="newsletter-heading">
      <div className={`container ${styles.inner}`}>
        <h2 id="newsletter-heading" className={styles.title}>
          Join the Hive
        </h2>
        <p className={styles.text}>
          Get first access to new flavours, seasonal harvests, and 10% off your next order.
        </p>

        {submitted ? (
          <p className={styles.success} role="status">
            Thanks for joining! Check your inbox to confirm your subscription.
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor={inputId} className="visually-hidden">
                Email address
              </label>
              <input
                id={inputId}
                type="email"
                name="email"
                placeholder="Your email address"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (error) setError('')
                }}
                aria-invalid={error ? 'true' : undefined}
                aria-describedby={error ? errorId : undefined}
                className={styles.input}
              />
              <button type="submit" className={styles.submit}>
                Subscribe
              </button>
            </div>
            {error && (
              <p id={errorId} className={styles.error} role="alert">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
