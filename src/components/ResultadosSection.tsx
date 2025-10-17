"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Resultado {
  equipoLocal: string;
  equipoVisitante: string;
  goles: string;
  fecha: string;
  logoLocal?: string;
  logoVisitante?: string;
}

interface Serie {
  nombre: string;
  resultados: Resultado[];
}

interface Categoria {
  nombre: string;
  series: Serie[];
}

export default function ResultadosSection() {
  const categorias: Categoria[] = [
    {
      nombre: "Adultos",
      series: [
        {
          nombre: "Primera",
          resultados: [
            {
              equipoLocal: "Club A",
              equipoVisitante: "Club B",
              goles: "2-1",
              fecha: "12/10/2025",
              logoLocal: "/logos/club-a.png",
              logoVisitante: "/logos/club-b.png",
            },
          ],
        },
        {
          nombre: "Segunda",
          resultados: [
            {
              equipoLocal: "Club C",
              equipoVisitante: "Club D",
              goles: "0-0",
              fecha: "13/10/2025",
              logoLocal: "/logos/club-c.png",
              logoVisitante: "/logos/club-d.png",
            },
          ],
        },
        {
          nombre: "Tercera",
          resultados: [
            {
              equipoLocal: "Club E",
              equipoVisitante: "Club F",
              goles: "3-2",
              fecha: "14/10/2025",
              logoLocal: "/logos/club-e.png",
              logoVisitante: "/logos/club-f.png",
            },
          ],
        },
        {
          nombre: "Sub35",
          resultados: [
            {
              equipoLocal: "Club G",
              equipoVisitante: "Club H",
              goles: "1-1",
              fecha: "15/10/2025",
              logoLocal: "/logos/club-g.png",
              logoVisitante: "/logos/club-h.png",
            },
          ],
        },
        {
          nombre: "Sub45",
          resultados: [
            {
              equipoLocal: "Club I",
              equipoVisitante: "Club J",
              goles: "2-2",
              fecha: "16/10/2025",
              logoLocal: "/logos/club-i.png",
              logoVisitante: "/logos/club-j.png",
            },
          ],
        },
      ],
    },
    {
      nombre: "Damas",
      series: [
        {
          nombre: "Primera",
          resultados: [
            {
              equipoLocal: "Club K",
              equipoVisitante: "Club L",
              goles: "3-1",
              fecha: "12/10/2025",
              logoLocal: "/logos/club-k.png",
              logoVisitante: "/logos/club-l.png",
            },
          ],
        },
      ],
    },
    {
      nombre: "Infantiles",
      series: [
        {
          nombre: "Primera",
          resultados: [
            {
              equipoLocal: "Club Q",
              equipoVisitante: "Club R",
              goles: "0-2",
              fecha: "12/10/2025",
              logoLocal: "/logos/club-q.png",
              logoVisitante: "/logos/club-r.png",
            },
          ],
        },
        {
          nombre: "Segunda",
          resultados: [
            {
              equipoLocal: "Club S",
              equipoVisitante: "Club T",
              goles: "1-3",
              fecha: "13/10/2025",
              logoLocal: "/logos/club-s.png",
              logoVisitante: "/logos/club-t.png",
            },
          ],
        },
        {
          nombre: "Tercera",
          resultados: [
            {
              equipoLocal: "Club U",
              equipoVisitante: "Club V",
              goles: "2-2",
              fecha: "14/10/2025",
              logoLocal: "/logos/club-u.png",
              logoVisitante: "/logos/club-v.png",
            },
          ],
        },
      ],
    },
  ];

  const [categoriaActiva, setCategoriaActiva] = useState(categorias[0].nombre);
  const categoriaSeleccionada = categorias.find(
    (cat) => cat.nombre === categoriaActiva
  );

  const categoriaColor: Record<string, string> = {
    Adultos: "bg-santa text-white",
    Damas: "bg-santa-gold text-white",
    Infantiles: "bg-santa-gold-light text-white",
  };

  return (
    <section className="w-full bg-santa-bg py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-santa text-center mb-12">
          Últimos Resultados
        </h2>

        {/* Tabs categorías */}
        <div className="flex gap-4 mb-12 overflow-x-auto sm:justify-center sm:overflow-visible scrollbar-hide px-2">
          {categorias.map((cat) => (
            <button
              key={cat.nombre}
              className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 whitespace-nowrap ${
                cat.nombre === categoriaActiva
                  ? categoriaColor[cat.nombre]
                  : "bg-white text-gray-800 border border-gray-300"
              }`}
              onClick={() => setCategoriaActiva(cat.nombre)}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Series Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoriaSeleccionada?.series.map((serie) => {
            const ultimoResultado =
              serie.resultados[serie.resultados.length - 1];
            if (!ultimoResultado) return null;

            return (
              <div
                key={serie.nombre}
                className="flex flex-col justify-between rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow bg-white border-l-4 border-santa"
              >
                <h3 className="text-lg font-bold text-santa mb-4">
                  {serie.nombre}
                </h3>

                {/* Scoreboard */}
                <div className="flex items-center justify-between mb-4 bg-gray-100 p-3 rounded-lg">
                  {/* Equipo Local */}
                  <div className="flex flex-col items-center">
                    {ultimoResultado.logoLocal && (
                      <Image
                        src={ultimoResultado.logoLocal}
                        alt={ultimoResultado.equipoLocal}
                        width={50}
                        height={50}
                        className="rounded-full object-cover border border-gray-200 mb-1"
                      />
                    )}
                    <span className="text-sm font-semibold">
                      {ultimoResultado.equipoLocal}
                    </span>
                  </div>

                  {/* Resultado */}
                  <div className="text-2xl font-bold text-santa">
                    {ultimoResultado.goles}
                  </div>

                  {/* Equipo Visitante */}
                  <div className="flex flex-col items-center">
                    {ultimoResultado.logoVisitante && (
                      <Image
                        src={ultimoResultado.logoVisitante}
                        alt={ultimoResultado.equipoVisitante}
                        width={50}
                        height={50}
                        className="rounded-full object-cover border border-gray-200 mb-1"
                      />
                    )}
                    <span className="text-sm font-semibold">
                      {ultimoResultado.equipoVisitante}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    {ultimoResultado.fecha}
                  </span>
                  <Link
                    href={`/series/${categoriaActiva.toLowerCase()}/${serie.nombre.toLowerCase()}`}
                    className="text-santa font-semibold hover:underline text-sm"
                  >
                    Ver más resultados
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
