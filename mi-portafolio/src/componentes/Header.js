import React from 'react';
import '../App.css';
const perfil = require('../images/cara.jpg')

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src={perfil} alt="Perfil" />
            </div>
            <div className="header-right">
                <h1>Ariel Peñaloza</h1>
                <p>Desarrollador FullStack en desarrollo.</p>
            </div>
        </div>
    );
  }

export default Header;
