import React, { useState } from "react";
import ColorBoard from "../ColorBoard/ColorBoard";
import Peg from "../Peg/Peg";
import "./Board.css";

function Board() {
  const [currentColor, setCurrentColor] = useState("white");
  // const [attempts, setAttempts] = useState(10);
  const [answer, setAnswer] = useState(["blue", "green", "orange", "red"]);

  return (
    <div className="game-wrapper">
      <div className="color-board">
        <h2>Select Color</h2>
        <ColorBoard handleClick={setCurrentColor} />
        <p>Selected Color: </p>
        <div className="select-box">
          <div className={currentColor}></div>
        </div>
        {/* <p>Attempts remaining: {attempts} </p> */}
      </div>
      <div className="game-board">
        <h1>MasterMind</h1>
        <Peg currentColor={currentColor} answer={answer} />
        <Peg currentColor={currentColor} answer={answer} />
        <Peg currentColor={currentColor} answer={answer} />
        <Peg currentColor={currentColor} answer={answer} />
        <Peg currentColor={currentColor} answer={answer} />
        <Peg currentColor={currentColor} answer={answer} />
        <Peg currentColor={currentColor} answer={answer} />
        <Peg currentColor={currentColor} answer={answer} />
        <Peg currentColor={currentColor} answer={answer} />
        <Peg currentColor={currentColor} answer={answer} />
      </div>
    </div>
  );
}

export default Board;
