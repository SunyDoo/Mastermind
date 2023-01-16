import React, { useState } from "react";
import "./Peg.css";
function Peg({
  currentColor,
  answer,
  addPeg,
  decrementAttempts,
  didPlayerWin,
}) {
  const [className1, setClassName1] = useState("white");
  const [className2, setClassName2] = useState("white");
  const [className3, setClassName3] = useState("white");
  const [className4, setClassName4] = useState("white");
  const [clue, setClue] = useState(false);
  const [hint, setHint] = useState("");

  function handleClick(e) {
    e.preventDefault();

    let guess = [className1, className2, className3, className4];
    console.log("answer", answer);
    let correctPositions = 0;
    let correctColors = 0;
    let answerCopy = [...answer];

    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        correctPositions++;
      }
    }

    for (let i = 0; i < guess.length; i++) {
      if (answerCopy.includes(guess[i])) {
        correctColors++;
        let index = answerCopy.indexOf(guess[i]);

        if (index > -1) {
          answerCopy.splice(index, 1, "x");
        }
      }
    }

    let response = "";
    if (correctPositions === 4) {
      response += "You win!";
    } else if (correctColors === 0) {
      response += "all incorrect";
    } else response += `Correct:${correctPositions}, Partial:${correctColors - correctPositions}`;
    setHint(response);
    setClue(true);
    addPeg();
    decrementAttempts();
    didPlayerWin(response);
  }

  return (
    <div className="guess-board">
      <button
        disabled={clue}
        className={className1}
        onClick={() => setClassName1(currentColor)}
      ></button>
      <button
        disabled={clue}
        className={className2}
        onClick={() => setClassName2(currentColor)}
      ></button>
      <button
        disabled={clue}
        className={className3}
        onClick={() => setClassName3(currentColor)}
      ></button>
      <button
        disabled={clue}
        className={className4}
        onClick={() => setClassName4(currentColor)}
      ></button>
      <button onClick={handleClick} disabled={clue}>
        {!clue ? "Check" : null}
      </button>
      <div className="clue-container">
        {clue ? (
          <div>
            <small>{hint}</small>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Peg;
