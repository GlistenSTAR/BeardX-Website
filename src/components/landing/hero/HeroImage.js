import React from 'react';

import logo from '../../../assets/imgs/Designer-preview1.png';

export default function HeroImage() {
  return (
    <div className='hero-image'>
      <img className='hero-img' src={logo} alt='Designer-preview1.png' />
    </div>
  );
}
