import { Link } from 'react-router-dom'
import { BadgeIcon, FacebookIcon, InstagramIcon } from '../Icons/Icons.jsx'
import styles from './Footer.module.css'

const LINK_GROUPS = [
  {
    heading: 'Shop',
    links: [
      { label: 'All Honey', href: '/shop-all' },
      { label: 'Gift Sets', href: '/shop-gifts' },
      { label: 'Raw & Infused', href: '#shop-infused' },
      { label: 'Honeycomb', href: '#shop-honeycomb' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'Meet the Bees', href: '#bees' },
      { label: 'How We Harvest', href: '#harvest' },
      { label: 'Sustainability', href: '#sustainability' },
      { label: 'Journal', href: '#journal' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'FAQs', href: '/faqs' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Shipping', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
    ],
  },
]

function FooterAnchor({ href, children }) {
  if (href.startsWith('/')) {
    return <Link to={href}>{children}</Link>
  }
  return <a href={href}>{children}</a>
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.wordmark}>
            Deccan Honey Co.
          </Link>
          <p className={styles.blurb}>
            Small-batch, raw honey hand-poured from our own hives. Real honey,
            straight from the hive to your table.
          </p>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.heading} className={styles.column}>
            <h3 className={styles.heading}>{group.heading}</h3>
            <ul className={styles.list}>
              {group.links.map((link) => (
                <li key={link.label}>
                  <FooterAnchor href={link.href}>{link.label}</FooterAnchor>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.trust}>
          <div className={styles.badge}>
            <BadgeIcon width={22} height={22} />
            <span>100% Real Honey, Guaranteed</span>
          </div>
          <div className={styles.social}>
            <a href="#facebook" aria-label="Deccan Honey Co. on Facebook" className={styles.socialLink}>
              <FacebookIcon />
            </a>
            <a href="#instagram" aria-label="Deccan Honey Co. on Instagram" className={styles.socialLink}>
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Deccan Honey Co. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
