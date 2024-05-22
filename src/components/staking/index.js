import React from 'react';
import { MdAccountBalanceWallet, MdLock, MdAddToPhotos } from 'react-icons/md';
import Card from '../card/card';

import './index.css';

export default function Staking() {
  return (
    <div className='staking'>
      <div className='wallet_connect'>
        <button className='main-button btn-disabled'>
          <MdAccountBalanceWallet />
          <span>Wallet connect</span>
        </button>
      </div>

      <div className='staking_box'>
        <h1>BeardX Staking Dashboard</h1>
        <div className='analysis'>
          <div className='analysis_card'>
            <Card
              title='Total Staked'
              content='N/A'
              subContent='$N/A'
              icon={<MdLock size={'3.5em'} />}
            />

            <Card
              title='Estimated Rewards'
              content='N/A %'
              subContent='N/A'
              icon={<MdAddToPhotos size={'3.5em'} />}
              backgroundColor={'blue'}
            />
          </div>
          <div>
            <div className='bigcard'>
              <div className='bigcard_title'>BeardX Stats</div>
              <div className='bigcard_content'>
                <div className='bigcard_item'>
                  <div className='title'>BeardX PRICE</div>
                  <div className='content'>$N/A</div>
                </div>
                <div className='bigcard_item'>
                  <div className='title'>DAILY REWARDS</div>
                  <div className='content'>N/A L1X</div>
                </div>
                <div className='bigcard_item'>
                  <div className='title'>CIRCULATING SUPPLY</div>
                  <div className='content'>N/A BeardX</div>
                </div>
              </div>
            </div>
            <button className='main-button btn-disabled stake_beardx'>
              Stake BeardX
            </button>
          </div>
        </div>
      </div>

      <div className='staking_box'>
        <h1 className='wifpants'>BeardWifPants NFT Staking Dashboard</h1>
        <div className='analysis'>
          <div>
            <div className='bigcard'>
              <div className='bigcard_title'>BeardWifPants NFT Stats</div>
              <div className='bigcard_content'>
                <div className='bigcard_item'>
                  <div className='title'>NFT price</div>
                  <div className='content'>N/A</div>
                </div>
                <div className='bigcard_item'>
                  <div className='title'>DAILY REWARDS</div>
                  <div className='content'>N/A L1X</div>
                </div>
                <div className='bigcard_item'>
                  <div className='title'>APY</div>
                  <div className='content'>N/A %</div>
                </div>
              </div>
            </div>
          </div>
          <button className='main-button btn-disabled stake_wifpants'>
            Stake NFT
          </button>
        </div>
      </div>
    </div>
  );
}
