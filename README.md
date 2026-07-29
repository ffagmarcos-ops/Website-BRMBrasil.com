# Grupo BRM - Website Institucional

Site institucional completo, moderno, responsivo e de alta fidelidade visual desenvolvido para o **Grupo BRM** (Contabilidade, M.O Publicidade, Desenvolvimento, DIGMIDIA e Sistemas para Supermercados).

## 🚀 Tecnologias Utilizadas

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) + CSS Modules
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Formulários & Validação**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Imagens & Animações**: Next Image & Framer Motion
- **SEO & Indexação**: Metadata API, OpenGraph, Schema.org (JSON-LD), Dynamic Sitemap e Robots.txt

---

## 📁 Estrutura de Pastas

```
SITE GRUPO BRM/
├── public/
│   ├── images/
│   │   ├── logo-brm.svg          # Logo vetorial oficial em fundo claro
│   │   ├── logo-brm-light.svg    # Logo vetorial para rodapé / fundo escuro
│   │   └── escritorio-brm.jpg    # Imagem corporativa do banner principal
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/route.ts  # API route para envio do formulário de contato
│   │   ├── sobre/page.tsx        # Página institucional Sobre o Grupo
│   │   ├── solucoes/page.tsx     # Página de Soluções Integradas
│   │   ├── empresas/
│   │   │   ├── page.tsx          # Listagem das 5 empresas do grupo
│   │   │   └── [slug]/page.tsx   # Página dinâmica de cada empresa
│   │   ├── cases/page.tsx        # Página de Cases e Resultados com filtros
│   │   ├── contato/page.tsx      # Página dedicada de Contato
│   │   ├── politica-de-privacidade/page.tsx
│   │   ├── termos-de-uso/page.tsx
│   │   ├── not-found.tsx         # Página 404 personalizada
│   │   ├── layout.tsx            # Layout raiz (Header, Footer, Metadata)
│   │   ├── page.tsx              # Página Inicial (Home)
│   │   ├── globals.css           # Estilos globais e fontes
│   │   ├── sitemap.ts            # Gerador de sitemap.xml
│   │   └── robots.ts             # Gerador de robots.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Cabeçalho fixo com submenu e menu mobile
│   │   │   └── Footer.tsx        # Rodapé corporativo com ano dinâmico
│   │   ├── home/
│   │   │   ├── Hero.tsx          # Banner principal (Lado azul + Foto escritório)
│   │   │   ├── CompanyCards.tsx  # Os 5 cards coloridos das empresas
│   │   │   ├── AboutSection.tsx  # Apresentação + 4 cards de estatísticas
│   │   │   ├── SolutionsSection.tsx # 5 cards de soluções para empresas
│   │   │   ├── ProcessSection.tsx # "Como funciona" + Diferenciais + Cases
│   │   │   └── ContactCTA.tsx    # Faixa pré-rodapé com formulário e WhatsApp
│   │   └── ui/
│   │       ├── Logo.tsx          # Componente reutilizável de marca
│   │       ├── WhatsAppButton.tsx# Botão de conversão com mensagem configurada
│   │       ├── ContactForm.tsx   # Formulário validado com Zod
│   │       ├── FAQ.tsx           # Sanfona interativa de dúvidas
│   │       ├── Breadcrumb.tsx    # Navegação interna
│   │       └── CookieNotice.tsx  # Notificação LGPD de cookies
│   └── data/
│       ├── site.ts               # Configurações globais e menu de navegação
│       ├── companies.ts          # Dados e serviços das 5 empresas
│       ├── services.ts           # Dados das soluções para empresas
│       ├── cases.ts              # Cases de sucesso e resultados
│       ├── about.ts              # História e indicadores numerados
│       ├── differentials.ts      # Etapas do processo e lista de diferenciais
│       └── faq.ts                # Perguntas frequentes gerais
├── .env.example
├── .env.local
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🛠️ Como Executar o Projeto Localmente

1. **Clonar ou acessar a pasta do projeto**:
   ```bash
   cd "SITE GRUPO BRM"
   ```

2. **Instalar as dependências**:
   ```bash
   npm install
   ```

3. **Configurar as Variáveis de Ambiente**:
   Crie um arquivo `.env.local` na raiz do projeto baseado no `.env.example`:
   ```env
   NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Executar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## ✏️ Como Editar Conteúdos e Informações da Empresa

Toda a camada de dados foi centralizada na pasta `src/data/`, permitindo alterar conteúdos sem editar o código visual dos componentes:

- **Contatos, Redes Sociais e Telefone do WhatsApp**:
  Edite o arquivo `src/data/site.ts`.
- **Informações das 5 Empresas do Grupo**:
  Edite o arquivo `src/data/companies.ts` (altere serviços, descrições, cores, benefícios e FAQs).
- **Indicadores Numéricos (+200 Clientes, +600 Projetos, 15+ Anos)**:
  Edite o arquivo `src/data/about.ts`.
- **Cases de Sucesso**:
  Edite o arquivo `src/data/cases.ts`.

---

## 🎨 Como Substituir Logos e Imagens

- **Logo Principal (Versão Clara / Fundo Branco)**:
  Substitua o arquivo vetorial em `public/images/logo-brm.svg`.
- **Logo Secundária (Versão Rodapé / Fundo Escuro)**:
  Substitua o arquivo em `public/images/logo-brm-light.svg`.
- **Fotografia do Escritório Corporativo (Banner)**:
  Substitua a imagem em `public/images/escritorio-brm.jpg`.

---

## 🐳 Deploy no Portainer (via Repositório)

Este projeto já está preparado para deploy em servidor com Traefik e Portainer usando o arquivo [docker-compose.yml](docker-compose.yml).

### Pré-requisitos no servidor

- Rede externa `traefik` já criada e utilizada pelo proxy.
- Resolver TLS `myresolver` já configurado no Traefik.
- DNS dos domínios apontando para o servidor:
  - `brmbrasil.com`
  - `www.brmbrasil.com`

### Subir stack pelo Portainer

1. No Portainer, acesse **Stacks** > **Add stack** > **Repository**.
2. Informe a URL deste repositório e branch desejada.
3. Defina o caminho do compose como `docker-compose.yml`.
4. Em **Environment variables** da stack, configure:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` (ex.: `5511999999999`)
5. Clique em **Deploy the stack**.

### Observações de compatibilidade com servidor compartilhado

- Não foi definido `container_name`, evitando conflito com outras stacks.
- Não há volumes nomeados neste projeto, portanto não existe risco de colisão de nomes de volume.
- Os identificadores Traefik foram prefixados com `brmbrasil-` para reduzir risco de duplicidade de routers/middlewares/services.

---

## 🚀 Como Realizar Deploy na Vercel

1. Envie o projeto para o seu repositório GitHub, GitLab ou Bitbucket.
2. Acesse a plataforma [Vercel](https://vercel.com/) e import o repositório.
3. Nas configurações de **Environment Variables**, adicione:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_SITE_URL`
4. Clique em **Deploy**. O Next.js será compilado e publicado automaticamente.

---

## ✅ Verificação e Qualidade de Código

Para testar e validar o projeto antes de subir para produção:

```bash
# Executar a verificação do linter
npm run lint

# Executar o build estático e compilação TypeScript
npm run build
```
