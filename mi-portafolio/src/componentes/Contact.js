import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contacto</h2>
      <p>Si deseas ponerte en contacto conmigo, no dudes en escribirme:</p>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default Contact;
