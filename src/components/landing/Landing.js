import React from 'react';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Hero from './hero/Hero';
import MainContent from './mainContent/MainContent';
import MainContentRow from './mainContent/MainContentRow';
import Contact from './contact/Contact';

export default function Landing() {
  return (
    <div className='landing'>
      <Header />
      <Hero />
      <MainContent />
      <MainContentRow />
      <Contact />
      <Footer />
    </div>
  );
}
