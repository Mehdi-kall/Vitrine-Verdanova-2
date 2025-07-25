import Hero from '../components/Hero';
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div className="min-h-screen">
      < Navbar />

      <div className='pt-5'>
        <Hero />
      </div>
    </div>
  );
}