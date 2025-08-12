// components/Hero.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
<section className="bg-gradient-to-b from-white to-green-200 pt-[100px] ">
  <div className="flex max-w-6xl mx-auto px-6 flex-col md:flex-row items-center justify-between gap-x-[200px]">
    
    {/* Texte à gauche */}
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        Accélérez votre succès avec des solutions sur mesure
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-10">
        Développement web, mobile, cloud et intelligence artificielle pour booster vos projets.
      </p>

      <div className="flex justify-center md:justify-start space-x-4">
        <a
          href="#contact"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
        >
          Contactez-nous
          <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href="#demo"
          className="no-underline border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-full transition"
        >
          Demandez une démo
        </a>
      </div>
    </div>

    {/* Illustration */}
    <div className="mt-12 md:mt-0">
      <img
        src="/brainstorming.gif"
        alt="Équipe tech en brainstorming"
        className="w-80 md:w-[700px]"
      />
    </div>
  </div>
</section>


  );
}
