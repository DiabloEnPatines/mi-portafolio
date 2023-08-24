import React from 'react';
import '../App.css';

const Work = ({ title, company, description, imageUrl }) => {
  return (
    <div className="work">
      <img src={imageUrl} alt={title} />
      <div className="work-details">
        <h2>{title}</h2>
        <p>{company}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Work;
