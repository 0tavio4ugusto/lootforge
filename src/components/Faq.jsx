import styles from './Faq.module.css'

export function Faq({ items }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <details key={item.question} className={styles.item}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
