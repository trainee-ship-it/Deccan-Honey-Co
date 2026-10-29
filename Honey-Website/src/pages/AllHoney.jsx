import products from '../data/products.js'
import ProductListing from '../components/ProductListing/ProductListing.jsx'

export const AllHoney = () => (
  <ProductListing
    title="Shop All"
    description="Every jar we make, in one place — from everyday honey to gifting."
    products={products}
  />
)
