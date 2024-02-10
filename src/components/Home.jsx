import React from 'react';
import img from '../assets/JE-profile.jpeg';
import img2 from '../assets/Logo.jpg';
import './Styling/Home.css';



const Home = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div id="home" className='home'>
        <div className="image-container">
      <img src={img} alt="JE-profile" className="JE-profile" />
      <img src={img2} alt="JE-logo" className="JE-logo" />
      </div>
        <div className='home-content'>
          <h1>Google Ads für Start-Ups & den Mittelstand</h1>
        </div>
        <p>Ich überprüfe Ihr Google Ads-Konto kostenlos und zeige Ihnen das Potenzial Ihrer PPC-Kampagnen für nachhaltigen Erfolg.</p> 
        <p>PPC-Optimierung mit der White Glove-Methode: Meine hohen Qualitätsstandards holen mehr aus meinen Google Ads- und Microsoft Advertising-Kampagnen heraus.</p>
        <p>Als zertifizierte Agentur habe ich ein tiefes Verständnis für mein Fachgebiet und setze Automatisierung und KI ein, um meine Leistung kontinuierlich und nachhaltig zu verbessern.</p>
        <button className="button-contact" onClick={scrollToContact}>Kurz-Audit anfordern</button>
    </div>
  </>
  );
};

export default Home;
