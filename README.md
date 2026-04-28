# SC Santiago — Corretora de Seguros de Vida

Site institucional da SC Santiago Corretora de Seguros de Vida (São Paulo, Brasil).

## Deploy no Railway

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/new/template?template=https%3A%2F%2Fgithub.com%2FSEU-USUARIO%2FSEU-REPOSITORIO)

**O Railway vai criar um único serviço** usando o `Dockerfile` na raiz do projeto. Não vai dividir em múltiplos serviços.

### Passo a passo

1. Suba este repositório para o GitHub.
2. Substitua `SEU-USUARIO/SEU-REPOSITORIO` no botão acima pela URL do seu repo.
3. Clique no botão. O Railway vai detectar o `Dockerfile` e criar **um serviço único**.
4. Em **Settings → Networking → Generate Domain**, gere o link público (`*.up.railway.app`).

Não precisa configurar variáveis de ambiente — o Railway injeta a `PORT` automaticamente e o Dockerfile cuida do resto.

## Desenvolvimento local

```bash
pnpm install
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/sc-santiago run dev
```

## Build local

```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/sc-santiago run build
```

Os arquivos finais ficam em `artifacts/sc-santiago/dist/public/`.
