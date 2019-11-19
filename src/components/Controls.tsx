import React from 'react';
import '../App.css';

interface Props {
  finished: boolean;
  timesTried: number;
  clickDisabled: boolean;
  startNew: () => void;
}

const Controls: React.FunctionComponent<Props> = ({
  finished,
  timesTried,
  clickDisabled,
  startNew
}: Props) => {
  return (
    <div className="controls">
      <p className="tries">Number of tries: {timesTried}</p>
      <div className="new">
        <button
          onClick={() => startNew()}
          disabled={clickDisabled}
          className="newButton"
        >
          New game
        </button>
      </div>
      {finished ? (
        <p className="message">You found all pairs. Congratulations!</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default Controls;
