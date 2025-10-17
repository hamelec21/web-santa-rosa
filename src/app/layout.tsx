import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header"; // importa tu Header
import Footer from "@/components/Footer"; // importa tu Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Club Deportivo Juventud Santa Rosa",
  description: "Sitio oficial del Club Deportivo Juventud Santa Rosa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-santa-bg`}
      >
        {/* Header global */}
        <Header />

        {/* Contenido de cada página */}
        <main>{children}</main>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}
