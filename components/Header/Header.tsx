import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Dev<span className={styles.accent}>Blog</span>
        </Link>
        <p className={styles.subtitle}>
          Artigos sobre desenvolvimento web moderno
        </p>
      </div>
    </header>
  );
}