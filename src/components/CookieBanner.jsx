// CookieBanner.jsx
import React, { useState, useEffect } from 'react';
import './Styling/CookieBanner.css'; // Create a new CSS file for styling

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const handleLearnMore = () => {
    // Redirect to privacy policy or any other information
    window.location.href = '/privacy-policy';
  };

  return (
    showBanner && (
      <div className="cookie-overlay">
        <div className="cookie-banner">
          <p>This website uses cookies to enhance your experience.</p>
           <p>By continuing to use this site, you consent to our use of cookies.</p>
          <div className="cookie-buttons">
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleLearnMore}>Learn More</button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
