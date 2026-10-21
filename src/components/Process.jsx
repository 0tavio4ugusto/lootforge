import styles from './Process.module.css'

export function Process({ steps }) {
  return (
    <ol className={styles.steps}>
      {steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  )
}
