import SeriesCard from "./SeriesCard";

export default function SeriesSection() {
  const series = [
    {
      title: "Adultos",
      description: "Sigue toda la acción de nuestros partidos de adultos.",
      imageSrc: "/series/adultos.jpg",
      link: "/series/adultos",
    },
    {
      title: "Infantiles",
      description: "Descubre el talento de nuestras categorías infantiles.",
      imageSrc: "/series/infantiles.jpg",
      link: "/series/infantiles",
    },
    {
      title: "Damas",
      description: "Conoce los partidos y resultados de nuestras damas.",
      imageSrc: "/series/damas.jpg",
      link: "/series/damas",
    },
  ];

  return (
    <section className="w-full  py-20">
      <div className="px-6 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-santa text-center mb-12">
          Nuestras Series
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {series.map((s) => (
            <SeriesCard
              key={s.title}
              title={s.title}
              description={s.description}
              imageSrc={s.imageSrc}
              link={s.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
