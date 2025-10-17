import Link from "next/link";

export default function NosotrosIntro() {
  return (
    <section className="relative  py-24 w-full">
      <div className="px-6 text-center w-full max-w-screen-xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
          Conoce nuestro club
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-10 mx-auto max-w-3xl">
          En el Club Deportivo Juventud Santa Rosa fomentamos el deporte, la
          camaradería y el desarrollo de todas nuestras categorías, desde
          adultos hasta damas y juveniles.
        </p>

        <Link
          href="/nosotros"
          className="inline-block px-10 py-4 font-bold rounded-full bg-[var(--santa)] text-[var(--santa-gold)] shadow-lg hover:scale-105 hover:bg-[var(--santa-gold)] hover:text-[var(--santa)] transition-transform duration-300"
        >
          Conócenos
        </Link>
      </div>
    </section>
  );
}
