import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-santa text-white py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo */}
        <div className="flex flex-col items-start gap-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg bg-white p-1.5">
            <Image
              src="/imagen/logo/logo-transparen.png"
              alt="Logo Club Deportivo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-santa-gold mb-2">Enlaces rápidos</h4>
          <a href="/contacto" className="hover:text-santa-gold transition-colors duration-300">Contacto</a>
          <a href="/galeria" className="hover:text-santa-gold transition-colors duration-300">Galería</a>
          <a href="/noticias" className="hover:text-santa-gold transition-colors duration-300">Noticias</a>
          <a href="/campeonatos" className="hover:text-santa-gold transition-colors duration-300">Campeonatos</a>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-santa-gold mb-2">Síguenos</h4>
          <div className="flex gap-4 mt-1">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-santa-gold transition-colors duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-santa-gold transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-santa-gold transition-colors duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-santa-gold transition-colors duration-300">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter / contacto rápido */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-santa-gold mb-2">Suscríbete</h4>
          <p className="text-sm text-gray-200">Recibe noticias y actualizaciones del club.</p>
          <form className="mt-2 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Tu correo"
              className="p-2 rounded-md text-black flex-1"
            />
            <button
              type="submit"
              className="bg-santa-gold text-santa font-semibold px-4 py-2 rounded-md hover:bg-santa-gold-light transition-colors duration-300"
            >
              Suscribirse
            </button>
          </form>
        </div>

      </div>

      {/* Línea inferior con derechos y crédito */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-300">
        &copy; {new Date().getFullYear()} Club Deportivo Juventud Santa Rosa. Todos los derechos reservados. <br />
        Sitio desarrollado por{" "}
        <a
          href="https://proscom.cl"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-santa-gold transition-colors duration-300"
        >
          proscom.cl
        </a>
      </div>
    </footer>
  );
}
