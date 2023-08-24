import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import '../App.css';


function Contact() {
  const [state, handleSubmit] = useForm("moqodnky");
  if (state.succeeded) {
      return <p>GRacias por contactarme, te dare una respuesta en breve!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Direccion de Correo
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
}

export default Contact;
