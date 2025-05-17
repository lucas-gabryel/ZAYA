import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAYA | Moda Essencial para Todos os Estilos",
  description:"Descubra a ZAYA – onde conforto e estilo se encontram. Roupas essenciais e minimalistas para quem valoriza autenticidade e elegância no dia a dia.",
  keywords: "ZAYA, loja de roupas, moda minimalista, streetwear elegante, roupas femininas, roupas masculinas, moda jovem, estilo essencial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
