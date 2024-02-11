// ContactForm.jsx

import React, { useState } from 'react';
import './Styling/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('https://website-je-server-5783.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending email');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email Address:</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Message:</label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
