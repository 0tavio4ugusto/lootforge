import styles from './Voices.module.css'

export function Voices({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((voice) => (
        <article key={voice.player} className={styles.card}>
          <p>“{voice.quote}”</p>
          <strong>{voice.player}</strong>
        </article>
      ))}
    </div>
  )
}
