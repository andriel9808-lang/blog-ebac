import Link from "next/link";
import { Artigo, formatarData } from "@/lib/artigos";
import styles from "./ArticleCard.module.css";

type Props = {
  artigo: Artigo;
};

export default function ArticleCard({ artigo }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        <time dateTime={artigo.dataPublicacao}>
          {formatarData(artigo.dataPublicacao)}
        </time>
        <span>por {artigo.autor}</span>
      </div>

      <h2 className={styles.titulo}>
        <Link href={`/artigos/${artigo.slug}`}>{artigo.titulo}</Link>
      </h2>

      <p className={styles.descricao}>{artigo.descricao}</p>

      <Link href={`/artigos/${artigo.slug}`} className={styles.btnLer}>
        Ler artigo &rarr;
      </Link>
    </article>
  );
}