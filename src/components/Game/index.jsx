import React, { useState, useCallback } from "react";

import "./game.scss";

import Winner from "./Winner";
import MainGrid from "./MainGrid";
import PickPlayer from "./PickPlayer";
import { initialGridData } from "../../utils/initialData";
import { ReactComponent as RedGrid } from "../../assets/red_grid.svg";
import { ReactComponent as BlueGrid } from "../../assets/blue_grid.svg";

const Game = () => {
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [gridData, setGridData] = useState(initialGridData);

  const restartGame = useCallback(() => {
    setGridData(initialGridData);
    setCurrentPlayer(null);
  }, []);

  return (
    <div className="game">
      <div className="top_section">
        <h1 className="title">Tic Tac Toe</h1>
        <h3
          className="subtitle"
          style={{ display: currentPlayer || winner ? "none" : "" }}
        >
          Pick a player and start playing
        </h3>
      </div>
      {currentPlayer ? (
        <MainGrid
          winner={winner}
          gridData={gridData}
          setWinner={setWinner}
          setGridData={setGridData}
          restartGame={restartGame}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
        />
      ) : winner ? (
        <Winner
          winner={winner}
          setWinner={setWinner}
          restartGame={restartGame}
        />
      ) : (
        <PickPlayer setCurrentPlayer={setCurrentPlayer} />
      )}
      {currentPlayer ? (
        <div className="bottom_section">
          <div className="x_player">
            <p>Player X Keys</p>
            <div className="underline"></div>
            <div className="grid">
              <div>Q</div>
              <div>W</div>
              <div>E</div>
              <div>A</div>
              <div>S</div>
              <div>D</div>
              <div>Z</div>
              <div>X</div>
              <div>C</div>
              <RedGrid className="grid_svg" />
            </div>
          </div>
          <p className="restart_p" onClick={() => restartGame()} role="button">
            R - Restart Game
          </p>
          <div className="o_player">
            <p>Player O Keys</p>
            <div className="underline"></div>
            <div className="grid">
              <div>I</div>
              <div>O</div>
              <div>P</div>
              <div>J</div>
              <div>K</div>
              <div>L</div>
              <div>N</div>
              <div>M</div>
              <div>,</div>
              <BlueGrid className="grid_svg" />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Game;
