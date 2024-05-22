import React from 'react';
import { FaDiscord, FaTelegram } from 'react-icons/fa';
import Xicon from './../../assets/imgs/xicon.png';

import './Layouts.css';

export default function Header() {
  return (
    <ul className='header-menu'>
      <li>
        <a href='/#about'>About</a>
      </li>
      <li>
        <a href='/#Tokenomics'>Tokenomics</a>
      </li>
      <li>
        <a href='/#roadmap'>Roadmap</a>
      </li>
      <li>
        <a href='/#beardverse'>Beardverse</a>
      </li>
      <li>
        <a href='/stacking'>Staking</a>
      </li>

      <div className='header_social_media'>
        <a
          href='https://x.com/beardxtoken'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Xicon} alt='x' width={'22px'} height={'22px'}></img>
        </a>
        <a
          href='https://discord.gg/B5dKRcbCss'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaDiscord size={'1.5em'} />
        </a>
        <a
          href=' https://t.me/beardxtoken'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTelegram size={'1.5em'} />
        </a>
        {/* <a
          href='https://beardxtoken.xyz/ '
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaHome size={'1.5em'} />
        </a> */}
      </div>
    </ul>
  );
}
