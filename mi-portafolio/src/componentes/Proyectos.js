import React from "react";
import '../App.css'

const Proyectos = ({ title, description, imageUrl }) => {
    return (
      <div className="project">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };

export default Proyectos;