import React from 'react';
import { FaDiscord, FaFacebook, FaHome, FaTelegram } from 'react-icons/fa';
import Xicon from './../../../assets/imgs/xicon.png';

export default function HeroContentAction() {
  return (
    <div className='hero-content-action mt-5'>
      <div className='buttons'>
        <button className='main-button btn-disabled m-3'>Buy</button>
        <a
          href='https://l1xapp.com/airdrop/nft/66/1'
          target='_blank'
          rel='noreferrer'
          alt='vote'
        >
          <button className='main-button btn-primary m-3'>Vote</button>
        </a>
        <button className='main-button btn-disabled m-3'>Airdrop</button>
      </div>
      <div className='social_media'>
        <a
          href='https://x.com/beardxtoken'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Xicon} alt='x' width={'30px'} height={'30px'}></img>
        </a>
        <a
          href='https://discord.gg/B5dKRcbCss'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaDiscord size={'2em'} />
        </a>
        <a
          href=' https://t.me/beardxtoken'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTelegram size={'2em'} />
        </a>
        <a
          href='https://beardxtoken.xyz/ '
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaHome size={'2em'} />
        </a>
      </div>
    </div>
  );
}
