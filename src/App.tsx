import React from 'react';
import About from './components/About';
import ButtonUp from './components/ButtonUp';
import Formations from './components/Formations';
import Header from './components/Header';
import Hero from './components/Hero';
import Experiences from "./components/Experiences";
import Footer from './components/Footer';

function App() {

  return (
    <div className="relative flex flex-col bg-gray-50 overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Formations />
      <Experiences />
      <Footer />

      
      <ButtonUp />
    </div>
  );
}

export default App;
