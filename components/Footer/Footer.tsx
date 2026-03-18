import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>Sabor<span className={styles.amp}>&</span>Arte</span>
          <p>Gastronomia com alma, receitas com história.</p>
        </div>
        <div className={styles.credit}>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://github.com/andriel9808-lang"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andriel Oliveira
            </a>{" "}
            com Next.js 15
          </p>
        </div>
      </div>
    </footer>
  );
}