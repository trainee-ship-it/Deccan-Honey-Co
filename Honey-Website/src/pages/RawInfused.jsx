import products from '../data/products.js'
import ProductListing from '../components/ProductListing/ProductListing.jsx'

const rawInfused = products.filter((product) => product.category === 'honey')

export const RawInfused = () => (
  <ProductListing
    title="Raw & Infused"
    description="Raw, unheated honey and our naturally infused blends."
    products={rawInfused}
  />
)
