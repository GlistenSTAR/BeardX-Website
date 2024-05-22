import React from 'react';

import Hero from './hero/Hero';
import MainContent from './mainContent/MainContent';
import MainContentRow from './mainContent/MainContentRow';
import NftContent from './nft/NftContent';

export default function Landing() {
  return (
    <div className='landing'>
      <Hero />
      <MainContent />
      <MainContentRow />
      <NftContent />
    </div>
  );
}
