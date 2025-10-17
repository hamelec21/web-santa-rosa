// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-santa text-white py-10 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Club Deportivo Juventud Santa Rosa.
          Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          <a
            href="/contacto"
            className="hover:text-santa-gold transition-colors duration-300"
          >
            Contacto
          </a>
          <a
            href="/galeria"
            className="hover:text-santa-gold transition-colors duration-300"
          >
            Galería
          </a>
          <a
            href="/noticias"
            className="hover:text-santa-gold transition-colors duration-300"
          >
            Noticias
          </a>
        </div>
      </div>
    </footer>
  );
}
