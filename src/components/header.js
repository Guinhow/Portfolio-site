import React, { useState, useEffect } from 'react';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import Logo from './A.JPG'

const subMenu = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Projects', path: '/Projects' },
    { name: 'Contact', path: '/Contact' },
  ];

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
      };
    
      const fecharMenu = () => {
        setMenuAberto(false);
      };
    
    return (
        <div className="header">
          <button className="menu-toggle" onClick={toggleMenu}>☰</button>
          <div className="logo">
            <img className='logoimage' src={Logo} alt='logo'></img>
            <p>Vagner Cordeiro</p>
          </div>
          <nav className={`navbar ${menuAberto ? 'ativo' : ''}`}>
            <ul className="lista">
              {subMenu.map((x) => (<li className='itens' key={x.name}>
                <Link to={x.path} className='menu-link' onClick={fecharMenu}>{x.name}</Link>
              </li>))}
            </ul>
          </nav>
        </div>
  );
};

export default Header;