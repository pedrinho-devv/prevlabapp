import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrevLab - Conteúdo Inteligente para Advogados Previdenciaristas",
  description:
    "Crie roteiros profissionais para Reels, posts e carrosséis alinhados com as normas da OAB. A ferramenta de conteúdo que todo advogado previdenciarista precisa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
