FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.18.3 --activate

COPY package.json .npmrc ./
COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./
COPY tsconfig.base.json tsconfig.json ./
COPY artifacts/sc-santiago ./artifacts/sc-santiago

RUN sed -i '/api-client-react/d' artifacts/sc-santiago/package.json || true

RUN node -e "const fs=require('fs');const p='artifacts/sc-santiago/tsconfig.json';const c=JSON.parse(fs.readFileSync(p));delete c.references;fs.writeFileSync(p,JSON.stringify(c,null,2));"

RUN node -e "const fs=require('fs');const p='tsconfig.json';const c=JSON.parse(fs.readFileSync(p));c.references=[];fs.writeFileSync(p,JSON.stringify(c,null,2));"

RUN cat > pnpm-workspace.yaml <<'EOF'
packages:
  - artifacts/sc-santiago
autoInstallPeers: false
onlyBuiltDependencies:
  - esbuild
catalog:
  '@replit/vite-plugin-cartographer': ^0.5.1
  '@replit/vite-plugin-dev-banner': ^0.1.1
  '@replit/vite-plugin-runtime-error-modal': ^0.0.6
  '@tailwindcss/vite': ^4.1.14
  '@tanstack/react-query': ^5.90.21
  '@types/node': ^25.3.3
  '@types/react': ^19.2.0
  '@types/react-dom': ^19.2.0
  '@vitejs/plugin-react': ^5.0.4
  class-variance-authority: ^0.7.1
  clsx: ^2.1.1
  framer-motion: ^12.23.24
  lucide-react: ^0.545.0
  react: 19.1.0
  react-dom: 19.1.0
  tailwind-merge: ^3.3.1
  tailwindcss: ^4.1.14
  vite: ^7.3.0
  zod: ^3.25.76
EOF

RUN rm -f pnpm-lock.yaml && pnpm install --no-frozen-lockfile --ignore-scripts

RUN PORT=3000 BASE_PATH=/ pnpm --filter @workspace/sc-santiago run build

FROM node:20-alpine AS runner

WORKDIR /app

RUN npm install -g serve@14

COPY --from=builder /app/artifacts/sc-santiago/dist/public ./public

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["sh", "-c", "serve -s public -l ${PORT:-3000}"]
