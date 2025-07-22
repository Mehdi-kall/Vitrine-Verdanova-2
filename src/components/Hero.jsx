// components/Hero.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-green-200 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Accélérez votre succès avec des solutions sur mesure
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Développement web, mobile, cloud et intelligence artificielle pour booster vos projets.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className=" bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
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

        {/* Illustration */}
        <div className="mt-12">
          <img
            src="/brain-storming.jpg"
            alt="Équipe tech en brainstorming"
            className="mx-auto w-80 md:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
