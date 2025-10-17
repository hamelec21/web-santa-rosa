import Image from "next/image";
import Link from "next/link";

interface SeriesCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export default function SeriesCard({ title, description, imageSrc, link }: SeriesCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {/* Imagen de la serie */}
      <div className="relative w-full h-56 sm:h-48 md:h-56">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-xl font-bold text-santa">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <Link
          href={link}
          className="mt-auto inline-block text-center bg-santa text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-santa-gold hover:text-santa transition-colors duration-300"
        >
          Ver {title}
        </Link>
      </div>
    </div>
  );
}
