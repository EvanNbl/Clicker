import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import './Navbar.css';

function Navbar() {

    const [cookies, setCookie] = useCookies(['clicks']);

    if (cookies.clicks === undefined) {
        setCookie('clicks', 0);
    }


    return (
        <div className="Navbar">
            <p>Navbar</p>
        </div>
    );
}

export default Navbar;
