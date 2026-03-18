import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            Sabor<span className={styles.amp}>&</span>Arte
          </Link>
          <nav className={styles.nav}>
            <Link href="/">Receitas</Link>
            <Link href="/">Técnicas</Link>
            <Link href="/">Sobre</Link>
          </nav>
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Gastronomia com alma</span>
          <h1 className={styles.heroTitle}>
            Cozinhar é um<br />
            <em>ato de amor.</em>
          </h1>
          <p className={styles.heroSub}>
            Receitas autorais, técnicas clássicas e histórias por trás
            dos pratos mais incríveis do mundo.
          </p>
        </div>
        <div className={styles.heroDecor}>
          <div className={styles.blob1} />
          <div className={styles.blob2} />
          <div className={styles.blob3} />
        </div>
      </div>
    </header>
  );
}