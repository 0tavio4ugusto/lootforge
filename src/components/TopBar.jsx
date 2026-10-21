import { brand } from '../data/catalog'
import styles from './TopBar.module.css'

export function TopBar() {
  return (
    <header className={styles.bar}>
      <p className={styles.logo}>{brand.name}</p>
      <nav className={styles.nav}>
        <a href="#perks">Vantagens</a>
        <a href="#como">Como funciona</a>
        <a href="#oferta">Oferta</a>
        <a href="#faq">FAQ</a>
        <a href="#girar" className={styles.cta}>
          Girar roleta
        </a>
      </nav>
    </header>
  )
}
