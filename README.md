# SeuCER

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Bun](https://img.shields.io/badge/Runtime-Bun_1.x-black?logo=bun)](https://bun.sh)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

<p align="center">
  <img src="./src/assets/logos/seu_cer_vetor.svg" alt="Logo SeuCER" height="120" />
</p>

Plataforma web desenvolvida pelo **GT-01 do PET-Saúde Digital (UFPB)** para aproximar pessoas com deficiência, familiares e profissionais de saúde aos **Centros Especializados em Reabilitação (CERs)** e **Oficinas Ortopédicas (OPMs)** da Paraíba.

O projeto oferece linguagem acessível, busca personalizada por deficiência e localização, mapa interativo e materiais educativos sobre a Rede de Cuidado à Pessoa com Deficiência (RCPD).

**Acesse o site:** [pet-saude-digital-gt-01-pcd.github.io/cer-facil](https://pet-saude-digital-gt-01-pcd.github.io/cer-facil/)

---

## Sumário

- [Guia de Uso](#guia-de-uso)
- [Guia Técnico](#guia-técnico)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Rodando localmente](#rodando-localmente)
  - [Build de produção](#build-de-produção)
  - [Stack tecnológica](#stack-tecnológica)
  - [Estrutura de diretórios](#estrutura-de-diretórios)
- [Documentação técnica](#documentação-técnica)
- [Solução de problemas](#solução-de-problemas)
- [Equipe](#equipe)
- [Licença](#licença)

---

## Guia de Uso

A documentação de uso com capturas de tela está disponível em [`docs/guia-de-uso.md`](./docs/guia-de-uso.md).

As principais funcionalidades são:

- **Busca personalizada** — formulário em etapas que filtra o CER ideal por tipo de deficiência, faixa etária e localização.
- **Fluxo de atendimento** — passo a passo detalhado de como conseguir atendimento em cada CER, com opção de impressão.
- **Cards de informações** — contato, endereço, especialidades e horários de cada unidade.
- **Material educativo** — publicações, guias e cartilhas organizados por perfil (usuário, profissional, gestor).
- **Links oficiais** — acesso direto aos portais do Ministério da Saúde sobre saúde da pessoa com deficiência.

---

## Guia Técnico

### Pré-requisitos

- [Bun](https://bun.sh) >= 1.3.6

```bash
curl -fsSL https://bun.sh/install | bash
```

### Instalação

```bash
git clone <url-do-repositorio>
cd cer-facil
bun install
```

### Rodando localmente

```bash
bun dev
```

O servidor estará disponível em `http://localhost:3000` com hot reload ativo.

### Build de produção

```bash
bun run build
```

Os arquivos serão gerados na pasta `dist/` com minificação e sourcemaps. É possível passar opções adicionais:

```bash
bun run build.ts --outdir=dist --minify --sourcemap=linked
```

### Stack tecnológica

| Camada | Tecnologia | Versão |
|---|---|---|
| Runtime | Bun | 1.x |
| UI | React | 19.2.1 |
| Linguagem | TypeScript | 5.9.3 |
| Estilização | Tailwind CSS | 4.x |
| Componentes | shadcn/ui | 0.10.10 |
| Mapas | Leaflet + React Leaflet | 1.9.4 / 5.0.0 |
| Ícones | Lucide React | 0.562.0 |
| Acessibilidade | VLibras | — |

### Estrutura de diretórios

```
cer-facil/
├── src/
│   ├── assets/
│   │   ├── images/          # Imagens (deficiências, material educativo, logos do rodapé)
│   │   ├── logos/           # Logos do projeto
│   │   └── materials/       # PDFs para download (gestores)
│   ├── components/          # Componentes reutilizáveis
│   │   ├── back-to-home-buttom/
│   │   ├── back-to-top-buttom/
│   │   ├── pb-map/          # Mapa interativo da Paraíba
│   │   ├── ui/              # Componentes shadcn/ui
│   │   ├── user-flow/       # Fluxo de atendimento do CER
│   │   ├── vlibras/         # Widget de acessibilidade VLibras
│   │   └── wave-divider/    # Divisores decorativos entre seções
│   ├── data/                # Dados estáticos em JSON
│   │   ├── cers.json        # Informações de todos os CERs
│   │   ├── fluxo.json       # Passo a passo de atendimento por CER
│   │   ├── macro.json       # Macrorregiões de saúde da PB
│   │   ├── micro.json       # Microrregiões e municípios da PB
│   │   └── servicos.json    # Municípios atendidos por cada CER
│   ├── lib/                 # Utilitários e lógica de negócio
│   │   ├── exportCers.ts    # Exportação dos CERs para CSV
│   │   ├── leaflet-config.ts
│   │   ├── matchCers.ts     # Algoritmo de busca do CER ideal
│   │   └── utils.ts
│   ├── pages/home/          # Página principal e todas as seções
│   │   └── components/
│   │       ├── footnote/    # Rodapé
│   │       ├── form/        # Formulário de busca (4 etapas)
│   │       ├── network-info/# Seções informativas da RCPD
│   │       └── welcome-page/# Tela inicial
│   ├── App.tsx
│   ├── frontend.tsx
│   ├── index.css
│   ├── index.html
│   └── index.ts             # Servidor Bun
├── docs/                    # Documentação detalhada
│   ├── img/                 # Capturas de tela
│   ├── guia-de-uso.md
│   ├── guia-de-conteudo.md
│   ├── arquitetura.md
│   └── solucao-de-problemas.md
├── build.ts                 # Script de build configurável
├── bun-env.d.ts             # Declarações de tipos globais
├── components.json          # Configuração shadcn/ui
└── tsconfig.json
```

---

## Documentação técnica

Documentos detalhados disponíveis em `docs/`:

| Documento | Descrição |
|---|---|
| [`docs/guia-de-uso.md`](./docs/guia-de-uso.md) | Como usar o site — capturas de tela e descrição de cada funcionalidade |
| [`docs/guia-de-conteudo.md`](./docs/guia-de-conteudo.md) | Como atualizar CERs, fluxos, materiais e seções informativas |
| [`docs/arquitetura.md`](./docs/arquitetura.md) | Decisões de arquitetura, algoritmo de matching e fluxo de dados |
| [`docs/solucao-de-problemas.md`](./docs/solucao-de-problemas.md) | Erros conhecidos e como resolvê-los |

---

## Solução de problemas

Consulte o documento completo em [`docs/solucao-de-problemas.md`](./docs/solucao-de-problemas.md).

**Erro mais comum:** `Cannot find package 'bun-plugin-tailwind'`

```bash
bun install bun-plugin-tailwind
```

---

## Equipe

Projeto desenvolvido no âmbito do **PET-Saúde/Informação e Saúde Digital no SUS — GT-01 Atenção Especializada à Pessoa com Deficiência**, em parceria com a **SES-PB** e a **FUNAD**.

### Tutores

- Geraldo Eduardo Guedes de Brito
- Robson da Fonseca Neves

### Preceptores e Orientadores de Serviço

- Gustavo Alves de Lima Martins
- Hélio Soares da Silva
- Mércia de Lourdes Ferreira
- Weber Almeida Cavalcanti

### Monitores

- Ana Claudia de Araújo Coutinho
- Ana Rita de Oliveira Figueira
- Artie Luiz Gomes da Silva
- Beatriz Vitorio Melo Silva
- Darlan Berg Marcos da Silva
- Davi Berg Marcos da Silva
- Gustavo Henrique Verçosa Dias
- João Bosco Duarte Filho
- Maria Amanda Santos da Silva
- Stephanie Patriota dos Santos

### Contato

- Instagram: [@petsaude_pcd](https://www.instagram.com/petsaude_pcd)
- E-mail: [pet.saude.pcd@gmail.com](mailto:pet.saude.pcd@gmail.com)

---

## Dúvidas ou sugestões

Encontrou um problema ou tem uma sugestão de melhoria? Entre em contato pelos canais acima ou abra uma [issue no GitHub](https://github.com/PET-Saude-Digital-GT-01-PCD/cer-facil/issues).

---

## Licença

Distribuído sob a licença MIT. Consulte o arquivo [`LICENSE`](./LICENSE) para mais detalhes.
