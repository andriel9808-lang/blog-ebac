import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>
      <span className={styles.emoji}>🍽️</span>
      <h1 className={styles.titulo}>Receita não encontrada</h1>
      <p className={styles.sub}>Parece que esse prato saiu do cardápio.</p>
      <Link href="/" className={styles.btn}>
        ← Voltar ao início
      </Link>
    </main>
  );
}