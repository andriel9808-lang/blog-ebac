import artigos from "@/data/artigos.json";

export type Artigo = {
  id: string;
  slug: string;
  titulo: string;
  autor: string;
  dataPublicacao: string;
  categoria: string;
  tempoPreparo: string;
  porcoes: string;
  dificuldade: string;
  imagem: string;
  descricao: string;
  ingredientes: string[];
  modoPreparo: string[];
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

export function corCategoria(categoria: string): string {
  const cores: Record<string, string> = {
    "Massas & Risotos": "#f59e0b",
    "Cozinha Mexicana": "#ef4444",
    "Panificação": "#8b5cf6",
    "Frutos do Mar": "#06b6d4",
    "Carnes": "#dc2626",
  };
  return cores[categoria] ?? "#f97316";
}