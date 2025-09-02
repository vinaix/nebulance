import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import './utils/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
      <ScrollProgressIndicator />
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        {/* <Stats /> */}
        <Pricing />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;