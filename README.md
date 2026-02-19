# CER Fácil

Esse projeto surgiu da necessidade de fornecer às pessoas com deficiência informações claras e com linguagem acessível sobre como acessar os serviços dos Centros Especializados em Reabilitação (CERs) e Oficinas Ortopédicas (OPMs) da Paraíba. O principal objetivo é fazer com que as pessoas que necessitam dos serviços tenham à sua disposição um site onde poderão consultar como fazer o primeiro acesso no seu CER de referência.

## Tecnologias Utilizadas

* [Bun](https://bun.sh) - Runtime JavaScript ultrarrápido (v1.x)
* [React](https://react.dev) - Biblioteca para interfaces de usuário (v19)
* [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
* [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first (v4)
* [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI acessíveis e customizáveis
* [Leaflet](https://leafletjs.com/) & [React Leaflet](https://react-leaflet.js.org/) - Mapas interativos
* [Lucide React](https://lucide.dev/) - Ícones

## Dependências e Versões Necessárias

* **Bun**: 1.3.6 (Instalar via `curl -fsSL https://bun.sh/install | bash`)
* **React**: 19.2.1
* **TypeScript**: 5.9.3
* **Tailwind CSS**: 4.1.17
* **shadcn/ui**: 0.10.10
* **Leaflet**: 1.9.4
* **React Leaflet**: 5.0.0
* **Lucide React**: 0.562.0

## Como Rodar o Projeto ✅

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd cer-facil
```

2. Instale as dependências:

```bash
bun install
```

3. Inicie o servidor de desenvolvimento:

```bash
bun dev
```

O servidor estará disponível em `http://localhost:3000`.

## 📌 Funcionalidades Principais 📌

Informações importantes sobre a aplicação.

* **Busca Personalizada**: Formulário interativo para encontrar o CER ideal.
* **Mapa Interativo**: Visualização geográfica dos CERs e OPMs da Paraíba.
* **Listagem Completa**: Detalhes de contato e especialidades de cada unidade.
* **Informações da Rede**: Conteúdo educativo sobre a Rede de Cuidado à Pessoa com Deficiência.

![formulário para preenchimento do tipo de deficiência](https://github.com/PET-Saude-Digital-GT-01-PCD/cer-facil/blob/b62762232283194f71f4fe0b1bde6014ac7524c6/src/assets/images/readme-images/Captura%20de%20tela%202026-02-16%20201237.png)
![resultados da busca pelo cer de referência](https://github.com/PET-Saude-Digital-GT-01-PCD/cer-facil/blob/b62762232283194f71f4fe0b1bde6014ac7524c6/src/assets/images/readme-images/Captura%20de%20tela%202026-02-16%20201311.png)
![mapa com as localizações dos cers](https://github.com/PET-Saude-Digital-GT-01-PCD/cer-facil/blob/b62762232283194f71f4fe0b1bde6014ac7524c6/src/assets/images/readme-images/Captura%20de%20tela%202026-02-16%20201417.png)
![cards com informações sobre cada cer](https://github.com/PET-Saude-Digital-GT-01-PCD/cer-facil/blob/b62762232283194f71f4fe0b1bde6014ac7524c6/src/assets/images/readme-images/Captura%20de%20tela%202026-02-16%20201443.png)

## ⚠️ Problemas enfrentados

### Falha ao Carregar o Plugin Tailwind

**Problema:** O Bun não consegue localizar o plugin do Tailwind CSS (`bun-plugin-tailwind`).
Erro: `error: Cannot find package 'bun-plugin-tailwind'`

**Como solucionar:**

1. Instale o plugin manualmente:

```bash
bun install bun-plugin-tailwind
```

2. Se a porta 3000 estiver ocupada, encerre o processo:

```bash
sudo lsof -i :3000
sudo fuser -k 3000/tcp
```

3. Tente rodar novamente com `bun dev`.

## ⏭️ Próximos passos

* Implementação de testes com usuários.
* Melhorias contínuas na acessibilidade e usabilidade.

## Colaboradores(as) do Projeto

### Tutores

* **Geraldo Eduardo Guedes de Brito**
* **Robson da Fonseca Neves**

### Preceptores(as) e Orientadores(a) de Serviço

* **Gustavo Alves de Lima Martiins**
* **Hélio Soares da Silva**
* **Mércia de Lourdes Ferreira**
* **Weber Almeida Cavalcanti**

### Monitores(as)

* **Ana Claudia de Araújo Coutinho**
* **Ana Rita de Oliveira Figueira**
* **Artie Luiz Gomes da Silva**
* **Beatriz Vitorio Melo Silva**
* **Darlan Berg Marcos da Silva**
* **Davi Berg Marcos da Silva**
* **Gustavo Henrique Verçosa Dias**
* **João Bosco Duarte Filho**
* **Maria Amanda Santos da Silva**
* **Stephanie Patriota dos Santos**
