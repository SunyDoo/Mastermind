import React, { useState } from "react";
import ColorBoard from "../ColorBoard/ColorBoard";
import Peg from "../Peg/Peg";
import "./Board.css";

function Board() {
  const [guess, setGuess] = useState([])
  const [currentColor, setCurrentColor] = useState("red")



  return (
    <div className="game-wrapper">
        <div className="color-board">
          <h2>Select Color</h2>
          <ColorBoard handleClick={setCurrentColor}/>
          <p>Selected Color: <div className="select-box"><div className={currentColor}></div></div></p>
          <p>Attempts remaining: </p>
        </div>
        <div className="game-board">
         <h1>MasterMind</h1>
          <Peg />
          <Peg />
          <Peg />
          <Peg />
          <Peg />
          <Peg />
          <Peg />
          <Peg />
          <Peg />
          <Peg />
        </div>
    </div>
  );
}

export default Board;
