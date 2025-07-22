import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Assurez-vous d’avoir installé lucide-react ou utilisez des icônes similaires

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo à gauche */}
        <div className="flex-shrink-0 flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-sm font-bold tracking-wider text-green-700 uppercase">
            Verdanova Solutions
          </span>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6 font-medium">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveLink(link.id)}
              className={`px-3 py-1 rounded transition ${
                activeLink === link.id
                  ? 'bg-green-600 text-white'
                  : 'text-black hover:bg-green-600 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bouton desktop */}
        <div className="hidden md:block">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded shadow">
            Demandez devis
          </button>
        </div>

        {/* Icône burger mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-md">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActiveLink(link.id);
                setMenuOpen(false);
              }}
              className={`block py-2 px-3 rounded text-center font-medium ${
                activeLink === link.id
                  ? 'bg-green-600 text-white'
                  : 'text-black hover:bg-green-600 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Bouton mobile */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded shadow">
            Demandez devis
          </button>
        </div>
      )}
    </header>
  );
}
