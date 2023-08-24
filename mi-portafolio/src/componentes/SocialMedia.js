import React from 'react';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.facebook.com/tu-usuario" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};

export default SocialMedia;
