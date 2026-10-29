import products from '../data/products.js'
import ProductListing from '../components/ProductListing/ProductListing.jsx'

const giftSets = products.filter((product) => product.category === 'gift-set')

export const GiftSets = () => (
  <ProductListing
    title="Gift Sets"
    description="Beautifully packaged jars, ready to give."
    products={giftSets}
  />
)
