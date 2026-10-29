import { Link } from 'react-router-dom'
import categories from '../../data/categories.js'
import styles from './CategoryTiles.module.css'

function CategoryAnchor({ href, children, className }) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

function CategoryTiles() {
  return (
    <section className={styles.section} aria-labelledby="category-heading">
      <div className="container">
        <div className={styles.heading}>
          <h2 id="category-heading">Shop by Collection</h2>
          <p>Find the honey that fits the moment, from everyday jars to gifting.</p>
        </div>

        <ul className={styles.grid}>
          {categories.map((category) => (
            <li key={category.id}>
              <CategoryAnchor href={category.href} className={styles.card}>
                <img
                  src={category.image}
                  alt=""
                  width="400"
                  height="400"
                  loading="lazy"
                  className={styles.image}
                />
                <span className={styles.label}>{category.label}</span>
              </CategoryAnchor>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CategoryTiles
