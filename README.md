# Rolaria

## Autor

- Otavio Augusto

Rolaria é uma landing page inspirada em MMOs: uma roleta de itens de coleção em tom de sátira sobre monetização agressiva em jogos.

No produto, o usuário deposita saldo, paga para girar e pode perder tudo no giro. Se ganhar um item, ainda precisa pagar o valor de resgate dele. A ideia é representar uma mecânica propositalmente injusta, com foco em experiência visual e navegação.

A roleta tem 20 setores, sendo 7 com item, o que dá 35% de chance de prêmio por giro. O resultado é sorteado e a roda é animada até o setor sorteado.

> Projeto acadêmico: nenhuma cobrança ou transação real é processada. Todo o fluxo de depósito, giro e resgate acontece apenas no navegador.

## Arquitetura escolhida

O projeto foi organizado por responsabilidade, separando dados, lógica e apresentação em pastas distintas do `src`:

- `components`: peças de interface reutilizáveis (topo, hero, cards, painel da roleta, FAQ).
- `hooks`: lógica da roleta isolada em um hook custom (`useWheel`), que cuida de saldo, giro, resultado e histórico.
- `data`: conteúdo e configurações do produto (marca, itens, textos, mapa da roleta).
- `utils`: utilitários de formatação.
- `styles`/módulos CSS: estilos globais e estilos por componente via CSS Modules.

A intenção foi manter a lógica de jogo separada da renderização, para que o componente da roleta só se preocupe em desenhar e animar.

## Jornada de construção

### Ideia inicial

A ideia inicial era criar uma landing page de venda de item premium com CTA de compra.

Durante o planejamento, o conceito evoluiu para uma proposta mais criativa: uma roleta que cobra no giro e no resgate, em tom de sátira sobre monetização agressiva em jogos.

Alternativas consideradas:

- Loja direta de itens;
- Cobrança avulsa de itens;
- Roleta de itens com risco e perda de saldo (escolha final).

### Pesquisa e referências

Foram analisadas referências de:

- Landing pages de jogos com destaque para hero section forte;
- Interfaces de loja in-game;
- Estruturas de páginas de conversão com FAQ e prova social.

Elementos aproveitados:

- Hero com título grande e CTA claro;
- Cards para benefícios e itens;
- Bloco de oferta/preço;

### Ferramentas utilizadas

- React
- Vite
- CSS Modules
- VS Code
- GitHub

### Uso de IA

Ferramentas de IA foram usadas como apoio durante o desenvolvimento, principalmente para:

- Brainstorm inicial de estrutura e organização do projeto;
- Sugestões de texto e revisão de acentuação/pontuação;
- Ideias de animação e lógica da roleta.

A implementação final foi revisada, adaptada e compreendida manualmente, com a estrutura de pastas e a lógica do hook reorganizadas durante o desenvolvimento.

### Evolução da solução

Mudanças entre a ideia inicial e a versão final:

- Mudança de uma página de venda tradicional para uma proposta satírica;
- Inclusão de uma roleta interativa como CTA principal;
- Roleta com roda animada e probabilidade coerente com os setores;
- Extração da lógica de jogo para um hook custom (`useWheel`);
- Ajuste de paleta para estilo fantasy/arcade (verde-água + dourado);
- Reorganização da narrativa da página: proposta -> benefícios -> itens -> funcionamento -> prova social -> oferta -> CTA -> FAQ.

### Resultado final

O resultado final atende aos requisitos da atividade:

- Identidade visual definida;
- Produto e proposta apresentados;
- Hero section;
- Benefícios e diferenciais;
- Representação visual de itens;
- Explicação de funcionamento;
- Avaliações de jogadores;
- Oferta/preço;
- FAQ;
- CTA funcional com roleta animada.

Se houvesse mais tempo, os próximos passos seriam:

- adicionar sons e partículas ao giro;
- criar variações de estado visual para raridade de item;

## Como executar

```bash
npm install
npm run dev
```
