import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="contact-section" id="contact">
      <div className="flex">
      <h2 className="contact-heading">Contact Me</h2>

<div className="social-links">
  <a href="https://www.instagram.com/surajsharma_192" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaInstagram />
  </a>
  <a href="https://www.facebook.com/share/18jvmWwTiC/" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaFacebookF />
  </a>
  <a href="https://www.linkedin.com/surajsharma916" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaLinkedinIn />
  </a>
  <a href="https://github.com/suraj5620" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FaGithub />
  </a>
</div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Your Number"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>


      <div className="footer">
        <p>If you have any questions, feel free to reach out to me through the form above or via social media.</p>
        <p>© 2025 Suraj</p>
      </div>
    </div>
  );
};

export default Contact;
