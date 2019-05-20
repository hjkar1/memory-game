import React, { useState } from 'react';
import Board from './components/Board';
import Controls from './components/Controls';
import { initializeCards } from './initialize';
import images from './images';
import './App.css';

const App = () => {
  const [cards, setCards] = useState(initializeCards(images));
  const [previousIndex, setPreviousIndex] = useState(-1);
  const [clickDisabled, setClickDisabled] = useState(false);
  const [timesTried, setTimesTried] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleClick = index => {
    const updatedCards = [...cards];
    updatedCards[index].clicked = true;

    if (previousIndex === -1) {
      // the first of the two cards being turned
      setCards(updatedCards);
      setPreviousIndex(index);
    } else {
      // the second of the two cards being turned
      setPreviousIndex(-1);
      setTimesTried(timesTried + 1);
      if (cards[previousIndex].image === cards[index].image) {
        // the cards match
        updatedCards[previousIndex].match = true;
        updatedCards[index].match = true;
        setCards(updatedCards);
        if (!cards.find(card => !card.match)) {
          // all matches found
          setFinished(true);
        }
      } else {
        // no match
        setClickDisabled(true);
        setTimeout(() => {
          updatedCards[previousIndex].clicked = false;
          updatedCards[index].clicked = false;
          setCards(updatedCards);
          setClickDisabled(false);
        }, 1500);
      }
    }
  };

  const startNew = () => {
    setCards(initializeCards(images));
    setPreviousIndex(-1);
    setClickDisabled(false);
    setTimesTried(0);
    setFinished(false);
  };

  return (
    <div className="game">
      <Board
        cards={cards}
        clickDisabled={clickDisabled}
        handleClick={handleClick}
      />
      <Controls
        finished={finished}
        timesTried={timesTried}
        clickDisabled={clickDisabled}
        startNew={startNew}
      />
    </div>
  );
};

export default App;
