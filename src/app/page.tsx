import GaleriaSection from "@/components/GaleriaSection";
import Hero from "@/components/Hero";
import NosotrosIntro from "@/components/NosotrosIntro";
import NoticiasSection from "@/components/NoticiasSection";
import PatrocinadoresSection from "@/components/PatrocinadoresSection";
import ResultadosSection from "@/components/ResultadosSection";
import SeriesSection from "@/components/SeriesSection";

export default function Home() {
  return (
    <div className="font-sans bg-santa-bg min-h-screen">
      {/* Hero */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Sección Nosotros / Introducción */}
      <section className="w-full bg-white">
        <NosotrosIntro />
      </section>

      {/*Sección de Resultados */}
      <section className="w-full bg-gray-50">
        <ResultadosSection />
      </section>

      {/* Sección Series */}
      <section className="w-full bg-white">
        <SeriesSection />
      </section>

      {/* Sección Noticias */}
      <section className="w-full bg-gray-50">
        <NoticiasSection />
      </section>

      {/* Sección Galeria */}
      <section className="w-full bg-white">
        <GaleriaSection />
      </section>

      {/* Sección patrocinadores */}
      <section className="w-full bg-white">
        <PatrocinadoresSection />
      </section>
    </div>
  );
}
