import styles from './Deal.module.css'

export function Deal({ children }) {
  return <div className={styles.box}>{children}</div>
}
