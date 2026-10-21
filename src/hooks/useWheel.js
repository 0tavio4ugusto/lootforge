import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SPIN_PRICE, wheelMap } from '../data/catalog'
import { brl } from '../utils/format'

export const SECTOR_ANGLE = 360 / 20

const SPIN_MS = 5000
const TURNS = 6
const LOG_SIZE = 6

// Motor da roleta: cuida de saldo, giro, resultado e histórico.
// A animação só acompanha o ângulo calculado aqui.
export function useWheel(gearList) {
  const sectors = useMemo(
    () => wheelMap.map((name) => gearList.find((item) => item.name === name) ?? null),
    [gearList],
  )

  const [creditInput, setCreditInput] = useState('50')
  const [credit, setCredit] = useState(0)
  const [note, setNote] = useState('Coloque saldo para começar a girar.')
  const [held, setHeld] = useState(null)
  const [claimed, setClaimed] = useState([])
  const [log, setLog] = useState([])
  const [angle, setAngle] = useState(0)
  const [busy, setBusy] = useState(false)
  const [stop, setStop] = useState(null)
  const clock = useRef(null)

  useEffect(() => () => clearTimeout(clock.current), [])

  const addLog = useCallback((entry) => {
    setLog((prev) => [entry, ...prev].slice(0, LOG_SIZE))
  }, [])

  const deposit = (event) => {
    event.preventDefault()
    const amount = Number.parseFloat(creditInput.replace(',', '.'))
    if (Number.isNaN(amount) || amount <= 0) {
      setNote('Digite um valor de depósito válido.')
      return
    }
    setCredit((prev) => prev + amount)
    setNote(`Depósito confirmado: R$ ${brl(amount)}.`)
    setCreditInput('')
  }

  const spin = () => {
    if (busy) return

    if (held) {
      setNote('Você já ganhou um item. Quite o resgate antes de girar de novo.')
      return
    }
    if (credit < SPIN_PRICE) {
      setNote('Saldo insuficiente. Deposite para continuar.')
      return
    }

    // Sorteia o setor antes de animar e leva a roda até ele.
    const target = Math.floor(Math.random() * sectors.length)
    const jitter = (Math.random() - 0.5) * (SECTOR_ANGLE * 0.6)
    const goal = (((-target * SECTOR_ANGLE + jitter) % 360) + 360) % 360
    const now = ((angle % 360) + 360) % 360
    const travel = ((goal - now) % 360 + 360) % 360

    setCredit((prev) => prev - SPIN_PRICE)
    setBusy(true)
    setStop(null)
    setNote('Girando...')
    setAngle(angle + TURNS * 360 + travel)

    clock.current = setTimeout(() => {
      const prize = sectors[target]
      setBusy(false)
      setStop(target)

      if (!prize) {
        addLog({ label: 'Vazio', win: false })
        setNote('Nada no giro. O valor foi engolido pela roleta.')
        return
      }

      setHeld(prize)
      addLog({ label: prize.name, win: true })
      setNote(
        `Sorte! Você tirou ${prize.name}, mas precisa pagar R$ ${brl(prize.price)} para resgatar.`,
      )
    }, SPIN_MS)
  }

  const redeem = () => {
    if (!held || busy) return

    if (credit < held.price) {
      setNote(`Saldo baixo para o resgate. Faltam R$ ${brl(held.price - credit)}.`)
      return
    }

    setCredit((prev) => prev - held.price)
    setClaimed((prev) => [...prev, held])
    setNote(`Pagamento aprovado. ${held.name} foi para o seu inventário!`)
    setHeld(null)
  }

  const ready = credit >= SPIN_PRICE && !busy && !held

  return {
    creditInput,
    setCreditInput,
    credit,
    note,
    held,
    claimed,
    log,
    angle,
    busy,
    stop,
    ready,
    sectors,
    deposit,
    spin,
    redeem,
  }
}
