import React from 'react';
import logo from './../../../assets/imgs/BeardX.png';
import Modal from 'react-modal';
import API from '../../../utils/API';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '60%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function HeroContent() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [walletError, setWalletError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    wallet: '',
    discord: '',
  });

  let { email, wallet, discord } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const saveData = async (e) => {
    setLoading(true);
    setWalletError(false);
    setEmailError(false);
    e.preventDefault();

    if (email && email.includes('@')) {
      if (wallet && wallet.length === 42) {
        await API.post('/history/add', formData).then((res) => {
          if (res.data.status) {
            toast.success(res.data.message, {
              position: 'top-right',
            });
          } else {
            toast.warn(res.data.message, {
              position: 'top-right',
            });
          }
        });
        setIsOpen(false);
        setEmailError(false);
        setWalletError(false);
        email = '';
        wallet = '';
        discord = '';
      } else {
        setWalletError(true);
        toast.warn('Please input correct data!', {
          position: 'top-right',
        });
      }
    } else {
      setEmailError(true);
      toast.warn('Please input correct data!', {
        position: 'top-right',
      });
    }
    setLoading(false);
  };

  return (
    <div className='hero-content'>
      <ToastContainer />
      <div className='hero-content-title'>
        <p className='hero-content-title-text'>BEARDX</p>
        <p className='hero-content-title-semi'>
          World’s first interoperable memecoin
        </p>
        <img src={logo} alt='logo' width={200} height={200} />
        <p className='hero-content-title-desc'>
          World’s first interoperable memecoin built on <br /> the
          groundbreaking Layer One X blockchain.
        </p>
      </div>
      <div className='hero-content-action mt-5'>
        <div className='buttons'>
          <div className='m-6'>
            <button className='main-button btn-primary' onClick={openModal}>
              Buy NFT
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            className='m-6'
          >
            <a
              href='https://l1xapp.com/airdrop/nft/66/1'
              target='_blank'
              rel='noreferrer'
              alt='vote'
              className='m-3'
            >
              <button className='main-button btn-secondary'>Vote</button>
            </a>
            <a
              href='https://zealy.io/cw/beardx/questboard'
              target='_blank'
              rel='noreferrer'
              alt='airdrop'
              className='m-3'
            >
              <button className='main-button btn-secondary'>Airdrop</button>
            </a>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel='Buy Nft'
      >
        <h5 className='modal_notify'>
          Transfer 175 USDT or 175 USDC to the following address on Binance
          Smart Chain(BSC)
        </h5>
        <p className='o_wallet'>
          bnb: 0x0C0925cC75a91A0231fCB2704448Ee33994F0DB7
        </p>
        <p>
          Enter your contact info and we will reach out to you when NFT claim is
          open. Stay tuned for the announcement.
        </p>
        <form className='modal_form'>
          <div className='modal_inputGroup'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              name='email'
              className={`email ${emailError ? 'error' : ''}`}
              onChange={onChange}
              value={email}
              placeholder='example@example.com'
            />
          </div>
          <div className='modal_inputGroup'>
            <label htmlFor='wallet'>Wallet Address : </label>
            <input
              type='text'
              name='wallet'
              className={`wallet ${walletError ? 'error' : ''}`}
              onChange={onChange}
              value={wallet}
              placeholder='0x00000000....'
            />
          </div>
          <div className='modal_inputGroup'>
            <label htmlFor='discord'>Discord : </label>
            <input
              type='text'
              name='discord'
              className='discord'
              onChange={onChange}
              value={discord}
              placeholder='discord user name'
            />
          </div>

          <button onClick={saveData} disabled={loading ? true : false}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </Modal>
    </div>
  );
}
