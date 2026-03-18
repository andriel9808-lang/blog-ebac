import artigos from "@/data/artigos.json";

export type Artigo = {
  id: string;
  slug: string;
  titulo: string;
  autor: string;
  dataPublicacao: string;
  descricao: string;
  conteudo: string;
};

export function getTodosArtigos(): Artigo[] {
  return artigos as Artigo[];
}

export function getArtigoPorSlug(slug: string): Artigo | undefined {
  return (artigos as Artigo[]).find((a) => a.slug === slug);
}

export function formatarData(dataISO: string): string {
  return new Date(dataISO).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}