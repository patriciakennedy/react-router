import React from 'react';
import mhlogo from '../assets/mhlogo.png';

const Navbar = () => {
    return (
        <div>
            <img src={mhlogo} alt="" />
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Get Started</button>
        </div>
    );
};

export default Navbar;
