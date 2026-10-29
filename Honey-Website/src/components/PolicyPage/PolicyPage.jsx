import { Link } from 'react-router-dom'
import styles from './PolicyPage.module.css'

function PolicyPage({ title, breadcrumbLabel, intro, sections }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{breadcrumbLabel}</span>
        </nav>

        <h1 className={styles.title}>{title}</h1>
        {intro && <p className={styles.intro}>{intro}</p>}

        <div className={styles.sections}>
          {sections.map((section) => (
            <div key={section.heading} className={styles.block}>
              <h2 className={styles.heading}>{section.heading}</h2>
              {section.body.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PolicyPage
