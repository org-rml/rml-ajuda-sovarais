# Central de Ajuda Sóvarais

Site de manuais e perguntas frequentes, publicado em **https://ajuda.sovaraisrecife.cloud**.
Feito com [VitePress](https://vitepress.dev): cada artigo é um arquivo `.md` dentro de `docs/`.

## Rodar no computador

```bash
npm install
npm run dev        # abre em http://localhost:5173 e atualiza ao salvar
npm run build      # gera o site em docs/.vitepress/dist (é o que o CI publica)
```

## Escrever e organizar artigos

- Cada pasta de `docs/` é uma categoria (`agenda/`, `pedidos/`, ...). O `index.md` de uma pasta abre em `/pasta/`.
- O menu lateral fica em `docs/.vitepress/config.mts` (`sidebar`). Artigo novo precisa entrar lá.
- O título do artigo é a primeira linha `# ...`. Os `##` viram o "Nesta página" à direita.
- Nome de botão do sistema: `<span class="botao">Foi feito</span>`.
- Caixas de destaque: `::: tip`, `::: info`, `::: warning` (fechar com `:::`).
- `<!-- PRINT: ... -->` marca onde vai um print da tela (não aparece no site).

### Prints de tela

1. Salve a imagem em `docs/public/img/` (ex.: `docs/public/img/agenda-visao-geral.png`).
2. No artigo: `![Agenda do dia](/img/agenda-visao-geral.png)`.

> **Atenção:** o site é público. Use **somente dados de teste** nos prints: nada de nome, telefone ou endereço de cliente real.

## Publicação

Todo push na `main` roda `.github/workflows/ajuda-ci-cd.yml`: build e cópia para `/opt/sovarais/infra/www/ajuda` na VPS.
O Caddy (configurado no `rml-bff-sovarais/infra/Caddyfile`) serve essa pasta; não precisa reiniciar nada.

Secrets do repositório (ambiente `production`, os mesmos do FED): `VPS_HOST`, `VPS_USER`, `VPS_PORT`, `VPS_SSH_KEY`.
