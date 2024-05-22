import React from 'react';

import logo from '../../../assets/imgs/Designer-preview1.png';
import Star from './../../star/star';

export default function HeroImage() {
  return (
    <div className='hero-image'>
      <Star />
      <img className='hero-img' src={logo} alt='Designer-preview1.png' />
    </div>
  );
}
