import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '../Icons/Icons.jsx'
import heroHoneyJar from '../../assets/hero-honey-jar.png'
import heroGiftSet from '../../assets/hero-gift-set.png'
import heroHoneycombDrizzle from '../../assets/hero-honeycomb-drizzle.png'
import styles from './Hero.module.css'

const SLIDES = [
  {
    eyebrow: 'New Season',
    headline: 'Pure Honey, Straight From the Hive',
    subtext: 'Small-batch, raw honey harvested with care from wildflower meadows.',
    ctaLabel: 'Shop the Collection',
    ctaHref: '#shop-all',
    image: heroHoneyJar,
    imageAlt: 'Jar of Deccan Honey Co. raw honey with a wooden dipper',
  },
  {
    eyebrow: 'Gifting',
    headline: 'Give the Gift of Golden Honey',
    subtext: 'Beautifully packaged gift sets for every honey lover on your list.',
    ctaLabel: 'Explore Gift Sets',
    ctaHref: '#shop-gifts',
    image: heroGiftSet,
    imageAlt: 'Deccan Honey Co. gift set wrapped and ready to give',
  },
  {
    eyebrow: 'Our Craft',
    headline: 'Taste the Difference of Raw Honey',
    subtext: 'Unfiltered, unheated, and bursting with natural flavour in every spoonful.',
    ctaLabel: 'Learn Our Process',
    ctaHref: '#harvest',
    image: heroHoneycombDrizzle,
    imageAlt: 'Raw honeycomb dripping with golden honey',
  },
]

const ROTATE_MS = 6000

function Hero() {
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
    if (paused || reducedMotion || SLIDES.length < 2) return undefined
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [paused, reducedMotion])

  function goTo(nextIndex) {
    setIndex((nextIndex + SLIDES.length) % SLIDES.length)
  }

  const slide = SLIDES[index]

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Featured"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        key={index}
        className={styles.slide}
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${SLIDES.length}`}
      >
        <img
          src={slide.image}
          alt={slide.imageAlt}
          width="1920"
          height="1000"
          className={styles.bgImage}
        />
        <div className={styles.scrim} />

        <div className={`container ${styles.content}`}>
          <p className={styles.eyebrow}>{slide.eyebrow}</p>
          <h1 className={styles.headline}>{slide.headline}</h1>
          <p className={styles.subtext}>{slide.subtext}</p>
          <a href={slide.ctaHref} className={styles.cta}>
            {slide.ctaLabel}
          </a>
        </div>
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowPrev}`}
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
      >
        <ChevronDownIcon className={styles.arrowIconLeft} />
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowNext}`}
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
      >
        <ChevronDownIcon className={styles.arrowIconRight} />
      </button>

      <div className={styles.dots} role="tablist" aria-label="Slides">
        {SLIDES.map((item, dotIndex) => (
          <button
            key={item.headline}
            type="button"
            role="tab"
            aria-selected={dotIndex === index}
            aria-label={`Go to slide ${dotIndex + 1}`}
            className={`${styles.dot} ${dotIndex === index ? styles.dotActive : ''}`}
            onClick={() => goTo(dotIndex)}
          />
        ))}
      </div>

      <p className="visually-hidden" role="status" aria-live="polite">
        Slide {index + 1} of {SLIDES.length}: {slide.headline}
      </p>
    </section>
  )
}

export default Hero
