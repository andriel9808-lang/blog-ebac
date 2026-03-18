import Link from "next/link";
import Image from "next/image";
import { Artigo, formatarData, corCategoria } from "@/lib/artigos";
import styles from "./RecipePage.module.css";

type Props = {
  artigo: Artigo;
};

export default function RecipePage({ artigo }: Props) {
  const cor = corCategoria(artigo.categoria);

  return (
    <article className={styles.artigo}>
      <nav className={styles.breadcrumb}>
        <Link href="/">← Todas as receitas</Link>
      </nav>

      {/* Imagem hero */}
      <div className={styles.heroWrap}>
        <Image
          src={artigo.imagem}
          alt={artigo.titulo}
          fill
          priority
          sizes="(max-width: 780px) 100vw, 780px"
          className={styles.heroImagem}
        />
        <div className={styles.heroOverlay} />
        <span className={styles.heroCategoria} style={{ background: cor }}>
          {artigo.categoria}
        </span>
      </div>

      <header className={styles.header}>
        <div className={styles.badges}>
          <span className={styles.badge}>⏱ {artigo.tempoPreparo}</span>
          <span className={styles.badge}>🍽 {artigo.porcoes}</span>
          <span className={styles.badge}>🎯 {artigo.dificuldade}</span>
        </div>

        <h1 className={styles.titulo}>{artigo.titulo}</h1>
        <p className={styles.descricao}>{artigo.descricao}</p>

        <div className={styles.autorRow}>
          <div className={styles.avatar} style={{ background: cor }}>
            {artigo.autor.charAt(0)}
          </div>
          <div>
            <span className={styles.autorNome}>{artigo.autor}</span>
            <time className={styles.data} dateTime={artigo.dataPublicacao}>
              {formatarData(artigo.dataPublicacao)}
            </time>
          </div>
        </div>

        <div className={styles.divider} style={{ background: cor }} />
      </header>

      {/* Ingredientes */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>🧂</span>
          Ingredientes
        </h2>
        <ul className={styles.ingredientes}>
          {artigo.ingredientes.map((item, index) => (
            <li key={index} className={styles.ingredienteItem}>
              <span className={styles.ingredienteDot} style={{ background: cor }} />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Modo de Preparo */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>👨‍🍳</span>
          Modo de Preparo
        </h2>
        <ol className={styles.passos}>
          {artigo.modoPreparo.map((passo, index) => (
            <li key={index} className={styles.passo}>
              <span className={styles.passoNum} style={{ background: cor }}>
                {index + 1}
              </span>
              <p>{passo}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* História */}
      <section className={styles.secao}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}>📖</span>
          A história do prato
        </h2>
        <div className={styles.conteudo}>
          {artigo.conteudo.split("\n\n").map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}
        </div>
      </section>
    </article>
  );
}