import React from 'react';
import Dedicated from '../../components/Dedicated/Dedicated';
import Hero from '../../components/Hero/Hero';
import Launches from '../../components/Launches/Launches';

function Home() {
  return (
    <>
      <Hero />
      <Dedicated />
      <Launches />
    </>
  );
}

export default Home;
