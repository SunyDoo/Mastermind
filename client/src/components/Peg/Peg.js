import React, { useState } from "react";
import "./Peg.css";
function Peg({ currentColor, answer }) {
  const [className1, setClassName1] = useState("white");
  const [className2, setClassName2] = useState("white");
  const [className3, setClassName3] = useState("white");
  const [className4, setClassName4] = useState("white");
  const [guess, setGuess] = useState([
    className1,
    className2,
    className3,
    className4,
  ]);

  function handleClick(e) {
    e.preventDefault();
    let guess = [className1, className2, className3, className4];
    console.log(guess);
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
      <button onClick={handleClick}>Check</button>
      <div className="clue-container">
        <div className="white"></div>
        <div className="white"></div>
        <div className="white"></div>
        <div className="white"></div>
      </div>
    </div>
  );
}

export default Peg;
