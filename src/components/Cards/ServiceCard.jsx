import { Card } from "flowbite-react";

function ServicesCard({ img, title, description }) {
  return (
    <div className="relative group w-[300px] h-[450px] rounded-2xl overflow-hidden shadow-2xl border-2 border-green-500 transition-all duration-500 cursor-pointer">
      {/* Image de fond */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient bas */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white p-4 z-10">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex items-center gap-1 text-sm opacity-80 group-hover:opacity-0 transition-opacity duration-300">
          <span>Lire la suite</span>
          <span>→</span>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900 bg-opacity-60 backdrop-blur-sm text-white flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h5 className="text-2xl font-bold mb-4">{title}</h5>
        <p className="text-base font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
}



export default ServicesCard;
