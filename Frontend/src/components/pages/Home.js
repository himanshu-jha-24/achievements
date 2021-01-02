import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import {Achievements, Events} from '../Timeline';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Achievements />
      <Events />
      <Footer />
      
    </>
  );
}

export default Home;
