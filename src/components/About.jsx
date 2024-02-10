import React from 'react';
import './Styling/About.css';
import Socials from './Socials';
import profileImg from '../assets/JE-profile.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="content">
        <h2>Über mich:</h2>
        <img src={profileImg} alt="JE-profile" className="profile-img" />
        <p>Ich biete spezialisierte Dienstleistungen für erfolgreiche Online-Werbekampagnen durch Google Ads.</p>
        <p>Mit umfassenden Fähigkeiten garantiere ich, dass Sie ein optimales Ergebnis erzielen.</p>
        <Socials/>
        <p>Wählen Sie meine Freelance-Dienstleistungen für engagierte Partnerschaft und Erfahrung.</p>
        <p>Kontaktieren Sie mich noch heute, um zu besprechen, wie ich meine Dienstleistungen an Ihre spezifischen Bedürfnisse und Ziele anpassen kann.</p>
      </div>
    </section>
  );
};

export default About;
