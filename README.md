# Sabor & Arte

> Blog de gastronomia com receitas autorais, técnicas clássicas e histórias por trás dos pratos mais incríveis do mundo.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)

🔗 **[Ver projeto ao vivo](https://blog-ebac-nine.vercel.app)** &nbsp;|&nbsp; 💻 **[Repositório](https://github.com/andriel9808-lang/blog-ebac)**

---

## Sobre o projeto

O Sabor & Arte é um blog de gastronomia construído com Next.js 15 e App Router. As receitas são carregadas via JSON local com rotas dinâmicas, geração estática de páginas e SEO dinâmico por receita. O projeto explora as principais funcionalidades do ecossistema moderno do React e Next.js.

---

## Preview

### Página inicial
Cards com foto, categoria colorida, tempo de preparo, porções e dificuldade de cada receita.

### Página da receita
Foto hero em destaque, lista de ingredientes em grid, modo de preparo numerado passo a passo e seção com a história do prato.

---

## Funcionalidades

- Listagem de receitas na página inicial com card de destaque
- Página individual para cada receita com rota dinâmica (`/receitas/[slug]`)
- Imagens reais de gastronomia via Unsplash
- Ingredientes, modo de preparo completo e história de cada prato
- SEO dinâmico: cada receita tem seu próprio `title`, `description`, Open Graph e Twitter Card
- Geração estática de todas as páginas no build com `generateStaticParams`
- Página 404 customizada
- Design responsivo com CSS Modules

---

## Tecnologias

- [Next.js 15](https://nextjs.org/) — framework React com App Router
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules) — estilização isolada por componente
- [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image) — otimização automática de imagens
- [Vercel](https://vercel.com/) — deploy e hospedagem

---

## Conceitos aplicados

| Conceito | Onde foi usado |
|---|---|
| Server Components | Todas as páginas são `async` — sem `useEffect` |
| `generateStaticParams` | Pré-renderiza cada receita como página estática no build |
| `generateMetadata` | SEO único por receita (title, description, OG, Twitter Card) |
| `force-static` | Garante SSG na página inicial |
| `notFound()` | Redireciona para 404 quando o slug não existe |
| CSS Modules | Estilos isolados por componente, sem conflitos |
| `next/image` | Imagens externas otimizadas com `remotePatterns` |
| JSON local | Dados das receitas via `data/artigos.json` |

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
│   ├── page.tsx                # Página inicial — listagem das receitas
│   ├── page.module.css
│   ├── globals.css
│   ├── not-found.tsx           # Página 404
│   └── receitas/[slug]/
│       └── page.tsx            # Página da receita (SSG + SEO dinâmico)
├── components/
│   ├── Header/                 # Cabeçalho com hero e blobs decorativos
│   ├── Footer/                 # Rodapé
│   ├── RecipeCard/             # Card da receita na listagem
│   └── RecipePage/             # Conteúdo completo da receita
├── data/
│   └── artigos.json            # Receitas completas com ingredientes e preparo
└── lib/
    └── artigos.ts              # Funções e tipos para buscar as receitas
```

---

Desenvolvido por [Andriel Oliveira](https://github.com/andriel9808-lang)