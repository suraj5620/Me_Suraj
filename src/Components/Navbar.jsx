import { useState } from 'react';
import './Navbar.css';  // CSS file for styling

const Navbar = () => {
  // State to toggle the active class on the navbar for mobile view
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-container ${isMenuActive ? 'active' : ''}`}>
        <div className="logo">
          <a href="/"><b>Suraj Sharma</b></a>
        </div>
        {/* Hamburger icon for mobile view */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* Mobile navigation links */}
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
