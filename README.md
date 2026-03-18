# DevBlog

> Blog de artigos sobre desenvolvimento web construído com Next.js 15, App Router e Server Components.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)

🔗 **[Ver projeto ao vivo](https://blog-ebac.vercel.app)** &nbsp;|&nbsp; 💻 **[Repositório](https://github.com/andriel9808-lang/blog-ebac)**

---

## Sobre o projeto

O DevBlog é uma aplicação de blog onde os artigos são carregados dinamicamente com rotas personalizadas. O projeto explora as principais funcionalidades do App Router do Next.js 15, incluindo Server Components, geração estática de páginas e SEO dinâmico por artigo.

---

## Funcionalidades

- Listagem de artigos na página inicial
- Página individual para cada artigo com rota dinâmica (`/artigos/[slug]`)
- SEO dinâmico: cada artigo tem seu próprio `title`, `description`, Open Graph e Twitter Card
- Geração estática de todas as páginas no build com `generateStaticParams`
- Página 404 customizada
- Design responsivo

---

## Tecnologias

- [Next.js 15](https://nextjs.org/) — framework React com App Router
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [Vercel](https://vercel.com/) — deploy e hospedagem

---

## Conceitos aplicados

| Conceito | Onde foi usado |
|---|---|
| Server Components | Todas as páginas são `async` — sem `useEffect` |
| `generateStaticParams` | Pré-renderiza cada artigo como página estática no build |
| `generateMetadata` | SEO único por artigo (title, description, OG, Twitter Card) |
| `force-static` | Garante SSG na página inicial |
| `notFound()` | Redireciona para 404 quando o slug não existe |
| JSON local | Dados dos artigos servidos via `data/artigos.json` |

---

## Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/andriel9808-lang/blog-ebac.git
cd blog-ebac

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no navegador.

---

## Estrutura de pastas

```
blog-ebac/
├── app/
│   ├── layout.tsx              # Layout raiz com metadata base
│   ├── page.tsx                # Página inicial — listagem dos artigos
│   ├── globals.css             # Estilos globais
│   ├── not-found.tsx           # Página 404
│   └── artigos/[slug]/
│       └── page.tsx            # Página do artigo (SSG + SEO dinâmico)
├── data/
│   └── artigos.json            # Fonte dos dados
└── lib/
    └── artigos.ts              # Funções para buscar e formatar artigos
```

---

Desenvolvido por [Andriel Santos](https://github.com/andriel9808-lang)