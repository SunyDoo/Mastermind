import React from "react";
import "./PegBoard.css";
import Peg from "../Peg/Peg";

function PegBoard({
  currentColor,
  answer,
  pegCount,
  addPeg,
  decrementAttempts,
  didPlayerWin,
}) {
  const pegs = Array.from({ length: pegCount }, (_, i) => (
    <Peg
      key={i}
      currentColor={currentColor}
      answer={answer}
      addPeg={addPeg}
      decrementAttempts={decrementAttempts}
      didPlayerWin={didPlayerWin}
    />
  ));
  return (
    <div className="game-board">
      <h5>SunyDoo Games Presents</h5>
      <h1>MasterMind</h1>
      {pegs}
    </div>
  );
}

export default PegBoard;
