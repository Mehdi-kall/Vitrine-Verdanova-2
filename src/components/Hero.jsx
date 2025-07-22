export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] bg-gray-500 w-full">
      {/* Overlay pour meilleur contraste */}
      <div className="absolute inset-0 bg-gray-500/90 mix-blend-multiply"></div>
      
      <div className="relative z-10 py-24 px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenue sur notre site
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Découvrez nos solutions innovantes pour booster votre business.
        </p>
        <button className="bg-white text-green-600 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
          En savoir plus
        </button>
      </div>
    </section>
  );
}