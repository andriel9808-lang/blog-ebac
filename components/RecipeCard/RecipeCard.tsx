import Link from "next/link";
import Image from "next/image";
import { Artigo, formatarData, corCategoria } from "@/lib/artigos";
import styles from "./RecipeCard.module.css";

type Props = {
  artigo: Artigo;
  destaque?: boolean;
};

export default function RecipeCard({ artigo, destaque = false }: Props) {
  const cor = corCategoria(artigo.categoria);

  return (
    <article className={`${styles.card} ${destaque ? styles.destaque : ""}`}>
      <Link href={`/receitas/${artigo.slug}`} className={styles.imagemLink}>
        <div className={styles.imagemWrap}>
          <Image
            src={artigo.imagem}
            alt={artigo.titulo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.imagem}
          />
          <span className={styles.categoria} style={{ background: cor }}>
            {artigo.categoria}
          </span>
        </div>
      </Link>

      <div className={styles.body}>
        <div className={styles.badges}>
          <span className={styles.badge}>⏱ {artigo.tempoPreparo}</span>
          <span className={styles.badge}>🍽 {artigo.porcoes}</span>
          <span className={styles.badge}>{artigo.dificuldade}</span>
        </div>

        <h2 className={styles.titulo}>
          <Link href={`/receitas/${artigo.slug}`}>{artigo.titulo}</Link>
        </h2>

        <p className={styles.descricao}>{artigo.descricao}</p>

        <div className={styles.footer}>
          <div className={styles.autor}>
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
          <Link
            href={`/receitas/${artigo.slug}`}
            className={styles.btnLer}
            style={{ borderColor: cor, color: cor }}
          >
            Ver receita
          </Link>
        </div>
      </div>
    </article>
  );
}