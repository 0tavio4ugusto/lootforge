import { brand } from '../data/catalog'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.kicker}>{brand.tagline}</p>
      <h1>{brand.name}</h1>
      <p className={styles.pitch}>{brand.pitch}</p>
      <a href="#girar" className={styles.button}>
        Quero girar agora
      </a>
    </section>
  )
}
