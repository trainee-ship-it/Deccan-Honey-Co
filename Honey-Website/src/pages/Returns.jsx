import PolicyPage from '../components/PolicyPage/PolicyPage.jsx'

export const Returns = () => (
  <PolicyPage
    title="Returns Policy"
    breadcrumbLabel="Returns"
    sections={[
      {
        heading: 'Unwanted Products',
        body: [
          'Unopened jars can be returned within 14 days of delivery for a full refund. The jar must be unused, in its original packaging, with proof of purchase included.',
          'Once we receive and inspect your return, refunds are processed within 5–7 working days to your original payment method.',
        ],
      },
      {
        heading: 'Faulty or Damaged Products',
        body: [
          "If your order arrives damaged or faulty, contact our team with a photo and your order number and we'll arrange a replacement or refund — no need to send anything back first.",
        ],
      },
      {
        heading: 'How to Start a Return',
        body: [
          "Email us at hello@deccanhoney.co with your order number and the reason for your return, and we'll guide you through the next steps.",
        ],
      },
    ]}
  />
)
