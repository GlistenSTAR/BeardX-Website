import React from 'react';
import Image from '../../../assets/imgs/Designer-preview2.png';

import './MainContent.css';

export default function MainContent() {
  return (
    <div className='main-content-component'>
      <div className='main-content-image'>
        <div className='main-content-image-tools'>
          <div className='main-content-whitepaper' id='Tokenomics'>
            <p className='main-content-image-glass-text'>Tokenomics</p>
            <hr />
            <p className='token_content'>20% private sale </p>
            <p className='token_content'>40% marketing & development </p>
            <p className='token_content'>30% treasury </p>
            <p className='token_content'>10% Cex listing</p>
            <hr />
          </div>
          <a
            href='https://my.visme.co/view/319zkym1-beardx-whitepaper#s1'
            target='_blank'
            rel='noreferrer'
          >
            <h1>Read the whitepaper</h1>
            <img
              className='main-content-img-tools'
              src={Image}
              alt='Designer-preview2.png'
              height={'100%'}
            />
          </a>
          <div className='main-content-roadmap' id='roadmap'>
            <p className='main-content-roadmap-text'>roadmap</p>
            <div className='roadmap'>
              <div className='left'>
                <div>
                  <div className='roadmap_title_group'>
                    <p className='roadmap_title'>May</p>
                    <hr />
                  </div>
                  <div className='roadmap_content'>
                    <p>BeardWifPants NFT launch sale </p>
                    <p>Marketing Campaigns </p>
                    <p>Voting for BeardX on the L1X App </p>
                    <p>Website </p>
                    <p>Whitepaper</p>
                  </div>
                </div>
              </div>
              <div className='right'>
                <div className='roadmap_title_group'>
                  <hr />
                  <p className='roadmap_title'>June</p>
                </div>
                <div className='roadmap_content'>
                  <p>Advanced Marketing</p>
                  <p>BeardX private sale to early contributors</p>
                  <p>BeardX listing on DEX</p>
                  <p>Integration of L1X widget on Website </p>
                </div>
              </div>
            </div>
            <div className='roadmap'>
              <div className='left'>
                <div className='roadmap_title_group'>
                  <p className='roadmap_title'>July</p>
                  <hr />
                </div>
                <div className='roadmap_content'>
                  <p>KOL Marketing</p>
                  <p>CEX listing</p>
                  <p>BeardX staking on website to earn revenue from FVN/ELN</p>
                </div>
              </div>
              <div className='right'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
