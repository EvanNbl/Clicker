import './App.css';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  // compter et stocker le nombre de clics dans un cookie meme si on recharge la page

  const [cookies, setCookie] = useCookies(['clicks']);
  const [clicks, setClicks] = useState(parseInt(cookies.clicks) || 0);
  const [pclick, setPClick] = useState(1);
  const [price_upgone, setPriceUpgone] = useState(100);

  const handleClick = () => {
    setClicks(clicks + pclick);
    setCookie('clicks', clicks + pclick);
  }

  const upg_one = () => {
    if(clicks >= price_upgone) {
      setPClick(pclick + 1);
      setClicks(clicks - price_upgone);
      setCookie('clicks', clicks - price_upgone);
      setPriceUpgone(price_upgone * 2);
    } else {
      alert('Vous n\'avez pas assez de clics');
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="App_Content">
        <div className='App_Content_Left'>
          <h1>Account</h1>
          <h1>{clicks} &#128182;</h1>
        </div>
        <div className='App_Content_Center'>
          <button className='Box_click' onClick={handleClick}>
            <p>Click here</p>
          </button>
        </div>
        <div className='App_Content_Right'>
          <h1>Upgrade</h1>
          <button className='Box_upgrade' onClick={upg_one}>
            <p>Prix: {price_upgone} &#128182;</p> 
            <p>Click manuel nv:{pclick}</p>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
