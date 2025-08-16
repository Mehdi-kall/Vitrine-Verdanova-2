import { Facebook, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-100 text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Description */}
        <div>
          <h3 className="text-lg font-bold text-green-700">Verdanova Solutions</h3>
          <p className="mt-2 text-sm">
            Des solutions innovantes pour un avenir durable.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="text-green-700 font-semibold mb-3">Liens rapides</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-green-500">À propos</a></li>
            <li><a href="#services" className="hover:text-green-500">Services</a></li>
            <li><a href="#projects" className="hover:text-green-500">Projets</a></li>
            <li><a href="#contact" className="hover:text-green-500">Contact</a></li>
          </ul>
        </div>

        {/* Coordonnées */}
        <div>
          <h4 className="text-green-700 font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-green-600" /> Verdanova.solutions@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-green-600" /> +216 53 605 685
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-green-600" /> Cyberpark Monastir 5000
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h4 className="text-green-700 font-semibold mb-3">Suivez-nous</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/Verdanova.solutions" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} className="text-green-700 hover:text-green-500" />
            </a>
            <a href="https://www.linkedin.com/in/verdanova-solutions-8354b72b0/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} className="text-green-700 hover:text-green-500" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={24} className="text-green-700 hover:text-green-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © 2024 Verdanova Solutions. Tous droits réservés.
      </div>
    </footer>
  );
}
