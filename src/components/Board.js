import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import '../App.css';

const Board = ({ cards, clickDisabled, handleClick }) => (
  <div className="board">
    {cards.map((card, index) =>
      card.match || card.clicked ? (
        <Image imageName={card.image} key={card.id} />
      ) : clickDisabled ? (
        <Image imageName="back" key={card.id} />
      ) : (
        <Image
          imageName="back"
          handleClick={() => handleClick(index)}
          key={card.id}
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
