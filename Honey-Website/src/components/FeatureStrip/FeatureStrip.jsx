import { DropletIcon, HiveIcon, LeafIcon, TruckIcon } from '../Icons/Icons.jsx'
import styles from './FeatureStrip.module.css'

const FEATURES = [
  {
    Icon: DropletIcon,
    title: '100% Raw & Unfiltered',
    text: 'Nothing added, nothing taken away — just honey as the bees made it.',
  },
  {
    Icon: HiveIcon,
    title: 'Small-Batch Harvested',
    text: 'Hand-poured in limited batches from our own hives.',
  },
  {
    Icon: LeafIcon,
    title: 'Sustainably Sourced',
    text: 'Every jar supports pollinator-friendly farming practices.',
  },
  {
    Icon: TruckIcon,
    title: 'Free UK Delivery',
    text: 'Free shipping on all orders over £30.',
  },
]

function FeatureStrip() {
  return (
    <section className={styles.section} aria-label="Why choose Deccan Honey Co.">
      <div className={`container ${styles.grid}`}>
        {FEATURES.map(({ Icon, title, text }) => (
          <div key={title} className={styles.feature}>
            <span className={styles.iconWrap}>
              <Icon width={28} height={28} />
            </span>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureStrip
