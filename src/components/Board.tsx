import React from 'react';
import Image from './Image';
import CardData from '../models/CardData';
import '../App.css';

interface Props {
  cards: Array<CardData>;
  clickDisabled: boolean;
  handleClick: (index: number) => void;
}

const Board: React.FunctionComponent<Props> = ({
  cards,
  clickDisabled,
  handleClick
}: Props) => (
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

export default Board;
