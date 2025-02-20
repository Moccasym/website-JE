import React, { useEffect, useState } from 'react';
import logo from '../assets/Logo.jpg';
import './Styling/Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (window.innerWidth <= 768) {
        // Mobile behavior
        if (currentScrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        // Desktop behavior
        if (currentScrollY > lastScrollY) {
          setIsHidden(true); // Scrolling down
        } else {
          setIsHidden(false); // Scrolling up
        }
        setLastScrollY(currentScrollY);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hide' : ''}`}>
      {isMobile ? (
        <>
          <div className="navbar-top">
            <div className="logo">
              <img src={logo} alt="JE-logo" className="logo-img" />
            </div>
            <h1>Josua Ehlers</h1>
            <h2>Google Ads für Start-Ups</h2>
          </div>
          <div className="navbar-bottom">
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Kontakt</a></li>
              </ul>
            </nav>
          </div>
        </>
      ) : (
        <>
          <div className="logo">
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
        </>
      )}
    </header>
  );
}

export default Header;
