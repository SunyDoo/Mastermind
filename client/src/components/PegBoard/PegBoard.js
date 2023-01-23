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
  return (
    <div className="game-board">
      <h5>SunyDoo Games Presents</h5>
      <h1>MasterMind</h1>
      <Peg
        currentColor={currentColor}
        answer={answer}
        addPeg={addPeg}
        decrementAttempts={decrementAttempts}
        didPlayerWin={didPlayerWin}
      />
      {pegCount >= 2 ? (
        <Peg
          currentColor={currentColor}
          answer={answer}
          addPeg={addPeg}
          decrementAttempts={decrementAttempts}
          didPlayerWin={didPlayerWin}
        />
      ) : null}
      {pegCount >= 3 ? (
        <Peg
          currentColor={currentColor}
          answer={answer}
          addPeg={addPeg}
          decrementAttempts={decrementAttempts}
          didPlayerWin={didPlayerWin}
        />
      ) : null}
      {pegCount >= 4 ? (
        <Peg
          currentColor={currentColor}
          answer={answer}
          addPeg={addPeg}
          decrementAttempts={decrementAttempts}
          didPlayerWin={didPlayerWin}
        />
      ) : null}
      {pegCount >= 5 ? (
        <Peg
          currentColor={currentColor}
          answer={answer}
          addPeg={addPeg}
          decrementAttempts={decrementAttempts}
          didPlayerWin={didPlayerWin}
        />
      ) : null}
      {pegCount >= 6 ? (
        <Peg
          currentColor={currentColor}
          answer={answer}
          addPeg={addPeg}
          decrementAttempts={decrementAttempts}
          didPlayerWin={didPlayerWin}
        />
      ) : null}
      {pegCount >= 7 ? (
        <Peg
          currentColor={currentColor}
          answer={answer}
          addPeg={addPeg}
          decrementAttempts={decrementAttempts}
          didPlayerWin={didPlayerWin}
        />
      ) : null}
      {pegCount >= 8 ? (
        <Peg
          currentColor={currentColor}
          answer={answer}
          addPeg={addPeg}
          decrementAttempts={decrementAttempts}
          didPlayerWin={didPlayerWin}
        />
      ) : null}
      {pegCount >= 9 ? (
        <Peg
          currentColor={currentColor}
          answer={answer}
          addPeg={addPeg}
          decrementAttempts={decrementAttempts}
          didPlayerWin={didPlayerWin}
        />
      ) : null}
      {pegCount >= 10 ? (
        <Peg
          currentColor={currentColor}
          answer={answer}
          addPeg={addPeg}
          decrementAttempts={decrementAttempts}
          didPlayerWin={didPlayerWin}
        />
      ) : null}
    </div>
  );
}

export default PegBoard;
