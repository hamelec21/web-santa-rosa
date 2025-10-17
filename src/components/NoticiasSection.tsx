"use client";

import Image from "next/image";
import Link from "next/link";

interface Noticia {
  id: number;
  titulo: string;
  slug: string;
  fecha: string;
  imagen?: string;
  resumen?: string;
}

export default function NoticiasSection() {
  const noticias: Noticia[] = [
    {
      id: 1,
      titulo: "Club Santa gana el campeonato 2025",
      slug: "club-santa-gana-campeonato-2025",
      fecha: "2025-10-16",
      imagen: "/noticias/noticia1.jpg",
      resumen: "El Club Santa se consagró campeón en una emocionante final contra Club Rivales..."
    },
    {
      id: 2,
      titulo: "Nueva jornada de partidos infantiles",
      slug: "nueva-jornada-partidos-infantiles",
      fecha: "2025-10-15",
      imagen: "/noticias/noticia2.jpg",
      resumen: "Este fin de semana se realizó la jornada número 5 del torneo infantil con resultados destacados..."
    },
    {
      id: 3,
      titulo: "Damas  muestran gran desempeño",
      slug: "damas-sub45-muestran-gran-desempeno",
      fecha: "2025-10-14",
      imagen: "/noticias/noticia3.jpg",
      resumen: "Las jugadoras de la categoría  sorprendieron con su rendimiento y espíritu deportivo..."
    },
  ];

  return (
    <section className="w-full py-16" style={{ backgroundColor: "var(--santa-bg)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--santa)" }}>
          Últimas Noticias
        </h2>

        {/* Grid de noticias */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-shadow hover:shadow-xl"
              style={{ borderTop: "4px solid var(--santa-gold)" }}
            >
              {/* Imagen */}
              {noticia.imagen && (
                <div className="relative w-full h-48">
                  <Image
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--santa)" }}>
                  {noticia.titulo}
                </h3>
                {noticia.resumen && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {noticia.resumen}
                  </p>
                )}
                <div className="mt-auto flex justify-between items-center text-sm text-gray-500">
                  <span>{new Date(noticia.fecha).toLocaleDateString("es-CL")}</span>
                  <Link
                    href={`/noticias/${noticia.slug}`}
                    className="font-semibold hover:underline"
                    style={{ color: "var(--santa)" }}
                  >
                    Leer más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
