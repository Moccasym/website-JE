import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Styling/Footer.css'; // Assuming you have this

const Footer = () => {
  return (
    <footer>
      <div>
        <Link to="/datenschutz">Datenschutz</Link> | <Link to="/impressum">Impressum</Link>
      </div>
      <p>&copy; 2024 josuaehlers.de All rights reserved.</p>
    </footer>
  );
};

export default Footer;
