import { TopBar } from './components/TopBar'
import { Hero } from './components/Hero'
import { Perks } from './components/Perks'
import { GearCard } from './components/GearCard'
import { Process } from './components/Process'
import { Voices } from './components/Voices'
import { Deal } from './components/Deal'
import { SpinPanel } from './components/SpinPanel'
import { Faq } from './components/Faq'
import { SPIN_PRICE, brand, gear, perks, howItWorks, voices, faq } from './data/catalog'
import { brl } from './utils/format'
import styles from './App.module.css'

export function App() {
  const cheapest = Math.min(...gear.map((item) => item.price))
  const dearest = Math.max(...gear.map((item) => item.price))

  return (
    <>
      <TopBar />

      <main className={styles.page}>
        <Hero />

        <section id="perks" className={styles.block}>
          <h2>Vantagens e diferenciais</h2>
          <Perks items={perks} />
        </section>

        <section className={styles.block}>
          <h2>Itens da temporada</h2>
          <div className={styles.gearGrid}>
            {gear.map((item) => (
              <GearCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section id="como" className={styles.block}>
          <h2>Como funciona</h2>
          <Process steps={howItWorks} />
        </section>

        <section className={styles.block}>
          <h2>O que os jogadores dizem</h2>
          <Voices items={voices} />
        </section>

        <section id="oferta" className={styles.block}>
          <h2>Oferta da temporada</h2>
          <Deal>
            <p>
              Pacote inicial: depósito sugerido de <strong>R$ 50,00</strong>, o que rende até{' '}
              {Math.floor(50 / SPIN_PRICE)} giros com chance de resgate.
            </p>
            <p>
              Giro avulso: <strong>R$ {brl(SPIN_PRICE)}</strong> · Resgate dos itens: entre{' '}
              <strong>
                R$ {brl(cheapest)} e R$ {brl(dearest)}
              </strong>
            </p>
          </Deal>
        </section>

        <SpinPanel gear={gear} />

        <section id="faq" className={styles.block}>
          <h2>Perguntas frequentes</h2>
          <Faq items={faq} />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          {brand.name} · projeto acadêmico de demonstração. Nenhuma cobrança ou transação real é
          processada — todo o fluxo de depósito, giro e resgate acontece apenas no navegador.
        </p>
      </footer>
    </>
  )
}
