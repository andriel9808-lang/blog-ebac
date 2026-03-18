import type { Metadata } from "next";
import { getTodosArtigos } from "@/lib/artigos";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import styles from "./page.module.css";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Receitas",
  description:
    "Receitas autorais, técnicas clássicas e histórias por trás dos pratos mais incríveis do mundo.",
};

export default function HomePage() {
  const artigos = getTodosArtigos();
  const [destaque, ...restantes] = artigos;

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Últimas receitas</h2>
            <span className={styles.sectionCount}>{artigos.length} receitas</span>
          </div>

          <div className={styles.grid}>
            <RecipeCard artigo={destaque} destaque />
            {restantes.map((artigo) => (
              <RecipeCard key={artigo.id} artigo={artigo} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}