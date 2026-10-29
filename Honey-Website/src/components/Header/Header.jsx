import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext.jsx'
import products from '../../data/products.js'
import {
  AccountIcon,
  CartIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
} from '../Icons/Icons.jsx'
import styles from './Header.module.css'

const NAV_LINKS = [
  {
    label: 'Shop',
    items: [
      { label: 'All Honey', href: '/shop-all' },
      { label: 'Gift Sets', href: '/shop-gifts' },
      { label: 'Raw & Infused', href: '#shop-infused' },
    ],
  },
  {
    label: 'Our Honey',
    items: [
      { label: 'Meet the Bees', href: '#bees' },
      { label: 'How We Harvest', href: '#harvest' },
      { label: 'Sustainability', href: '#sustainability' },
    ],
  },
  {
    label: 'Our Story',
    items: [
      { label: 'The Deccan Farm', href: '/the-deccan-farm' },
      { label: 'Our Promise', href: '/our-promise' },
    ],
  },
  { label: 'Journal', href: '#journal' },
]

// Renders a react-router Link for app routes ("/...") and a plain anchor for
// in-page hash links, since not every section has a real route yet.
function NavAnchor({ href, children, ...props }) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

function Header() {
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const navRef = useRef(null)
  const drawerRef = useRef(null)
  const menuButtonRef = useRef(null)
  const searchRef = useRef(null)
  const searchInputRef = useRef(null)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 4)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false)
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    if (!drawerOpen) return undefined
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [drawerOpen])

  useEffect(() => {
    if (!drawerOpen) return undefined
    const drawerNode = drawerRef.current
    const focusables = drawerNode.querySelectorAll('a[href], button:not([disabled])')
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    first?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeDrawer()
        return
      }
      if (event.key !== 'Tab' || focusables.length === 0) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen])

  function closeDrawer() {
    setDrawerOpen(false)
    setExpandedMobile(null)
    menuButtonRef.current?.focus()
  }

  function toggleSearch() {
    setSearchOpen((current) => !current)
    setOpenDropdown(null)
  }

  function goToProduct(product) {
    const target = document.getElementById(`product-${product.id}`)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' })
      target.classList.add('search-highlight')
      window.setTimeout(() => target.classList.remove('search-highlight'), 1600)
    }
    setSearchOpen(false)
    setQuery('')
  }

  const trimmedQuery = query.trim().toLowerCase()
  const results = trimmedQuery
    ? products.filter((product) => product.name.toLowerCase().includes(trimmedQuery))
    : []

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuButton}
          onClick={() => setDrawerOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={drawerOpen}
        >
          <MenuIcon />
          <span className="visually-hidden">Open menu</span>
        </button>

        <div className={styles.brandNav}>
          <Link to="/" className={styles.wordmark}>
            Deccan Honey Co.
          </Link>

          <nav className={styles.nav} ref={navRef} aria-label="Primary">
            <ul className={styles.navList}>
              {NAV_LINKS.map((link, index) =>
                link.items ? (
                  <li key={link.label} className={styles.navItem}>
                    <button
                      type="button"
                      className={styles.navButton}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === index}
                      onClick={() =>
                        setOpenDropdown((current) => (current === index ? null : index))
                      }
                    >
                      {link.label}
                      <ChevronDownIcon
                        className={`${styles.chevron} ${
                          openDropdown === index ? styles.chevronOpen : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`${styles.dropdown} ${
                        openDropdown === index ? styles.dropdownOpen : ''
                      }`}
                    >
                      <ul>
                        {link.items.map((item) => (
                          <li key={item.label}>
                            <NavAnchor href={item.href} onClick={() => setOpenDropdown(null)}>
                              {item.label}
                            </NavAnchor>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={link.label} className={styles.navItem}>
                    <a href={link.href} className={styles.navLink}>
                      {link.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div className={styles.actions}>
          <div className={styles.searchWrap} ref={searchRef}>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="Search"
              aria-haspopup="true"
              aria-expanded={searchOpen}
              onClick={toggleSearch}
            >
              <SearchIcon />
            </button>

            <div className={`${styles.searchPanel} ${searchOpen ? styles.searchPanelOpen : ''}`}>
              <form
                className={styles.searchForm}
                onSubmit={(event) => {
                  event.preventDefault()
                  if (results.length > 0) goToProduct(results[0])
                }}
              >
                <label htmlFor="site-search" className="visually-hidden">
                  Search products
                </label>
                <input
                  id="site-search"
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search honey, gifts, more…"
                  className={styles.searchInput}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </form>

              {trimmedQuery && (
                <ul className={styles.searchResults}>
                  {results.length > 0 ? (
                    results.map((product) => (
                      <li key={product.id}>
                        <button
                          type="button"
                          className={styles.searchResult}
                          onClick={() => goToProduct(product)}
                        >
                          <span>{product.name}</span>
                          <span className={styles.searchResultPrice}>
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                        </button>
                      </li>
                    ))
                  ) : (
                    <li className={styles.searchEmpty}>No products found for “{query}”.</li>
                  )}
                </ul>
              )}
            </div>
          </div>

          <a
            href="#account"
            className={`${styles.iconButton} ${styles.accountLink}`}
            aria-label="Account"
          >
            <AccountIcon />
          </a>
          <button
            type="button"
            className={styles.iconButton}
            aria-label={`Cart, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
            onClick={openCart}
          >
            <CartIcon />
            <span className={styles.badge} aria-hidden="true">
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {drawerOpen && (
        <div className={styles.overlay} onClick={closeDrawer}>
          <div
            className={styles.drawer}
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.drawerHeader}>
              <span className={styles.drawerWordmark}>Deccan Honey Co.</span>
              <button
                type="button"
                className={styles.iconButton}
                onClick={closeDrawer}
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            <ul className={styles.drawerList}>
              {NAV_LINKS.map((link, index) =>
                link.items ? (
                  <li key={link.label}>
                    <button
                      type="button"
                      className={styles.drawerButton}
                      aria-expanded={expandedMobile === index}
                      onClick={() =>
                        setExpandedMobile((current) => (current === index ? null : index))
                      }
                    >
                      {link.label}
                      <ChevronDownIcon
                        className={`${styles.chevron} ${
                          expandedMobile === index ? styles.chevronOpen : ''
                        }`}
                      />
                    </button>
                    {expandedMobile === index && (
                      <ul className={styles.drawerSubList}>
                        {link.items.map((item) => (
                          <li key={item.label}>
                            <NavAnchor href={item.href} onClick={closeDrawer}>
                              {item.label}
                            </NavAnchor>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.label}>
                    <a href={link.href} className={styles.drawerLink} onClick={closeDrawer}>
                      {link.label}
                    </a>
                  </li>
                ),
              )}
            </ul>

            <div className={styles.drawerFooter}>
              <a href="#account" onClick={closeDrawer}>
                <AccountIcon />
                Account
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
