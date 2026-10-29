import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from '../Icons/Icons.jsx'
import styles from './FAQ.module.css'

const CATEGORIES = [
  {
    key: 'honey',
    label: 'Our Honey',
    questions: [
      {
        question: 'Is your honey raw and unprocessed?',
        answer:
          'Yes. Every jar is raw, unheated, and unblended — bottled exactly as harvested, with nothing added and nothing taken away.',
      },
      {
        question: 'Will my honey crystallise?',
        answer:
          "Yes, and that's a good sign. Raw honey naturally crystallises over time depending on its flower source — it hasn't gone bad. Stand the jar in a bowl of warm water to soften it again.",
      },
      {
        question: 'Where does your honey come from?',
        answer:
          "Our beekeepers follow the bloom across the Himalayan foothills, Kashmir's cave orchards, and India's wildflower meadows — each harvest carries the taste of wherever it was gathered.",
      },
      {
        question: 'Is your honey tested for purity?',
        answer:
          "Every batch is lab-tested for purity before it reaches a shelf, so you always know exactly what's in the jar.",
      },
    ],
  },
  {
    key: 'orders',
    label: 'Orders & Shipping',
    questions: [
      {
        question: 'How much does delivery cost?',
        answer: 'Delivery is free on orders over ₹999. Orders under that are charged a flat ₹49 shipping fee.',
      },
      {
        question: 'How long will my order take to arrive?',
        answer: 'Please allow 3–5 working days for delivery across India. Remote areas may take a little longer.',
      },
      {
        question: 'Can I track my order?',
        answer: "Yes — you'll receive a tracking link by email as soon as your order ships.",
      },
      {
        question: 'Do you ship outside India?',
        answer: 'Not yet — we currently deliver within India only.',
      },
    ],
  },
  {
    key: 'returns',
    label: 'Returns & Refunds',
    questions: [
      {
        question: "What's your returns policy?",
        answer:
          'Unopened jars can be returned within 14 days of delivery for a full refund. See our Returns page for the full details.',
      },
      {
        question: 'My jar arrived damaged — what do I do?',
        answer:
          "Contact us with a photo of the damage and your order number, and we'll send a replacement or refund right away.",
      },
      {
        question: 'How long do refunds take?',
        answer:
          'Once your return is received and inspected, refunds are processed within 5–7 working days to your original payment method.',
      },
    ],
  },
  {
    key: 'account',
    label: 'Account & Payments',
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit and debit cards, along with UPI.',
      },
      {
        question: 'Do I need an account to order?',
        answer:
          'No — you can check out as a guest. Creating an account just lets you track orders and save your details for next time.',
      },
      {
        question: 'Can I change or cancel my order?',
        answer:
          "Contact us within an hour of ordering and we'll do our best to update or cancel it before it ships.",
      },
    ],
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {question}
        <ChevronDownIcon
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
        />
      </button>
      {open && <p className={styles.answer}>{answer}</p>}
    </div>
  )
}

function FAQ() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].key)
  const active = CATEGORIES.find((category) => category.key === activeCategory)

  return (
    <section className={styles.section}>
      <div className="container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">FAQs</span>
        </nav>

        <div className={styles.heading}>
          <h1>Frequently Asked Questions</h1>
          <p>
            Answers to the questions we hear most — about our honey, your order, and
            what happens if something isn't right.
          </p>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="FAQ categories">
          {CATEGORIES.map((category) => (
            <button
              key={category.key}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.key}
              className={`${styles.tab} ${
                activeCategory === category.key ? styles.tabActive : ''
              }`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={styles.list} role="tabpanel">
          {active.questions.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
