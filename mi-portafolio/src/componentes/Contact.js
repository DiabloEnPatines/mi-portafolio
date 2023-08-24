import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contacto</h2>
      <p>Si deseas ponerte en contacto conmigo, no dudes en escribirme:</p>
      <form action="https://formspree.io/p.rodriguez.ariel1@gmail.com" method="POST">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" required />

        <label for="email">Email:</label>
        <input type="email" name="email" required />

        <label for="mensaje">Mensaje:</label>
        <textarea name="mensaje" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
