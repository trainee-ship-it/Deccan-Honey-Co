import { useEffect, useState } from 'react'
import styles from './AnnouncementBar.module.css'

const MESSAGES = [
  'Free UK delivery on orders over £30',
  'Small-batch honey, harvested with care',
  'Join the hive — 10% off your first order',
]

const ROTATE_MS = 5000

function AnnouncementBar() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(query.matches)
    const handleChange = (event) => setReducedMotion(event.matches)
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion || MESSAGES.length < 2) return undefined
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % MESSAGES.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [paused, reducedMotion])

  return (
    <div
      className={styles.bar}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`container ${styles.inner}`} role="status" aria-live="polite">
        <p key={index} className={styles.message}>
          {MESSAGES[index]}
        </p>
      </div>
    </div>
  )
}

export default AnnouncementBar
