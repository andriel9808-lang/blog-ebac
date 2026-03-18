import Link from "next/link";
import { Artigo, formatarData } from "@/lib/artigos";
import styles from "./ArticlePage.module.css";

type Props = {
  artigo: Artigo;
};

export default function ArticlePage({ artigo }: Props) {
  const paragrafos = artigo.conteudo.split("\n\n");

  return (
    <article className={styles.artigo}>
      <nav className={styles.breadcrumb}>
        <Link href="/">&larr; Voltar para todos os artigos</Link>
      </nav>

      <header className={styles.header}>
        <div className={styles.meta}>
          <time dateTime={artigo.dataPublicacao}>
            {formatarData(artigo.dataPublicacao)}
          </time>
          <span>por {artigo.autor}</span>
        </div>
        <h1 className={styles.titulo}>{artigo.titulo}</h1>
        <p className={styles.descricao}>{artigo.descricao}</p>
      </header>

      <div className={styles.conteudo}>
        {paragrafos.map((paragrafo, index) => {
          if (paragrafo.startsWith("```")) {
            const linhas = paragrafo.split("\n");
            const codigo = linhas.slice(1, -1).join("\n");
            return (
              <pre key={index} className={styles.codeBlock}>
                <code>{codigo}</code>
              </pre>
            );
          }

          if (paragrafo.includes("\n-")) {
            const [intro, ...itens] = paragrafo.split("\n-");
            return (
              <div key={index}>
                {intro && <p>{intro}</p>}
                <ul className={styles.lista}>
                  {itens.map((item, i) => (
                    <li key={i}>{item.trim()}</li>
                  ))}
                </ul>
              </div>
            );
          }

          return <p key={index}>{paragrafo}</p>;
        })}
      </div>
    </article>
  );
}