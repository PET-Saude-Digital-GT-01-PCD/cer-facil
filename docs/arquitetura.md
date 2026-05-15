# Arquitetura Técnica

Este documento descreve as decisões de arquitetura, o fluxo de dados e o funcionamento interno do SeuCER.

---

## Sumário

- [Visão geral](#visão-geral)
- [Servidor e bundler](#servidor-e-bundler)
- [Estrutura de componentes](#estrutura-de-componentes)
- [Gerenciamento de estado](#gerenciamento-de-estado)
- [Algoritmo de matching de CERs](#algoritmo-de-matching-de-cers)
- [Dados estáticos](#dados-estáticos)
- [Acessibilidade](#acessibilidade)
- [Estilização](#estilização)

---

## Visão geral

O SeuCER é uma aplicação **frontend estática** (SPA) sem backend próprio. Toda a lógica de busca e filtragem ocorre no cliente, com base em arquivos JSON estáticos. Serviços externos são usados apenas para geolocalização (Nominatim/ViaCEP) e exibição de mapas (OpenStreetMap via Leaflet).

```
Usuário → Bun.serve() → index.html → React SPA
                                        ↓
                              JSON estáticos (src/data/)
                                        ↓
                              APIs externas (Nominatim, ViaCEP)
```

---

## Servidor e bundler

O projeto usa **Bun** como runtime, servidor HTTP e bundler — sem Vite, Webpack ou Express.

- **Desenvolvimento:** `bun --hot src/index.ts` — inicia o servidor com hot reload via `Bun.serve()`.
- **Produção:** `bun run build.ts` — gera os arquivos estáticos em `dist/` com minificação.
- **Tailwind CSS:** processado pelo plugin `bun-plugin-tailwind` diretamente no pipeline do Bun.

O arquivo `src/index.ts` serve o `index.html` para todas as rotas (`/*`), permitindo que o React gerencie a navegação internamente.

---

## Estrutura de componentes

A hierarquia principal de componentes é:

```
App
└── Home
    ├── Welcome          ← Tela inicial com os 3 atalhos
    │   └── CerForm      ← Formulário de busca (renderizado no lugar da Welcome)
    │       ├── StepIndicator
    │       ├── StepOne  ← Seleção de deficiência
    │       ├── StepTwo  ← Seleção de faixa etária
    │       ├── StepThree← Localização (GPS ou CEP)
    │       └── StepFour ← Resultados + Flow
    │           └── Flow ← Fluxo de atendimento do CER selecionado
    ├── NetworkInfo      ← Todas as seções informativas
    │   ├── WhatIsRCPD
    │   ├── AttentionLevel
    │   ├── TypesOfCers
    │   ├── TypesOfDeficiencies
    │   ├── CersCards    ← Mapa + cards de todos os CERs
    │   ├── HistoryTimeline
    │   ├── ProfessionalsRoles
    │   ├── EducationalMaterial
    │   └── ExternalLinks
    └── Footnote         ← Rodapé com modal "Sobre o projeto"
```

---

## Gerenciamento de estado

Não há biblioteca de gerenciamento de estado global (sem Redux, Zustand, etc.). O estado é gerenciado localmente com `useState` e `useEffect` do React, passado via props entre componentes pai e filho.

Os dois estados principais vivem no `App.tsx`:

| Estado | Tipo | Descrição |
|---|---|---|
| `showForm` | `boolean` | Controla se o formulário de busca está visível |
| `showFlow` | `[boolean, number \| null]` | Controla se o fluxo de atendimento está visível e qual CER |

Quando `showFlow[0]` é `true`, o componente `Home` renderiza apenas o `CersCards` com o fluxo ativo, ocultando todo o restante da página.

---

## Algoritmo de matching de CERs

O algoritmo está em `src/lib/matchCers.ts` e é executado no cliente ao chegar na etapa 4 do formulário.

### Fontes de dados

| Arquivo | Uso |
|---|---|
| `cers.json` | Dados de todos os CERs (especialidades, cidade, contato) |
| `servicos.json` | Municípios atendidos diretamente por cada CER |
| `micro.json` | Microrregiões de saúde e seus municípios |
| `macro.json` | Macrorregiões, suas microrregiões e o CER de referência |

### Níveis de prioridade

O algoritmo atribui um nível de prioridade a cada CER em relação à localização do usuário:

| Nível | Critério |
|---|---|
| 1 | O município do usuário está na lista de municípios atendidos pelo CER (`servicos.json`) |
| 2 | O CER está na mesma microrregião do usuário |
| 3 | O CER está na mesma macrorregião do usuário |
| 4 | Fora da área de cobertura — descartado |

### Lógica de resultado

1. Filtra CERs que atendem a deficiência selecionada e têm nível de prioridade < 4.
2. Identifica o melhor nível disponível (`Math.min`).
3. Se o melhor nível for 3 (macrorregião), retorna apenas o **CER de referência** da macrorregião (definido em `macro.json` pelo campo `cerReferenciaId`).
4. Caso contrário, retorna todos os CERs do melhor nível encontrado.

### Normalização de strings

Todas as comparações de nomes de cidades e especialidades passam pela função `normalizeString`, que:
- Remove acentos (NFD + regex)
- Converte para minúsculas
- Remove sufixos após vírgula ou hífen (para lidar com variações como "João Pessoa - PB")

---

## Dados estáticos

Todos os dados da aplicação são arquivos JSON em `src/data/`. Não há banco de dados nem API própria.

| Arquivo | Estrutura principal |
|---|---|
| `cers.json` | Array de objetos CER com id, nome, cidade, especialidades, contato, endereço, localização |
| `fluxo.json` | Array de objetos com id, title, steps (title + description) e documents |
| `servicos.json` | Array de objetos com id do CER e lista de municípios atendidos |
| `micro.json` | Array de microrregiões com id, nome da região e lista de municípios |
| `macro.json` | Array de macrorregiões com id, nome, cerReferenciaId e lista de regiões micro |

O `id` em `fluxo.json` deve sempre corresponder ao `id` em `cers.json`.

---

## Acessibilidade

- **VLibras:** widget carregado via script externo (`vlibras.gov.br/app/vlibras-plugin.js`), inicializado após o DOM estar pronto. Os atributos customizados `vw`, `vw-access-button` e `vw-plugin-wrapper` são declarados em `bun-env.d.ts`.
- **Navegação por teclado:** todos os cards interativos têm `tabIndex={0}`, `role="button"` e handlers `onKeyDown` para Enter e Espaço.
- **ARIA:** uso de `aria-label`, `aria-checked`, `aria-hidden` e `role="radiogroup"` nos formulários.
- **Reduced motion:** `@media (prefers-reduced-motion)` em `src/index.css` desativa todas as animações.
- **Foco programático:** ao navegar entre etapas do formulário e ao abrir modais, o foco é movido programaticamente para o título da nova tela.

---

## Estilização

- **Tailwind CSS v4** com configuração via `bun-plugin-tailwind`.
- Variáveis CSS globais definidas em `styles/globals.css`:
  - `--cor-bg-1` — azul petróleo (cor principal)
  - `--cor-bg-3` — cor de destaque secundária
  - `--cor-destaque` — cor para anéis de foco (acessibilidade)
- Componentes base do **shadcn/ui** em `src/components/ui/` (Button, Card, Input, Label, Select).
- Divisores decorativos entre seções via componentes `WaveBottom` e `WaveTop` em `src/components/wave-divider/`.
