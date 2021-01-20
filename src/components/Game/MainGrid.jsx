import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { ReactComponent as XIcon } from "../../assets/x_icon.svg";
import { ReactComponent as OIcon } from "../../assets/o_icon.svg";
import { ReactComponent as BlackGrid } from "../../assets/black_grid.svg";
import { winCombinations, key_indexes } from "../../utils/initialData";

const MainGrid = ({
  winner,
  gridData,
  setWinner,
  setGridData,
  restartGame,
  currentPlayer,
  setCurrentPlayer,
}) => {
  const insertIcon = (index) => {
    if (gridData[index] !== "") return;

    setGridData([
      ...gridData.slice(0, index),
      currentPlayer,
      ...gridData.slice(index + 1),
    ]);

    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      winCombinations.forEach((combo) => {
        const data0 = gridData[combo[0]];
        const data1 = gridData[combo[1]];
        const data2 = gridData[combo[2]];

        if (data0 !== "" && data0 === data1 && data1 === data2) {
          setWinner(data0);
          restartGame();
        }
      });

      if (!winner && !gridData.includes("")) {
        setWinner("Draw");
        restartGame();
      }
    });
  }, [gridData, restartGame, winner, setWinner]);

  useEffect(() => {
    const keyUpHandler = (event) => {
      event.stopImmediatePropagation();
      const keyCode = event.keyCode;

      if (keyCode === 82) {
        restartGame();
      } else {
        insertIcon(key_indexes[currentPlayer][keyCode]);
      }
    };

    window.addEventListener("keyup", keyUpHandler);

    return () => window.removeEventListener("keyup", keyUpHandler);
  });

  return (
    <>
      <div className="main_grid">
        {gridData.map((data, index) => (
          <div onClick={() => insertIcon(index)} key={index}>
            {data === "X" && <XIcon />}
            {data === "O" && <OIcon />}
          </div>
        ))}
        <BlackGrid className="grid_svg" />
      </div>
      <p
        className="responsive_restart_p"
        role="button"
        onClick={() => restartGame()}
      >
        Restart Game
      </p>
    </>
  );
};

MainGrid.propTypes = {
  winner: PropTypes.string,
  setWinner: PropTypes.func,
  gridData: PropTypes.array,
  setGridData: PropTypes.func,
  restartGame: PropTypes.func,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
};

MainGrid.defaultProps = {
  winner: "",
  gridData: [],
  currentPlayer: "",
  setWinner: () => {},
  setGridData: () => {},
  restartGame: () => {},
  setCurrentPlayer: () => {},
};

export default MainGrid;
