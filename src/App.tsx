import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import WorksSlider from './components/works/WorksSlider';
import Services from './components/Services';
import Contact from './components/Contact';



function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <WorksSlider />
        <Services />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 RRStudios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;