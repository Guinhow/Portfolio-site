import React from 'react';
import './contact.css';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>📞 Entre em Contato</h2>
      <p>Sinta-se à vontade para me chamar em qualquer uma das redes abaixo:</p>

      <div className="contact-grid">
        <a href="https://wa.me/5521990247117" target="_blank" className="contact-item" rel="noreferrer">
            <FaWhatsapp className="icon" />
            <span>WhatsApp</span>
        </a>

        <a href="tel:+5521990247117" className="contact-item">
          <FaPhone className="icon" />
          <span>(21) 99024-7117</span>
        </a>

        <a href="mailto:vagnergcordeiro@hotmail.com" className="contact-item">
          <FaEnvelope className="icon" />
          <span>vagnergcordeiro@hotmail.com</span>
        </a>

        <a href="https://github.com/Guinhow" target="_blank" className="contact-item" rel="noreferrer">
          <FaGithub className="icon" />
          <span>GitHub</span>
        </a>

        <a href="https://linkedin.com/in/vagner-cordeiro-b68567263" target="_blank" className="contact-item" rel="noreferrer">
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
        </a>

        <a href="https://instagram.com/vagnerscopatto" target="_blank" className="contact-item" rel="noreferrer">
          <FaInstagram className="icon" />
          <span>@vagnerscopatto</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
