import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTodosArtigos, getArtigoPorSlug } from "@/lib/artigos";
import ArticlePage from "@/components/ArticlePage/ArticlePage";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const artigos = getTodosArtigos();
  return artigos.map((artigo) => ({ slug: artigo.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artigo = getArtigoPorSlug(slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo que você procura não existe.",
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.descricao,
    authors: [{ name: artigo.autor }],
    openGraph: {
      title: artigo.titulo,
      description: artigo.descricao,
      type: "article",
      publishedTime: artigo.dataPublicacao,
      authors: [artigo.autor],
    },
    twitter: {
      card: "summary",
      title: artigo.titulo,
      description: artigo.descricao,
    },
  };
}

export default async function ArtigoPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artigo = getArtigoPorSlug(slug);

  if (!artigo) notFound();

  return (
    <main className={styles.container}>
      <ArticlePage artigo={artigo} />
      <Footer />
    </main>
  );
}