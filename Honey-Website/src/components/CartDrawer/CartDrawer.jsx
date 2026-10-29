import { useEffect, useRef } from 'react'
import { useCart } from '../../context/CartContext.jsx'
import { CloseIcon, MinusIcon, PlusIcon, TrashIcon } from '../Icons/Icons.jsx'
import styles from './CartDrawer.module.css'

function CartDrawer() {
  const { items, itemCount, subtotal, isCartOpen, closeCart, setQuantity, removeFromCart } =
    useCart()
  const drawerRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!isCartOpen) return undefined
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [isCartOpen])

  useEffect(() => {
    if (!isCartOpen) return undefined
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeCart()
        return
      }
      if (event.key !== 'Tab') return
      const focusables = drawerRef.current?.querySelectorAll(
        'a[href], button:not([disabled])',
      )
      if (!focusables || focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isCartOpen, closeCart])

  if (!isCartOpen) return null

  return (
    <div className={styles.overlay} onClick={closeCart}>
      <div
        className={styles.drawer}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Your cart"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>
            Your Cart{itemCount > 0 && <span className={styles.count}> ({itemCount})</span>}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={closeCart}
            aria-label="Close cart"
          >
            <CloseIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p>Your cart is empty.</p>
            <button type="button" className={styles.continueButton} onClick={closeCart}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item.id} className={styles.item}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="72"
                    height="72"
                    className={styles.itemImage}
                  />
                  <div className={styles.itemBody}>
                    <div className={styles.itemHeadRow}>
                      <p className={styles.itemName}>{item.name}</p>
                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <TrashIcon />
                      </button>
                    </div>
                    {item.size && <span className={styles.itemSize}>{item.size}</span>}
                    <div className={styles.itemFootRow}>
                      <div className={styles.stepper}>
                        <button
                          type="button"
                          className={styles.stepperButton}
                          onClick={() => setQuantity(item.id, item.quantity - 1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <MinusIcon />
                        </button>
                        <span className={styles.stepperValue} aria-live="polite">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          className={styles.stepperButton}
                          onClick={() => setQuantity(item.id, item.quantity + 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <PlusIcon />
                        </button>
                      </div>
                      <p className={styles.itemPrice}>
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.footer}>
              <div className={styles.subtotalRow}>
                <span>Subtotal</span>
                <span className={styles.subtotalValue}>
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>
              <button type="button" className={styles.checkoutButton} disabled>
                Checkout — Coming Soon
              </button>
              <button type="button" className={styles.continueLink} onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartDrawer
