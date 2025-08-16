import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Reviews from '../components/Reviews.jsx';
import ContactUs from '../components/ContactUs.jsx';
import Footer from '../components/Footer.jsx';
import WorkProcess from '../components/WorkProcess.jsx';

export default function Home() {
  return (
    <div className="min-h-screen">
      < Navbar />

      <div className='Hero'>
        <Hero />
      </div>
      <div className='AboutUs'>
        <AboutUs />
      </div>
      <div className='WorkProcess'>
        <WorkProcess/ >
      </div>
      <div className='Servecies'>
        <Services/ >
      </div>
      <div className='Prpjects'>
        <Projects/ >
      </div>
      <div className='Reviews'>
        <Reviews/ >
      </div>
      <div className='ContactUs'>
        <ContactUs/ >
      </div>
      <div className='Footer'>
        <Footer/ >
      </div>
    </div>
  );
}