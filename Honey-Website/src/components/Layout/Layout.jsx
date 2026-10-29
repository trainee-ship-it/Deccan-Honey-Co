import { Outlet } from 'react-router-dom'
import AnnouncementBar from '../AnnouncementBar/AnnouncementBar.jsx'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import CartDrawer from '../CartDrawer/CartDrawer.jsx'
import styles from './Layout.module.css'

function Layout() {
  return (
    <div className={styles.page}>
      <AnnouncementBar />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
