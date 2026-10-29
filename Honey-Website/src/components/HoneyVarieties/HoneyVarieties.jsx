import { useState } from 'react'
import varieties from '../../data/varieties.js'
import { BadgeIcon, DropletIcon, HiveIcon, LeafIcon } from '../Icons/Icons.jsx'
import styles from './HoneyVarieties.module.css'

const TRUST_BADGES = [
  { Icon: DropletIcon, label: '100% Raw Honey' },
  { Icon: HiveIcon, label: 'Small-Batch Harvested' },
  { Icon: BadgeIcon, label: 'Lab-Tested Purity' },
  { Icon: LeafIcon, label: 'Zero Additives' },
]

function HoneyVarieties() {
  const [activeId, setActiveId] = useState(varieties[0].id)
  const active = varieties.find((variety) => variety.id === activeId) ?? varieties[0]

  function handleShopNow() {
    const target = document.getElementById(`product-${active.productId}`)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    target.classList.add('search-highlight')
    window.setTimeout(() => target.classList.remove('search-highlight'), 1600)
  }

  return (
    <section className={styles.section} aria-labelledby="varieties-heading">
      <div className="container">
        <div className={styles.heading}>
          <h2 id="varieties-heading">Which Honey Is Right for You?</h2>
          <p>Every jar has its own story, from wildflower meadows to warming winter spice.</p>
          <p className={styles.highlight}>A Spoonful of Pure, Small-Batch Honey</p>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Honey varieties">
          {varieties.map((variety) => (
            <button
              key={variety.id}
              type="button"
              role="tab"
              aria-selected={variety.id === activeId}
              style={{ '--tile-accent': variety.accent }}
              className={`${styles.tab} ${variety.id === activeId ? styles.tabActive : ''}`}
              onClick={() => setActiveId(variety.id)}
            >
              <span className={styles.tabInfo}>
                <HiveIcon className={styles.tabIcon} />
                <span className={styles.tabLabel}>{variety.label}</span>
              </span>
              <img src={variety.image} alt="" className={styles.tabImage} />
            </button>
          ))}
        </div>

        <div className={styles.panel} style={{ '--panel-accent': active.accent }}>
          <div key={active.id} className={styles.panelContent}>
            <h3 className={styles.panelTitle}>
              {active.label} Honey: {active.tagline}
            </h3>

            <ul className={styles.highlights}>
              {active.highlights.map((point) => (
                <li key={point.title}>
                  <strong>{point.title}:</strong> {point.text}
                </li>
              ))}
            </ul>

            <table className={styles.factsTable}>
              <thead>
                <tr>
                  {active.facts.map((fact) => (
                    <th key={fact.label} scope="col">
                      {fact.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {active.facts.map((fact) => (
                    <td key={fact.label}>{fact.value}</td>
                  ))}
                </tr>
              </tbody>
            </table>

            <p className={styles.note}>{active.note}</p>

            <button type="button" className={styles.shopButton} onClick={handleShopNow}>
              Shop Now
            </button>
          </div>

          <div key={`${active.id}-media`} className={styles.panelMedia}>
            <img src={active.heroImage} alt={active.heroImageAlt} className={styles.panelImage} />
            <ul className={styles.badgeRow}>
              {TRUST_BADGES.map(({ Icon, label }) => (
                <li key={label} className={styles.badge}>
                  <Icon width={20} height={20} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HoneyVarieties
