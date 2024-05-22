import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import Staking from './components/staking';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

export default function App() {
  return (
    <Router basename="/">
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/staking' element={<Staking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
