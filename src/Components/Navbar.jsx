import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  
  const [isMenuActive, setIsMenuActive] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-container ${isMenuActive ? 'active' : ''}`}>
        <div className="logo">
          <a href="/"><b>Suraj Sharma</b></a>
        </div>
    
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
          <li className='list'><a href="#home">Home</a></li>
          <li className='list'><a href="#about">About</a></li>
          <li className='list'><a href="#skills">Skills</a></li>
          <li className='list'><a href="#projects">Projects</a></li>
          <li className='list'><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
