import React from 'react';
import logo from './../../../assets/imgs/BeardX.png';

export default function HeroContentTitle() {
  return (
    <div className='hero-content-title'>
      <p className='hero-content-title-text'>BEARDX</p>
      <p className='hero-content-title-semi'>
        World’s first interoperable memecoin
      </p>
      <img src={logo} alt='logo' width={200} height={200} />
      <p className='hero-content-title-desc'>
        World’s first interoperable memecoin built on <br /> the groundbreaking
        Layer One X blockchain.
      </p>
    </div>
  );
}
