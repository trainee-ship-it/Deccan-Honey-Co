import { Navigate, useParams } from 'react-router-dom'
import products from '../data/products.js'
import ProductDetail from '../components/ProductDetail/ProductDetail.jsx'

export const ProductDetailPage = () => {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)

  if (!product) {
    return <Navigate to="/shop-all" replace />
  }

  // Keyed on the product id so navigating between products (a param change on
  // the same route) remounts the page — otherwise quantity and open accordions
  // would carry over from the previous product instead of resetting.
  return <ProductDetail key={product.id} product={product} />
}
