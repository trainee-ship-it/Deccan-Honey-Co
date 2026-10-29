import { useMemo, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard.jsx'
import styles from './ProductListing.module.css'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]

function sortProducts(list, sortBy) {
  if (sortBy === 'price-asc') {
    return [...list].sort((a, b) => a.price - b.price)
  }
  if (sortBy === 'price-desc') {
    return [...list].sort((a, b) => b.price - a.price)
  }
  return list
}

function ProductListing({ title, description, products }) {
  const [sortBy, setSortBy] = useState('featured')
  const sortedProducts = useMemo(() => sortProducts(products, sortBy), [sortBy, products])

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className={styles.toolbar}>
          <p className={styles.count}>{sortedProducts.length} products</p>

          <label className={styles.sortLabel}>
            Sort by
            <select
              className={styles.sortSelect}
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <ul className={styles.grid}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProductListing
