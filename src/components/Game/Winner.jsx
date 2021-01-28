import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as XIcon } from "../../assets/x_icon.svg";
import { ReactComponent as OIcon } from "../../assets/o_icon.svg";

const Winner = ({ winner, setWinner, restartGame }) => {
  const playAgain = () => {
    setWinner(null);
    restartGame();
  };

  return (
    <div className="winner_div">
      <div>
        {winner === "Tie" ? (
          <h3 className="tie">Tie</h3>
        ) : (
          <h3 className="player_won">
            Player
            {winner === "X" ? (
              <XIcon className="winner_icon" />
            ) : (
              <OIcon className="winner_icon" />
            )}
            won
          </h3>
        )}
      </div>
      <p className="play_again" onClick={() => playAgain()} role="button">
        Play again
      </p>
    </div>
  );
};

Winner.propTypes = {
  winner: PropTypes.string,
  setWinner: PropTypes.func,
  restartGame: PropTypes.func,
};

Winner.defaultProps = {
  winner: "",
  setWinner: () => {},
  restartGame: () => {},
};

export default Winner;
