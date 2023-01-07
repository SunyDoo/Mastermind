import React, { useState } from "react";
import "./Peg.css";
function Peg({ currentColor, answer, addPeg, decrementAttempts }) {
  const [className1, setClassName1] = useState("white");
  const [className2, setClassName2] = useState("white");
  const [className3, setClassName3] = useState("white");
  const [className4, setClassName4] = useState("white");
  // const [guess, setGuess] = useState([
  //   className1,
  //   className2,
  //   className3,
  //   className4,
  // ]);
  const [clue, setClue] = useState(false);
  const [correctInCorrectSpot, setCorrectInCorrectSpot] = useState(0);
  const [correctInIncorrectSpot, setCorrectInIncorrectSpot] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  function handleClick(e) {
    e.preventDefault();

    let guess = [className1, className2, className3, className4];
    console.log("answer", answer);
    let wrong = 0;
    let rightInWrongSpot = 0;
    let right = 0;

    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        right++;
      } else if (answer.includes(guess[i])) {
        rightInWrongSpot++;
      } else {
        wrong++;
      }
    }
    setClue(true);
    setCorrectInCorrectSpot(right);
    setCorrectInIncorrectSpot(rightInWrongSpot);
    setIncorrect(wrong);
    addPeg();
    decrementAttempts()
    // console.log("correctInCorrectSpot", correctInCorrectSpot)
    // console.log("correctInIncorrectSpot", correctInIncorrectSpot)
    // console.log("incorrect", incorrect)
  }

  return (
    <div className="guess-board">
      <div
        className={className1}
        onClick={() => setClassName1(currentColor)}
      ></div>
      <div
        className={className2}
        onClick={() => setClassName2(currentColor)}
      ></div>
      <div
        className={className3}
        onClick={() => setClassName3(currentColor)}
      ></div>
      <div
        className={className4}
        onClick={() => setClassName4(currentColor)}
      ></div>
      <button onClick={handleClick} disabled={clue}>
        {!clue ? "Check" : null}
      </button>
      <div className="clue-container">
        {clue ? (
          <div>
            <small>Incorrect:{incorrect}</small>
            <br></br>
            <small>Correct:{correctInCorrectSpot}</small>
            <br></br>
            <small>Partial:{correctInIncorrectSpot}</small>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Peg;
