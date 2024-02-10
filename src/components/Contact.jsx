import React from 'react';
import './Styling/Contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="content">
        <h2>Kontakt</h2>
        <ContactForm/>
      </div>
    </section>
  );
};

export default Contact;

