import React from 'react';
import ProjectCard from './Cards/ProjectCard';

const projects = [
  {
    image: '/weefarm-logo3.png',
    name: 'WeeFarm',
    sector: 'AgriTech',
    description:
      "Une solution de cloud farming web et mobile pour aider les agriculteurs à gérer efficacement leurs cultures.",
    result: '+30% de productivité agricole',
    testimonial: "“Grâce à cette plateforme, nous avons gagné en efficacité.”",
    link: 'https://wee-farm.com/',
  },
  {
    image: '/Base.png',
    name: 'Base',
    sector: 'Vitrine numérique',
    description:
      "Une plateforme pour exposer les services numériques de manière interactive.",
    result: '+45% de visibilité pour les PME',
    testimonial: "“Notre présence en ligne s’est nettement améliorée.”",
    link: 'https://base.com/fr-FR/home/',
  },
  {
    image: '/Bliss-logo.png',
    name: 'Bliss',
    sector: 'FinTech',
    description:
      "Une interface intuitive pour les échanges entre entreprises et clients, optimisée pour la gestion des transactions.",
    result: '+60% de satisfaction client',
    testimonial: "“L’interface a rendu notre travail quotidien beaucoup plus fluide.”",
    link: 'https://bliss.example.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16  bg-gradient-to-b from-white to-green-200 ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Nos Réalisations</h2>
        <p className="mb-12 text-lg">
          Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs à travers des solutions numériques innovantes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
