# CER Fácil: Uma aplicação para ajudar pessoas a encontrarem CERs e Oficinas Ortopédicas na Paraíba

## Tecnologias (Stack)

- **[Bun](https://bun.com)** - Runtime JavaScript ultrarrápido
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first
- **shadcn/ui** - Componentes de UI acessíveis e customizáveis

## Pré-requisitos

Certifique-se de ter o **Bun** instalado em sua máquina:

```bash
# Verificar se o Bun está instalado 
bun --version

# Se não tiver instalado, instale com:
curl -fsSL https://bun.sh/install | bash
```

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd cer-facil
```

2. Instale as dependências:

```bash
bun install
```

## Executando o Projeto

Inicia o servidor de desenvolvimento com Hot Module Reload (HMR):

```bash
bun dev
```

O servidor estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
cer-facil/
├── src/
|   ├── assets/           # Assets
|   |   └── images/       # Imagens do site
│   ├── components/       # Componentes reutilizáveis
|   |   ├── Navbar/       # Barra de navegação
|   |   ├── pb-map/       # Componentes do mapa da Paraíba
│   │   └── ui/           # Componentes shadcn/ui
|   ├── data/             # Arquivos com informações do site
│   ├── pages/            # Páginas da aplicação
│   │   └── home/         # Página Home
│   ├── lib/              # Utilitários e helpers
│   ├── App.tsx           # Componente raiz
│   ├── frontend.tsx      # Entry point React
|   ├── index.css         # Estilos base da página
│   ├── index.ts          # Servidor Bun
│   └── index.html        # Template HTML
├── styles/               # Estilos globais
├── build.ts              # Build customizado para o Bun
├── bun-env.d.ts          # Tipagem de variáveis de ambiente do Bun
├── bun.lock              # Trava as versões das dependências
├── bunfig.toml           # Configuração global do Bun
├── package.json          # Dependências e scripts
├── components.json       # Configuração do shadcn/ui
└── tsconfig.json         # Configuração do TypeScript
```

## Erros Conhecidos

❌ Falha ao Carregar o Plugin Tailwind
Este erro impede que o servidor seja iniciado, pois o Bun não consegue localizar o plugin do Tailwind CSS.

```
Código do Erro
error: Failed to load lugins for Bun.Server:
error: Cannot find package 'bun-plugin-tailwind' from 'home/user/cer-facil'

```

Como Corrigir:

1- Garanta a Instalação Correta do Plugin:

```Bash
bun install bun-plugin-tailwind
```
2- Libere a Porta 3000 (Se Necessário):

```Bash
# 1. Identifica qual processo está usando a porta 3000
sudo lsof -i :3000

# 2. Encerra o processo usando a porta 3000
sudo fuser -k 3000/tcp
```

Tente executar novamente

```Bash
bun dev
```
