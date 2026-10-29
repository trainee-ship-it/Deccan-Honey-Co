import PolicyPage from '../components/PolicyPage/PolicyPage.jsx'

export const Shipping = () => (
  <PolicyPage
    title="Shipping"
    breadcrumbLabel="Shipping"
    sections={[
      {
        heading: 'Delivery Across India',
        body: [
          'We currently ship across India. Delivery is free on orders over ₹999 — orders under that are charged a flat ₹49 shipping fee.',
          'Please allow 3–5 working days for delivery. Remote areas may take a little longer.',
        ],
      },
      {
        heading: 'Tracking Your Order',
        body: [
          "You'll receive a shipping confirmation email with a tracking link as soon as your order leaves our warehouse.",
        ],
      },
      {
        heading: 'Packaging',
        body: [
          "Every jar is cushioned and boxed to travel safely. If anything arrives damaged, contact us with a photo and your order number and we'll sort it right away.",
        ],
      },
    ]}
  />
)
