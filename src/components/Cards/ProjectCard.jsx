import React from "react";

const ProjectCard = ({ image, name, sector, description, result, testimonial, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:scale-[1.02] transition-all duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{sector}</p>
        <p className="text-gray-700 mb-3">{description}</p>
        <p className="text-green-600 font-medium">{result}</p>
        {testimonial && (
          <blockquote className="text-sm italic text-gray-500 mt-3 border-l-4 border-green-500 pl-3">
            “{testimonial}”
          </blockquote>
        )}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-green-600 hover:underline font-medium"
        >
          Voir le projet →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;