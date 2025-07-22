import Hero from '../components/Hero';


export default function Home() {
  return (
    <div className="min-h-screen">
   

      {/* Hero doit prendre toute la hauteur disponible */}
      <main className="pt-16"> {/* Ajustez selon la hauteur de votre navbar */}
        <Hero />
      </main>
    </div>
  );
}