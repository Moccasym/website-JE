import React, { useEffect, useState } from 'react';
import logo from '../assets/Logo.jpg';
import './Styling/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    // Add event listener to handle scroll events
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className={`logo ${isScrolled ? 'small' : ''}`}>
        <img src={logo} alt="JE-logo" className="logo-img" />
      </div>
        <h1>Josua Ehlers</h1>
        <h2>Google Ads für Start-Ups</h2>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Kontakt</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
