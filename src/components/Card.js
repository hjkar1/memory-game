import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Card = ({ imageStyle, shape }) => (
  <div>
    <svg viewBox="0 0 100 100" className="card" style={imageStyle}>
      {shape}
    </svg>
  </div>
);

PropTypes.Card = {
  imageStyle: PropTypes.object.isRequired
};

export default Card;
