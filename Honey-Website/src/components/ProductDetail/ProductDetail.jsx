import { useState } from 'react'
import { Link } from 'react-router-dom'
import products from '../../data/products.js'
import { useCart } from '../../context/CartContext.jsx'
import { ChevronDownIcon, MinusIcon, PlusIcon, StarIcon } from '../Icons/Icons.jsx'
import ProductCard from '../ProductCard/ProductCard.jsx'
import styles from './ProductDetail.module.css'

const CATEGORY_LINKS = {
  honey: { label: 'Raw & Infused', href: '/shop-raw-infused' },
  'gift-set': { label: 'Gift Sets', href: '/shop-gifts' },
}

const ACCORDION_SECTIONS = [
  { key: 'ingredients', label: 'Ingredients' },
  { key: 'directions', label: 'Directions' },
  { key: 'benefits', label: 'Benefits & Uses' },
]

function AccordionItem({ label, content }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.accordionItem}>
      <button
        type="button"
        className={styles.accordionTrigger}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {label}
        <ChevronDownIcon
          className={`${styles.accordionChevron} ${open ? styles.accordionChevronOpen : ''}`}
        />
      </button>
      {open && <p className={styles.accordionContent}>{content}</p>}
    </div>
  )
}

function ProductDetail({ product }) {
  const { addToCart, openCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const categoryLink = CATEGORY_LINKS[product.category]
  const roundedRating = Math.round(product.rating)

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3)

  function handleAddToCart() {
    addToCart(product, quantity)
    openCart()
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          {categoryLink && (
            <>
              <Link to={categoryLink.href}>{categoryLink.label}</Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className={styles.layout}>
          <div className={styles.imageWrap}>
            <img
              src={product.image}
              alt={product.name}
              width="600"
              height="600"
              className={styles.image}
            />
          </div>

          <div className={styles.info}>
            <h1 className={styles.name}>{product.name}</h1>

            <div
              className={styles.rating}
              aria-label={`Rated ${product.rating} out of 5 from ${product.reviewCount} reviews`}
            >
              <span className={styles.stars} aria-hidden="true">
                {Array.from({ length: 5 }, (_, position) => (
                  <StarIcon key={position} filled={position < roundedRating} />
                ))}
              </span>
              <span className={styles.reviewCount}>({product.reviewCount} reviews)</span>
            </div>

            <p className={styles.price}>₹{product.price.toLocaleString('en-IN')}</p>

            {product.size && <span className={styles.sizeTag}>{product.size}</span>}

            {product.description && (
              <p className={styles.description}>{product.description}</p>
            )}

            <div className={styles.quantityRow}>
              <span className={styles.quantityLabel}>Quantity</span>
              <div className={styles.stepper}>
                <button
                  type="button"
                  className={styles.stepperButton}
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  aria-label="Decrease quantity"
                >
                  <MinusIcon />
                </button>
                <span className={styles.stepperValue} aria-live="polite">
                  {quantity}
                </span>
                <button
                  type="button"
                  className={styles.stepperButton}
                  onClick={() => setQuantity((current) => current + 1)}
                  aria-label="Increase quantity"
                >
                  <PlusIcon />
                </button>
              </div>
            </div>

            <button type="button" className={styles.addButton} onClick={handleAddToCart}>
              Add to Cart
            </button>

            <div className={styles.accordionList}>
              {ACCORDION_SECTIONS.map((section) =>
                product[section.key] ? (
                  <AccordionItem
                    key={section.key}
                    label={section.label}
                    content={product[section.key]}
                  />
                ) : null,
              )}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className={styles.related}>
            <h2 className={styles.relatedHeading}>You May Also Like</h2>
            <ul className={styles.relatedGrid}>
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductDetail
