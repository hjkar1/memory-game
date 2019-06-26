import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Controls = ({ finished, timesTried, clickDisabled, startNew }) => {
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

PropTypes.Controls = {
  finished: PropTypes.bool.isRequired,
  timesTried: PropTypes.number.isRequired,
  clickDisabled: PropTypes.bool.isRequired,
  startNew: PropTypes.func.isRequired
};

export default Controls;
