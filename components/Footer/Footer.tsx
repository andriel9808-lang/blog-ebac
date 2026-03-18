import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Feito com Next.js 15 &middot; Tarefa EBAC &middot;{" "}
        <a
          href="https://github.com/andriel9808-lang"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}