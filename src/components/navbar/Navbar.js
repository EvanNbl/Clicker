import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import './Navbar.css';

function Navbar() {

    const [cookies, setCookie] = useCookies(['clicks']);
    const [cookies_pclick, setCookie_pclick] = useCookies(['pclick']);

    const reset = () => {
        alert('Voulez-vous vraiment tout remettre à zéro ? Cela supprimera toutes vos données !');
        var reset = prompt('Pour confirmer, tapez "CONFIRMER"');
        if (reset === 'CONFIRMER') {
            setCookie('clicks', 0);
            setCookie_pclick('pclick', 1);
            window.location.reload();
        } else {
            alert('Annulation');
        }
    }


    return (
        <div className="Navbar">
            <p>Navbar</p>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Navbar;
