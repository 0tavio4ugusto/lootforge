import { brl } from '../utils/format'
import styles from './GearCard.module.css'

export function GearCard({ item }) {
  return (
    <article className={styles.card}>
      <div className={styles.sigil} style={{ background: item.tone }}>
        {item.sigil}
      </div>
      <p className={styles.rarity}>{item.rarity}</p>
      <h3>{item.name}</h3>
      <p>{item.flavor}</p>
      <strong>Resgate: R$ {brl(item.price)}</strong>
    </article>
  )
}
