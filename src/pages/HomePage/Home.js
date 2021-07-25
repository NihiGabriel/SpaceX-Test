import React from 'react';
import Dedicated from '../../components/Dedicated/Dedicated';
import Hero from '../../components/Hero/Hero';
import Launches from '../../components/Launches/Launches';
// import { Footer } from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <Hero />
      <Dedicated />
      <Launches />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
