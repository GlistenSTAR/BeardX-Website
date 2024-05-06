import React from 'react';

import TopHeader from './layouts/TopHeader';
import Footer from './layouts/Footer';
import Hero from './hero/Hero';
import MainContent from './mainContent/MainContent';
import MainContentRow from './mainContent/MainContentRow';
import Contact from './contact/Contact';

export default function Landing() {
  return (
    <div className='landing'>
      <TopHeader />
      <Hero />
      <MainContent />
      <MainContentRow />
      <Contact />
      <Footer />
    </div>
  );
}
