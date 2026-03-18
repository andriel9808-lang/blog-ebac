import Link from "next/link";
import type { Metadata } from "next";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.mensagem}>Artigo ou página não encontrada.</p>
      <Link href="/" className={styles.btn}>
        &larr; Voltar para o início
      </Link>
    </main>
  );
}