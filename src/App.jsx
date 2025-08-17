import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Portfolio from './components/Portfolio.jsx';
import Experience from './components/Experience.jsx';

import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;