import React from 'react';
import './Styling/Socials.css';
import linkedIn from '../assets/LinkedIn_Logo.png';

const Socials = () => {
  return (
    <div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/josua-ehlers/" target="_blank" rel="noopener noreferrer">
          <img src={linkedIn} alt="LinkedIn-logo" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
