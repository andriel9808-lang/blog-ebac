import type { Metadata } from "next";
import { getTodosArtigos } from "@/lib/artigos";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import styles from "./page.module.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Início",
  description:
    "Todos os artigos sobre desenvolvimento web com Next.js, React e muito mais.",
};

export default function HomePage() {
  const artigos = getTodosArtigos();

  return (
    <main className={styles.container}>
      <Header />
      <section className={styles.grid}>
        {artigos.map((artigo) => (
          <ArticleCard key={artigo.id} artigo={artigo} />
        ))}
      </section>
      <Footer />
    </main>
  );
}