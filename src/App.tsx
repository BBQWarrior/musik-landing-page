import React from 'react';
import Hero from './components/layout/Hero';
import Categories from './components/layout/Categories';
import Footer from './components/layout/Footer';
import Contact from './components/layout/Contact';
import Sponsors from './components/layout/Sponsors';
import Pricing from './components/layout/Pricing';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Categories/>
      <Pricing/>
      <Sponsors/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
