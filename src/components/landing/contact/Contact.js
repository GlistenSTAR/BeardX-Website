import React from 'react';
import BeardWifPants from '../../../assets/imgs/BeardWifPants.png';
import BeardCreatures from '../../../assets/imgs/BeardCreatures.png';

import './Contact.css';

export default function Contact() {
  return (
    <div className='contact-component' id='beardverse'>
      <p className='enterbeardverse'>Enter the beardverse</p>
      <div className='beard_group'>
        <div>
          <img
            className='contact-pantmaster-img'
            src={BeardWifPants}
            alt='BeardWifPants-Master.png'
          />
          <p className='contact-pantmaster-title'>BeardWifPants</p>
        </div>
        <div>
          <img
            className='contact-pantmaster-img'
            src={BeardCreatures}
            alt='BeardWifPants-Master.png'
          />
          <p className='contact-pantmaster-title'>BeardCreatures</p>
        </div>
      </div>
      <p className='contact-pantmaster-desc'>Interoperable NFT drop</p>
    </div>
  );
}
