import React from "react";
import ColorBoard from "../ColorBoard/ColorBoard";
import Peg from "../Peg/Peg";
import "./Board.css";

function Board() {
  return (
    <div className="game-wrapper">
        <div className="color-board">
          <h2>Select Color</h2>
          <ColorBoard />
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
