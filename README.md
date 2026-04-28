# SC Santiago — Corretora de Seguros de Vida

Site institucional da SC Santiago Corretora de Seguros de Vida (São Paulo, Brasil), construído em React + Vite.

## Deploy no Railway

Clique no botão abaixo para fazer o deploy direto no Railway:

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/new/template?template=https%3A%2F%2Fgithub.com%2FSEU-USUARIO%2FSEU-REPOSITORIO)

> Substitua `SEU-USUARIO/SEU-REPOSITORIO` no botão acima pela URL real do seu repositório no GitHub depois de subir o código.

### Como publicar (passo a passo)

1. Suba este projeto para um repositório no GitHub (público ou privado conectado ao Railway).
2. Acesse [railway.com/new](https://railway.com/new) e selecione **Deploy from GitHub repo**.
3. Escolha este repositório. O Railway vai detectar automaticamente o `Dockerfile` e iniciar o build.
4. Quando o build terminar, vá em **Settings → Networking → Generate Domain** para gerar o link público (`*.up.railway.app`).

Não é necessário configurar variáveis de ambiente — o `Dockerfile` já cuida do build e o servidor estático usa a porta fornecida pelo Railway automaticamente.

## Desenvolvimento local

```bash
pnpm install
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/sc-santiago run dev
```

## Build de produção

```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/sc-santiago run build
```

Os arquivos finais ficam em `artifacts/sc-santiago/dist/public/`.
