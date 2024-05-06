import React from 'react';

import './Layouts.css';

export default function TopHeader() {
  return (
    <ul className='hero-content-header-menu'>
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#Tokenomics'>Tokenomics</a>
      </li>
      <li>
        <a href='#roadmap'>Roadmap</a>
      </li>
      <li>
        <a href='#beardverse'>Beardverse</a>
      </li>
    </ul>
  );
}
