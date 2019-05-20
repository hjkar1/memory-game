import React from 'react';
import '../App.css';
import Image from './Image';

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

export default Board;
