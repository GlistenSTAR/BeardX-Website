import React from 'react';
import Image from '../../../assets/imgs/BeardWifPants-Master.png';

import './Contact.css';

export default function Contact() {
  return (
    <div className='contact-component' id="beardverse">
      <img
        className='contact-pantmaster-img'
        src={Image}
        alt='BeardWifPants-Master.png'
      />
      <p className='contact-pantmaster-title'>BeardWifPants</p>
      <p className='contact-pantmaster-desc'>Interoperable NFT drop</p>
      <p className='enterbeardverse'>enter the beardverse</p>
    </div>
  );
}
