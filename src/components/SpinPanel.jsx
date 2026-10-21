import { SPIN_PRICE } from '../data/catalog'
import { brl } from '../utils/format'
import { useWheel } from '../hooks/useWheel'
import { SpinWheel } from './SpinWheel'
import styles from './SpinPanel.module.css'

const SPIN_MS = 5000

export function SpinPanel({ gear }) {
  const wheel = useWheel(gear)

  const inventory = wheel.claimed.length
    ? wheel.claimed.map((item) => item.name).join(' · ')
    : 'Nenhum item resgatado ainda.'

  return (
    <section className={styles.panel} id="girar">
      <h2>Gire a roleta agora</h2>
      <p>
        Cada giro custa <strong>R$ {brl(SPIN_PRICE)}</strong>. Se cair um item, o resgate é cobrado à
        parte.
      </p>

      <div className={styles.layout}>
        <SpinWheel
          sectors={wheel.sectors}
          angle={wheel.angle}
          duration={wheel.busy ? SPIN_MS : 0}
          stop={wheel.stop}
        />

        <div className={styles.side}>
          <div className={styles.wallet}>
            <p>
              Saldo atual: <strong>R$ {brl(wheel.credit)}</strong>
            </p>
            <form onSubmit={wheel.deposit} className={styles.creditForm}>
              <input
                type="number"
                min="1"
                step="0.01"
                value={wheel.creditInput}
                onChange={(event) => wheel.setCreditInput(event.target.value)}
                placeholder="Valor do depósito"
                aria-label="Valor do depósito"
              />
              <button type="submit" disabled={wheel.busy}>
                Depositar
              </button>
            </form>
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={wheel.spin} disabled={wheel.busy}>
              {wheel.busy ? 'Girando...' : `Girar (R$ ${brl(SPIN_PRICE)})`}
            </button>
            {wheel.held && (
              <button
                type="button"
                className={styles.ghost}
                onClick={wheel.redeem}
                disabled={wheel.busy}
              >
                Pagar resgate: R$ {brl(wheel.held.price)}
              </button>
            )}
          </div>

          <div className={styles.feedback} aria-live="polite">
            <p>{wheel.note}</p>
            <p>
              <strong>Inventário:</strong> {inventory}
            </p>
            {wheel.log.length > 0 && (
              <div className={styles.log}>
                <strong>Últimos giros:</strong>
                <ul>
                  {wheel.log.map((entry, index) => (
                    <li key={index} className={entry.win ? styles.logWin : styles.logLose}>
                      {entry.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {!wheel.ready && !wheel.busy && !wheel.held && wheel.credit < SPIN_PRICE && (
            <small className={styles.hint}>
              Você precisa de pelo menos R$ {brl(SPIN_PRICE)} para girar.
            </small>
          )}
        </div>
      </div>
    </section>
  )
}
