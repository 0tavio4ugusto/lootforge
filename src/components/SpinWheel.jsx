import styles from './SpinPanel.module.css'

const SIZE = 400
const MID = SIZE / 2
const EDGE = 190
const LABEL = 140

export const SECTOR_ANGLE = 360 / 20

function point(deg, radius) {
  const rad = (deg * Math.PI) / 180
  return [MID + radius * Math.sin(rad), MID - radius * Math.cos(rad)]
}

function wedge(index, total) {
  const step = 360 / total
  const [x1, y1] = point(index * step - step / 2, EDGE)
  const [x2, y2] = point(index * step + step / 2, EDGE)
  return `M ${MID} ${MID} L ${x1} ${y1} A ${EDGE} ${EDGE} 0 0 1 ${x2} ${y2} Z`
}

export function SpinWheel({ sectors, angle, duration, stop }) {
  return (
    <div className={styles.wheelWrap}>
      <div className={styles.pointer} aria-hidden="true" />
      <div
        className={styles.wheel}
        style={{
          transform: `rotate(${angle}deg)`,
          transitionDuration: `${duration}ms`,
        }}
      >
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label="Roleta de itens com 20 setores">
          <circle cx={MID} cy={MID} r={EDGE + 8} fill="#0a1223" stroke="var(--accent)" strokeWidth="4" />
          {sectors.map((item, index) => {
            const lit = stop === index
            const fill = item ? item.tone : index % 2 === 0 ? '#16213f' : '#0f1830'
            return (
              <g key={index}>
                <path
                  d={wedge(index, sectors.length)}
                  fill={fill}
                  stroke="#060b17"
                  strokeWidth="2"
                  opacity={stop === null || lit ? 1 : 0.55}
                />
                <g transform={`rotate(${index * SECTOR_ANGLE} ${MID} ${MID})`}>
                  <text
                    x={MID}
                    y={MID - LABEL}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={item ? styles.markWin : styles.markLose}
                  >
                    {item ? item.sigil : '✕'}
                  </text>
                </g>
              </g>
            )
          })}
          <circle cx={MID} cy={MID} r="34" fill="#0a1223" stroke="var(--accent)" strokeWidth="4" />
          <text x={MID} y={MID} textAnchor="middle" dominantBaseline="middle" className={styles.hub}>
            RO
          </text>
        </svg>
      </div>
    </div>
  )
}
