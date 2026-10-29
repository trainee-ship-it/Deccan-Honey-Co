import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import { StarIcon } from '../Icons/Icons.jsx'
import styles from './ProductCard.module.css'

function ProductCard({ product }) {
  const { addToCart, openCart } = useCart()
  const [justAdded, setJustAdded] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  function handleAddToCart() {
    addToCart(product)
    openCart()
    setJustAdded(true)
    timeoutRef.current = window.setTimeout(() => setJustAdded(false), 1500)
  }

  const roundedRating = Math.round(product.rating)

  return (
    <li id={`product-${product.id}`} className={styles.card}>
      <Link to={`/products/${product.id}`} className={styles.cardLink}>
        <div className={styles.imageWrap}>
          <img
            src={product.image}
            alt={product.name}
            width="400"
            height="400"
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.body}>
          <h3 className={styles.name}>{product.name}</h3>

          <div
            className={styles.rating}
            aria-label={`Rated ${product.rating} out of 5 from ${product.reviewCount} reviews`}
          >
            <span className={styles.stars} aria-hidden="true">
              {Array.from({ length: 5 }, (_, position) => (
                <StarIcon key={position} filled={position < roundedRating} />
              ))}
            </span>
            <span className={styles.reviewCount}>({product.reviewCount})</span>
          </div>

          <p className={styles.price}>
            ₹{product.price.toLocaleString('en-IN')}
          </p>

          {product.size && <span className={styles.sizeTag}>{product.size}</span>}
        </div>
      </Link>

      <div className={styles.footer}>
        <button
          type="button"
          className={`${styles.addButton} ${justAdded ? styles.added : ''}`}
          onClick={handleAddToCart}
        >
          {justAdded ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
    </li>
  )
}

export default ProductCard
