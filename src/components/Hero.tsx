// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--santa) 0%, var(--santa-gold-light) 100%)",
      }}
    >
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1
            style={{ color: "var(--santa-bg)" }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg"
          >
            Club Deportivo Juventud Santa Rosa
          </h1>
          <p
            style={{ color: "var(--santa-bg)" }}
            className="mt-6 text-lg sm:text-xl md:text-2xl drop-shadow-md max-w-xl mx-auto md:mx-0"
          >
            Vive la pasión del fútbol en nuestras categorías Adultos, Sub35, Sub45 y Damas.
          </p>

          {/* Botón único CTA */}
          <div className="mt-10 flex justify-center md:justify-start">
            <a
              href="/noticias"
              style={{ backgroundColor: "var(--santa-gold)", color: "var(--santa)" }}
              className="px-12 py-4 font-bold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[var(--santa-gold-light)]"
            >
              Ver Noticias
            </a>
          </div>
        </div>

        {/* Imagen deportiva */}
        <div className="flex-1 relative z-10 transform transition-transform duration-500 hover:scale-105">
          <Image
            src="/hero-sports.png"
            alt="Club Deportivo Juventud Santa Rosa"
            width={600}
            height={450}
            className="rounded-xl shadow-2xl object-contain w-full h-auto"
          />
        </div>
      </div>

      {/* Decoraciones sutiles */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-santa-gold/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-santa/20 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
