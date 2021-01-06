import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
// import {Achievements, Events} from '../Timeline';
import {Events} from '../UpcomingEvents';


function Home() {
  return (
    <>
      <HeroSection />
      <Events />
      <Cards />
      {/* <Achievements /> */}
      <Footer />
      
    </>
  );
}

export default Home;
