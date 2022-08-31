import './App.css';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  // compter et stocker le nombre de clics dans un cookie meme si on recharge la page

  const [cookies, setCookie] = useCookies(['clicks']);
  const [cookies_pclick, setCookie_pclick] = useCookies(['pclick']);
  const [clicks, setClicks] = useState(parseInt(cookies.clicks) || 0);
  const [pclick, setPClick] = useState(parseInt(cookies_pclick.pclick) || 1);

  const handleClick = () => {
    setClicks(clicks + pclick);
    setCookie('clicks', clicks + pclick);
  }

  // Upgrade 1 : Ammélioration d'un click par ammélioration

  if (document.cookie.indexOf('pclick') == -1) {
  } else {
    var prixclick_upg1 = cookies_pclick.pclick.split(',');
    var prixclick_upg1 = prixclick_upg1[1];
  }
  const [price_upgone, setPriceUpgone] = useState(prixclick_upg1 || 100);
  
  const upg_one = () => {
    if (clicks >= price_upgone) {
      setPClick(pclick + 1);
      setCookie_pclick('pclick', pclick + 1 + ',' + price_upgone * 2);
      setClicks(clicks - price_upgone);
      setCookie('clicks', clicks - price_upgone);
      setPriceUpgone(price_upgone * 2);
      window.location.reload();
    } else {
      alert('Vous n\'avez pas assez de clics');
    }
  }

  // Upgrade 2 : Auto-clicker par ammélioration

  

  // ---------- Return -----------

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
          <p>Puissance de click = {pclick}</p>
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
