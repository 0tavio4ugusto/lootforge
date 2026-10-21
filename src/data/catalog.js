export const SPIN_PRICE = 12

export const brand = {
  name: 'Rolaria',
  tagline: 'A roleta mais desconfiada de Vhaldros Online',
  pitch:
    'Coloque saldo na carteira, gire a roleta e dispute skins de coleção. Se o giro sair vazio, o valor evaporou. Se sair skin, você ainda desembolsa o valor de resgate dela. Nada de letras miúdas: é risco na mesa, e você vê tudo antes de girar.',
}

export const perks = [
  {
    title: 'Zero tempo de farm',
    text: 'Nada de 30 horas de raid. Aqui você queima dinheiro em poucos segundos, com estilo.',
  },
  {
    title: 'Coleção só de evento',
    text: 'Visuais glacial, eclipse e prisma que não aparecem em nenhuma loja comum do jogo.',
  },
  {
    title: 'Regra do risco limpa',
    text: 'Para girar você paga. Para levar a skin, paga de novo. Simples e sem surpresa.',
  },
  {
    title: 'Experiência teatral',
    text: 'Giro animado, resultado na hora e um registro da sua sorte (ou da sua queda).',
  },
]

export const gear = [
  {
    name: 'Manto Aurora Glacial',
    rarity: 'Mítica',
    flavor: 'Bordado em gelo eterno com brilho que muda conforme o ângulo.',
    price: 64,
    sigil: 'AG',
    tone: '#2fd8c6',
  },
  {
    name: 'Lança do Eclipse Carmesim',
    rarity: 'Lendária',
    flavor: 'Lâmina tingida pela luz de dois sóis em conluio.',
    price: 78,
    sigil: 'EC',
    tone: '#8b7cf6',
  },
  {
    name: 'Adaga Circuito Prisma',
    rarity: 'Épica',
    flavor: 'Pulso de energia prismática para combates na penumbra.',
    price: 41,
    sigil: 'CP',
    tone: '#e05cc4',
  },
  {
    name: 'Escudo Maré de Obsidiana',
    rarity: 'Rara',
    flavor: 'Superfície vulcânica que ondula como água escura.',
    price: 33,
    sigil: 'MO',
    tone: '#4c9df0',
  },
]

// 20 setores na roleta: 7 com item e 13 vazios (7/20 = 35% de chance por giro).
// Itens mais raros ocupam menos setores.
export const wheelMap = [
  null, null, 'Escudo Maré de Obsidiana', null, null,
  'Adaga Circuito Prisma', null, null, 'Manto Aurora Glacial', null,
  null, 'Escudo Maré de Obsidiana', null, null, 'Lança do Eclipse Carmesim',
  null, null, 'Adaga Circuito Prisma', null, 'Escudo Maré de Obsidiana',
]

export const howItWorks = [
  'Coloque saldo na carteira da roleta.',
  'Cada giro custa R$ 12,00 e sai do saldo na hora.',
  'Se nada aparecer, o valor do giro foi perdido.',
  'Se aparecer skin, pague o valor dela para resgatar.',
]

export const voices = [
  {
    player: 'Kael, guilda Aurora',
    quote: 'Seis giros seguidos sem nada. A sensação autêntica de MMO.',
  },
  {
    player: 'Vhysa, reino Solis',
    quote: 'Ganhei a skin e tive que pagar de novo para pegar. Economia em frangalhos, nota 10.',
  },
  {
    player: 'Nyx, corredora de mapas',
    quote: 'Visual impecável, regras absurdas, interface perfeita para sofrer sorrindo.',
  },
]

export const faq = [
  {
    question: 'Por que pago para girar e para resgatar?',
    answer:
      'O giro compra o direito de tentar a sorte; o resgate é a taxa de entrega da skin. São duas cobranças, e as duas aparecem antes de você girar.',
  },
  {
    question: 'Consigo sacar o saldo que depositei?',
    answer:
      'Não. Depois de depositado, o valor vira saldo de giro e não pode ser sacado.',
  },
  {
    question: 'O saldo expira?',
    answer:
      'Não expira. Mas, com esta roleta, ele costuma acabar bem antes disso.',
  },
  {
    question: 'A chance de prêmio é transparente?',
    answer:
      'Sim. A roleta tem 20 setores, e 7 deles têm item. Isso dá 35% de chance de prêmio por giro.',
  },
]
