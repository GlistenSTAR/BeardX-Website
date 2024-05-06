import React from 'react';
import HeroContentHeader from './HeroContentHeader';
import HeroContentTitle from './HeroContentTitle';
import HeroContentAction from './HeroContentAction';

export default function HeroContent() {
  return (
    <div className='hero-content'>
      {/* <HeroContentHeader /> */}
      <HeroContentTitle />
      <HeroContentAction />
    </div>
  );
}
