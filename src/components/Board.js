import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import '../App.css';

const Board = ({ cards, clickDisabled, handleClick }) => (
  <div className="board">
    {cards.map((card, index) =>
      card.match || card.clicked ? (
        <Image imageName={card.image} key={index} />
      ) : clickDisabled ? (
        <Image imageName="back" key={index} />
      ) : (
        <Image
          imageName="back"
          handleClick={() => handleClick(index)}
          key={index}
        />
      )
    )}
  </div>
);

PropTypes.Board = {
  cards: PropTypes.array.isRequired,
  clickDisabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Board;
