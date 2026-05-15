# Changelog da PR

## Novas funcionalidades

- Adicionada seção **Links Oficiais** ao final da página, com cards linkando para os portais do Ministério da Saúde sobre saúde da pessoa com deficiência (RCPD, legislação, publicações, notas técnicas e notas informativas)
- Adicionado **resumo das seleções** (deficiência, faixa etária e localidade) no topo da tela de resultados do formulário

## Melhorias de UI

- Ícones das deficiências substituídos por ícones do **Lucide React** (`Accessibility`, `Ear`, `Eye`, `Brain`, `Puzzle`) em todos os locais onde apareciam:
  - Formulário de busca (Etapa 1)
  - Seção "Os CERs atendem pessoas com"
  - Filtros da listagem de CERs
  - Filtros da equipe multiprofissional
- Tamanhos de texto, ícones e padding do formulário de busca reduzidos para caber na tela sem scroll (Steps 1, 2, 3 e 4)
- Risco/borda superior do rodapé removido; mantida apenas a linha divisória acima do copyright
- Favicon da aba do navegador atualizado

## Correções de bugs

- **VLibras** reimplementado do zero: o widget agora inicializa corretamente após o carregamento do script externo, resolvendo o problema do boneco não funcionar
- Corrigida hierarquia de headings inválida (`CardTitle` aninhando `<h2>`) nos steps do formulário usando `asChild`
- Removido `useRef` morto no componente `Rodape` do rodapé
- Removido `containerRef` morto no componente `Vlibras`
- Removido import morto `WaveTop` no `NetworkInfo`
- Substituído `<nav>` semântico incorreto por `<div>` nos botões de ação da tela inicial

## Refatoração

- Lógica de matching de CERs extraída do `StepFour` para `src/lib/matchCers.ts`, com tipagem TypeScript completa (sem `any`)
- Funções `normalizeString` e `obterRegioesDaCidade` movidas para fora do componente, eliminando recriação a cada render
- `getBadgeCobertura` movida para fora do componente `StepFour`
- Declarações de tipo do VLibras (`Window.VLibras` e atributos `vw`) consolidadas em `bun-env.d.ts`; arquivo `vlibras.d.ts` removido

## Conteúdo

- Nota Técnica nº 2 dos materiais de gestores atualizada de 2025 para **2026**, agora apontando para o link oficial do gov.br
- Dependência `react-router-dom` removida (não utilizada no projeto)

## Documentação

- `README.md` reformulado com logo, link para o site, stack em tabela, estrutura de diretórios, contatos e link para issues
- Criados os documentos em `docs/`:
  - `guia-de-uso.md` — capturas de tela de todas as funcionalidades
  - `guia-de-conteudo.md` — como atualizar CERs, fluxos, materiais e seções
  - `arquitetura.md` — decisões técnicas, algoritmo de matching e fluxo de dados
  - `solucao-de-problemas.md` — erros conhecidos e como resolvê-los

## Limpeza de arquivos

Removidos arquivos não utilizados:
- `src/assets/images/footnote-images/petsaude.jpg`
- `src/assets/images/disabillity-images/` (pasta inteira, substituída por ícones Lucide)
- `src/assets/images/educational-material/Nota Técnica nº 2-2025 (...).jpg`
- `src/assets/materials/gestores/Nota Técnica nº 2-2025 (...).pdf`
- `src/assets/logos/logo-page.png` (revertido — favicon restaurado)
- `src/lib/vlibras.d.ts`
