import { createContext, useContext, useMemo, useReducer, useState } from 'react'

const CartContext = createContext(null)

function cartReducer(items, action) {
  switch (action.type) {
    case 'add': {
      const { product, quantity = 1 } = action
      const existing = items.find((item) => item.id === product.id)
      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...items, { ...product, quantity }]
    }
    case 'remove':
      return items.filter((item) => item.id !== action.id)
    case 'setQuantity':
      return items
        .map((item) =>
          item.id === action.id ? { ...item, quantity: action.quantity } : item,
        )
        .filter((item) => item.quantity > 0)
    case 'clear':
      return []
    default:
      return items
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0,
    )

    return {
      items,
      itemCount,
      subtotal,
      addToCart: (product, quantity = 1) =>
        dispatch({ type: 'add', product, quantity }),
      removeFromCart: (id) => dispatch({ type: 'remove', id }),
      setQuantity: (id, quantity) => dispatch({ type: 'setQuantity', id, quantity }),
      clearCart: () => dispatch({ type: 'clear' }),
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }
  }, [items, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
