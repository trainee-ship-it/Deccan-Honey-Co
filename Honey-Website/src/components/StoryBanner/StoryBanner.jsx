import styles from './StoryBanner.module.css'

function StoryBanner({
  id,
  eyebrow,
  title,
  text,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  imagePosition = 'right',
  variant = 'split',
}) {
  if (variant === 'overlay') {
    return (
      <section id={id} className={styles.overlaySection}>
        <img src={image} alt={imageAlt} loading="lazy" className={styles.overlayImage} />
        <div className={styles.overlayScrim} />
        <div className={styles.overlayContent}>
          {eyebrow && <p className={styles.overlayEyebrow}>{eyebrow}</p>}
          <h2 className={styles.overlayTitle}>{title}</h2>
          <p className={styles.overlayText}>{text}</p>
          {ctaLabel && (
            <a href={ctaHref} className={styles.overlayCta}>
              {ctaLabel}
            </a>
          )}
        </div>
      </section>
    )
  }

  return (
    <section id={id} className={styles.section}>
      <div
        className={`${styles.inner} ${imagePosition === 'right' ? styles.reverse : ''}`}
      >
        <div className={styles.media}>
          <img
            src={image}
            alt={imageAlt}
            width="600"
            height="480"
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          {ctaLabel && (
            <a href={ctaHref} className={styles.cta}>
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default StoryBanner
