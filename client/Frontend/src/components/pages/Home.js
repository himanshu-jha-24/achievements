import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Achievements from '../Achievements';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Achievements />
      <Footer />
      
    </>
  );
}

export default Home;
