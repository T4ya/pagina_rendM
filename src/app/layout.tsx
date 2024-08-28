import type { Metadata } from "next";
import { Inter, Phudu } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });
const phudu = Phudu({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "¡Mora Decano UNAL_PALMIRA!", 
  description: "Creado por Jeferson Gonzalez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className + " " + phudu.className}>{children}</body>
    </html>
  );
}
