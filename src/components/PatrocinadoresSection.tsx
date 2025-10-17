"use client";

import Image from "next/image";

interface Patrocinador {
  id: number;
  nombre: string;
  logo: string;
  url?: string;
}

export default function PatrocinadoresSection() {
  const patrocinadores: Patrocinador[] = [
    { id: 1, nombre: "Patrocinador 1", logo: "/patrocinadores/logo1.png" },
    { id: 2, nombre: "Patrocinador 2", logo: "/patrocinadores/logo2.png" },
    { id: 3, nombre: "Patrocinador 3", logo: "/patrocinadores/logo3.png" },
    { id: 4, nombre: "Patrocinador 4", logo: "/patrocinadores/logo4.png" },
    { id: 5, nombre: "Patrocinador 5", logo: "/patrocinadores/logo5.png" },
  ];

  return (
    <section
      className="w-full py-16"
      style={{ backgroundColor: "var(--santa-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "var(--santa)" }}
        >
          Nuestros Patrocinadores
        </h2>

        {/* Slider horizontal */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide px-2 sm:px-0">
          {patrocinadores.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              style={{ border: "2px solid var(--santa-gold)" }}
            >
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={p.logo}
                    alt={p.nombre}
                    width={150}
                    height={80}
                    className="object-contain"
                  />
                </a>
              ) : (
                <Image
                  src={p.logo}
                  alt={p.nombre}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
