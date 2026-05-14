# Solução de Problemas

Este documento lista os erros conhecidos do projeto e como resolvê-los.

---

## Sumário

- [Erros de instalação e inicialização](#erros-de-instalação-e-inicialização)
- [Erros de build](#erros-de-build)
- [Erros em tempo de execução](#erros-em-tempo-de-execução)
- [Problemas de funcionalidade](#problemas-de-funcionalidade)

---

## Erros de instalação e inicialização

### `Cannot find package 'bun-plugin-tailwind'`

**Causa:** O plugin do Tailwind CSS não foi instalado corretamente.

**Solução:**

```bash
bun install bun-plugin-tailwind
bun dev
```

---

### `Error: listen EADDRINUSE: address already in use :::3000`

**Causa:** A porta 3000 já está sendo usada por outro processo.

**Solução:**

```bash
# Identificar o processo
sudo lsof -i :3000

# Encerrar o processo
sudo fuser -k 3000/tcp

# Tentar novamente
bun dev
```

---

### `bun: command not found`

**Causa:** O Bun não está instalado ou não está no PATH.

**Solução:**

```bash
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc  # ou ~/.zshrc
```

---

## Erros de build

### Build gera arquivos sem estilos Tailwind

**Causa:** O `bun-plugin-tailwind` não está sendo carregado no `build.ts`.

**Solução:** Verifique se o plugin está importado e passado corretamente em `build.ts`:

```ts
import plugin from "bun-plugin-tailwind";

await Bun.build({
  plugins: [plugin],
  // ...
});
```

---

### Assets (imagens, PDFs) não aparecem no build

**Causa:** O Bun inclui automaticamente assets referenciados via `import` estático. Assets referenciados apenas por string dinâmica não são copiados.

**Solução:** Sempre importe assets estáticos no topo do arquivo:

```ts
import minhaImagem from "@/assets/images/exemplo.png";
```

---

## Erros em tempo de execução

### Mapa não carrega (tela em branco na área do mapa)

**Causa:** Os ícones padrão do Leaflet não são encontrados quando o CSS é processado pelo bundler.

**Solução:** O arquivo `src/lib/leaflet-config.ts` já corrige isso sobrescrevendo os ícones padrão. Verifique se ele está sendo importado no componente de mapa:

```ts
import "@/lib/leaflet-config";
```

---

### VLibras não aparece ou o boneco não funciona

**Causa:** O script do VLibras pode não ter carregado antes da inicialização do widget, ou o DOM com os atributos `vw` não estava pronto.

**Solução:** O componente `src/components/vlibras/Vlibras.tsx` já trata isso carregando o script via `useEffect` e chamando `new VLibras.Widget()` apenas no `onload` do script. Se o problema persistir:

1. Verifique se o componente `<VLibras />` está sendo renderizado no `App.tsx`.
2. Verifique se há bloqueadores de scripts externos no navegador.
3. Confirme que `https://vlibras.gov.br/app/vlibras-plugin.js` está acessível.

---

### Geolocalização não funciona

**Causa:** Navegadores modernos exigem HTTPS para permitir acesso à geolocalização. Em desenvolvimento local (`http://localhost`), a permissão é concedida normalmente, mas em produção sem HTTPS será bloqueada.

**Solução:** Certifique-se de que o ambiente de produção usa HTTPS.

---

### CEP não encontrado ou mapa não atualiza

**Causa:** As APIs externas (ViaCEP e Nominatim) podem estar temporariamente indisponíveis ou o CEP informado é inválido.

**Comportamento esperado:** O sistema exibe um `alert` informando que o CEP não foi encontrado.

**Solução:** Verifique a conectividade com a internet e tente novamente. Se o problema persistir com um CEP válido, verifique o console do navegador para erros de rede.

---

## Problemas de funcionalidade

### Nenhum CER encontrado para minha cidade

**Causa:** A cidade pode não estar cadastrada em `src/data/micro.json` ou `src/data/servicos.json`.

**Solução:**

1. Verifique se o nome da cidade retornado pela geolocalização corresponde exatamente (após normalização) ao nome cadastrado nos JSONs.
2. Adicione o município à microrregião correta em `micro.json`.
3. Se necessário, adicione o município à lista de atendidos do CER correspondente em `servicos.json`.

Consulte o [Guia de Conteúdo](./guia-de-conteudo.md) para instruções detalhadas.

---

### O fluxo de atendimento exibe "Fluxo não encontrado"

**Causa:** O `id` do CER em `cers.json` não tem um objeto correspondente em `fluxo.json`, ou os IDs estão dessincronizados.

**Solução:** Verifique se existe um objeto em `fluxo.json` com o mesmo `id` do CER. O array de fluxos deve ter um objeto para cada CER existente em `cers.json`.

---

### Informações desatualizadas de um CER

**Causa:** Os dados em `src/data/cers.json` não foram atualizados.

**Solução:** Edite o arquivo `src/data/cers.json` conforme descrito no [Guia de Conteúdo](./guia-de-conteudo.md#atualizar-informações-de-um-cer).
