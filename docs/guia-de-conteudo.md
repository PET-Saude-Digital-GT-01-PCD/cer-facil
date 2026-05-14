# Guia de Conteúdo

Este documento explica como atualizar os dados e conteúdos do SeuCER sem precisar alterar a lógica da aplicação.

---

## Sumário

- [Atualizar informações de um CER](#atualizar-informações-de-um-cer)
- [Adicionar um novo CER](#adicionar-um-novo-cer)
- [Atualizar o fluxo de atendimento](#atualizar-o-fluxo-de-atendimento)
- [Atualizar municípios atendidos por CER](#atualizar-municípios-atendidos-por-cer)
- [Adicionar ou remover material educativo](#adicionar-ou-remover-material-educativo)
- [Atualizar links oficiais](#atualizar-links-oficiais)
- [Atualizar seções informativas](#atualizar-seções-informativas)

---

## Atualizar informações de um CER

Edite o arquivo `src/data/cers.json`. Cada objeto representa um CER:

```json
{
  "id": 1,
  "nome": "CER IV - FUNAD",
  "cidade": "João Pessoa",
  "especialidades": ["Física", "Auditiva", "Visual", "Intelectual"],
  "telefone": "(83) 0000-0000",
  "email": "contato@cer.pb.gov.br",
  "site": "https://site-do-cer.pb.gov.br",
  "instagram": "https://www.instagram.com/cer_exemplo",
  "endereco": {
    "rua": "Rua Exemplo",
    "numero": "100",
    "bairro": "Centro",
    "cep": "58000-000"
  },
  "horario": {
    "texto": "Segunda a Sexta, das 08:00 às 17:00"
  },
  "localizacao": {
    "latitude": -7.115,
    "longitude": -34.863,
    "googleMapsUrl": "https://maps.google.com/?q=...",
    "cnes": 0000000
  }
}
```

Campos opcionais (`telefone`, `email`, `site`, `instagram`) podem ser `null` se não houver informação.

---

## Adicionar um novo CER

1. Adicione um novo objeto em `src/data/cers.json` com um `id` único sequencial.
2. Adicione o fluxo de atendimento correspondente em `src/data/fluxo.json` (veja a seção abaixo). O `id` do fluxo deve corresponder ao `id` do CER.
3. Adicione os municípios atendidos em `src/data/servicos.json`.
4. Verifique se a cidade do CER está cadastrada em `src/data/micro.json` para que o algoritmo de matching funcione corretamente.

---

## Atualizar o fluxo de atendimento

Edite o arquivo `src/data/fluxo.json`. Cada objeto corresponde a um CER pelo índice (posição no array = `id - 1`):

```json
{
  "id": 1,
  "title": "CER IV - FUNAD — João Pessoa",
  "steps": [
    {
      "title": "Procure a UBS mais próxima",
      "description": "Dirija-se à Unidade Básica de Saúde (UBS) do seu município..."
    },
    {
      "title": "Solicite o encaminhamento",
      "description": "Peça ao médico ou enfermeiro um encaminhamento para o CER..."
    }
  ],
  "documents": [
    "RG ou outro documento de identificação com foto",
    "CPF",
    "Cartão do SUS",
    "Laudo médico atualizado"
  ]
}
```

---

## Atualizar municípios atendidos por CER

Edite o arquivo `src/data/servicos.json`. Cada objeto lista os municípios que um CER atende diretamente (nível de prioridade 1 na busca):

```json
{
  "id": 1,
  "nome": "CER IV - FUNAD",
  "municipios": ["João Pessoa", "Santa Rita", "Bayeux"]
}
```

O `id` deve corresponder ao `id` do CER em `cers.json`.

---

## Adicionar ou remover material educativo

Edite o arquivo `src/pages/home/components/network-info/section/educational-material/EducationalMaterial.tsx`.

Há três listas de materiais: `userMaterials`, `professionalMaterials` e `managerMaterial`.

**Para adicionar um material com imagem local:**

1. Coloque a imagem de capa em `src/assets/images/educational-material/`.
2. Importe a imagem no topo do arquivo:

```tsx
import novaCapaImg from "@/assets/images/educational-material/nome-da-imagem.png";
```

3. Adicione o objeto na lista correspondente:

```tsx
{
  title: "Título do Material",
  description: "Descrição breve do conteúdo.",
  url: "https://link-para-o-material.pdf",
  image: novaCapaImg,
}
```

**Para adicionar um material com link externo (sem PDF local):**

Basta usar a URL diretamente no campo `url`, sem necessidade de importar arquivo.

**Para remover um material:**

Remova o objeto correspondente da lista e, se houver, apague o arquivo de imagem de `src/assets/images/educational-material/` e o PDF de `src/assets/materials/gestores/`.

---

## Atualizar links oficiais

Edite o arquivo `src/pages/home/components/network-info/section/external-links/ExternalLinks.tsx`.

O array `links` contém os objetos de cada card:

```tsx
{
  title: "Título do Link",
  description: "Descrição do que o usuário encontrará ao acessar.",
  url: "https://url-do-link",
}
```

Adicione, remova ou edite os objetos conforme necessário.

---

## Atualizar seções informativas

As seções informativas da página principal estão em:

```
src/pages/home/components/network-info/section/
├── what-is-rcpd/        # O que é a RCPD
├── attention-level/     # Níveis de atenção
├── types-of-cers/       # Tipos de CER
├── type-of-deficiencies/# Tipos de deficiência
├── history-timeline/    # Linha do tempo histórica
└── professionals-roles/ # Papéis dos profissionais
```

Cada seção é um componente React independente. O conteúdo textual está diretamente no JSX de cada arquivo — basta editar os textos para atualizar o conteúdo exibido.
