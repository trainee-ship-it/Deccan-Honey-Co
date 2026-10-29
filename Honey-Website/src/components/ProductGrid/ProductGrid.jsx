import products from '../../data/products.js'
import ProductCard from '../ProductCard/ProductCard.jsx'
import styles from './ProductGrid.module.css'

function ProductGrid() {
  return (
    <section className={styles.section} aria-labelledby="product-grid-heading">
      <div className="container">
        <div className={styles.heading}>
          <h2 id="product-grid-heading">Best Sellers</h2>
          <p>Our most-loved jars, hand-filled in small batches.</p>
        </div>

        <ul className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ProductGrid
