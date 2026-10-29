import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import { AllHoney } from './pages/AllHoney.jsx'
import { GiftSets } from './pages/GiftSets.jsx'
import { RawInfused } from './pages/RawInfused.jsx'
import { TheDeccanFarm } from './pages/TheDeccanFarm.jsx'
import { OurPromise } from './pages/OurPromise.jsx'
import { ProductDetailPage } from './pages/ProductDetail.jsx'
import { FAQs } from './pages/FAQs.jsx'
import { Contact } from './pages/Contact.jsx'
import { Shipping } from './pages/Shipping.jsx'
import { Returns } from './pages/Returns.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'shop-all', element: <AllHoney /> },
      { path: 'shop-gifts', element: <GiftSets /> },
      { path: 'shop-raw-infused', element: <RawInfused /> },
      { path: 'products/:id', element: <ProductDetailPage /> },
      { path: 'the-deccan-farm', element: <TheDeccanFarm /> },
      { path: 'our-promise', element: <OurPromise /> },
      { path: 'faqs', element: <FAQs /> },
      { path: 'contact', element: <Contact /> },
      { path: 'shipping', element: <Shipping /> },
      { path: 'returns', element: <Returns /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
