// components/AboutUs.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function AboutUs() {
  const points = [
    'Expertise technique avancée',
    'Approche centrée sur le client',
    'Solutions sur mesure',
    'Support réactif et fiable',
    'Innovation continue',
  ];

  return (
    <section id='about' className="bg-gradient-to-b from-green-200 to-white  py-20  space-y-32 text-center">
      <h1 className='text-4xl'>Qui sommes-nous ? </h1>
      {/* ----- Section 1 : À propos ----- */}
      <div className="group max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 transition-all duration-500">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/aboutus.jpg"
            alt="Notre équipe"
            className="rounded-lg shadow-lg w-full"
          />
        </div>


        {/* Texte chevauchant */}
        <div
          className="
            md:w-1/2 bg-white bg-opacity-90 shadow-xl rounded-lg p-8 z-10
            transition-all duration-500
            md:-ml-20 group-hover:md:ml-0
          "
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            À propos de nous
          </h2>
          <p className="text-gray-600 mb-4">
            Nous aidons les entreprises à innover grâce à des solutions technologiques sur mesure.
            Notre mission est d'offrir performance, fiabilité et innovation pour propulser vos projets vers le succès.
          </p>
          <p className="text-gray-600">
            Nous croyons en <span className="text-green-600 font-semibold">l’innovation</span>,
            la <span className="text-green-600 font-semibold">qualité</span> et la
            <span className="text-green-600 font-semibold"> collaboration</span>.
          </p>
        </div>
      </div>
      {/* ----- Section 2 : Pourquoi nous choisir ----- */}
      <div className="group max-w-6xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 transition-all duration-500">
        {/* Texte chevauchant */}
        <div
          className="
            md:w-1/2 bg-white bg-opacity-90 shadow-xl rounded-lg p-8 z-10
            transition-all duration-500
            md:-mr-20 group-hover:md:mr-0
          "
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi nous choisir ?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Voici ce qui fait de nous un partenaire technologique fiable et innovant :
          </p>
          <div className="grid gap-3">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/why-choose-us.jpg"
            alt="Pourquoi nous choisir"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}
