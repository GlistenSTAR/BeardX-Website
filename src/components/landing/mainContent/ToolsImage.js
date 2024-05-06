import React from 'react';

import Image from '../../../assets/imgs/Designer-preview2.png';

export default function ToolsImage() {
  return (
    <div className='main-content-image-tools'>
      <div className='main-content-whitepaper' id='Tokenomics'>
        <p className='main-content-image-glass-text'>Tokenomics</p>
      </div>
      <img
        className='main-content-img-tools'
        src={Image}
        alt='Designer-preview2.png'
        height={'100%'}
      />
      <div>
        <p className='main-content-roadmap-text' id='roadmap'>
          Roadmap
        </p>
      </div>
    </div>
  );
}
