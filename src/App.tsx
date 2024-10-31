import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCategories from './components/ServiceCategories';
import Services from './components/Services';
import Stats from './components/Stats';
import WhyUs from './components/WhyUs';
import Work from './components/Work';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <ServiceCategories />
        <Services />
        <Stats />
        <WhyUs />
        <Work />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;