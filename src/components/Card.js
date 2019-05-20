import React from 'react';
import '../App.css';

const Card = ({ imageStyle, shape }) => (
  <div>
    <svg viewBox="0 0 100 100" className="card" style={imageStyle}>
      {shape}
    </svg>
  </div>
);

export default Card;