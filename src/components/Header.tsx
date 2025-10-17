// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Inicio", "Noticias", "Campeonatos", "Galería", "Contacto"];

  return (
    <header
      style={{ backgroundColor: "var(--santa)" }}
      className="shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo con sombra y nombre del club */}
        <div className="flex items-center gap-3">
          <div
            className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg"
            style={{ backgroundColor: "white", padding: "6px" }}
          >
            <Image
              src="/imagen/logo/logo-transparen.png" // logo azul
              alt="Logo Club Deportivo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              style={{ color: "white" }}
              className="hover:text-[var(--santa-gold-light)] transition-all duration-300 font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Botón Hamburguesa Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1 p-2 rounded hover:bg-white/20 transition"
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menú Mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-[var(--santa)] px-6 pb-4 flex flex-col gap-4 animate-slideDown">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              style={{ color: "white" }}
              className="hover:text-[var(--santa-gold-light)] transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}

      <style jsx>{`
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
