import React from 'react';
import '../App.css';

const Skill = ({ name, percentage }) => {
  return (
    <div className="skill">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default Skill;
