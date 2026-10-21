import styles from './Perks.module.css'

export function Perks({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <article key={item.title} className={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  )
}
