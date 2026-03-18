import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Sabor & Arte",
    default: "Sabor & Arte — Gastronomia com alma",
  },
  description:
    "Receitas autorais, técnicas clássicas e histórias por trás dos pratos mais incríveis do mundo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}