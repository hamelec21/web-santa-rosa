"use client";

import Image from "next/image";
import { useState } from "react";

interface Imagen {
  id: number;
  titulo: string;
  url: string;
}

export default function GaleriaSection() {
  const imagenes: Imagen[] = [
    { id: 1, titulo: "Partido Adultos", url: "/galeria/imagen1.jpg" },
    { id: 2, titulo: "Entrenamiento Infantil", url: "/galeria/imagen2.jpg" },
    { id: 3, titulo: "Damas Sub45", url: "/galeria/imagen3.jpg" },
    { id: 4, titulo: "Celebración Campeonato", url: "/galeria/imagen4.jpg" },
    { id: 5, titulo: "Sub35 en acción", url: "/galeria/imagen5.jpg" },
    { id: 6, titulo: "Premiación", url: "/galeria/imagen6.jpg" },
  ];

  const [imagenActiva, setImagenActiva] = useState<Imagen | null>(null);

  return (
    <section
      className="w-full py-16"
     
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: "var(--santa)" }}
        >
          Galería de Imágenes
        </h2>

        {/* Grid de imágenes */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {imagenes.map((img) => (
            <div
              key={img.id}
              className="relative cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              onClick={() => setImagenActiva(img)}
            >
              <Image
                src={img.url}
                alt={img.titulo}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
              <div
                className="absolute bottom-0 left-0 right-0 text-sm p-2 text-center font-semibold"
                style={{
                  backgroundColor: "var(--santa)",
                  color: "var(--santa-gold)",
                }}
              >
                {img.titulo}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de imagen */}
      {imagenActiva && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg overflow-hidden max-w-3xl w-full">
            <button
              className="absolute top-2 right-2 text-white bg-slate-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-slate-900"
              onClick={() => setImagenActiva(null)}
            >
              ✕
            </button>
            <Image
              src={imagenActiva.url}
              alt={imagenActiva.titulo}
              width={800}
              height={600}
              className="object-cover w-full"
            />
            <div
              className="p-4 text-center font-semibold"
              style={{ color: "var(--santa)" }}
            >
              {imagenActiva.titulo}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
