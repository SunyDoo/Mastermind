import React, { useEffect, useState } from "react";
import ColorBoard from "../ColorBoard/ColorBoard";
import Peg from "../Peg/Peg";
import "./Board.css";

function Board() {
  const [currentColor, setCurrentColor] = useState("white");
  const [answer, setAnswer] = useState([]);
  const [randomNum, setRandomNum] = useState([]);
  // const [attempts, setAttempts] = useState(10);

  useEffect(() => {
    fetch(
      "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new"
    )
      .then((res) => res.text())
      .then((text) =>
        text
          .trim()
          .split("\n")
          .map((n) => Number(n))
      )
      .then((arr) => setRandomNum(arr));
  }, []);

  useEffect(() => {
    const colorArray = randomNum.map((number) => {
      if (number === 0) {
        return "white";
      } else if (number === 1) {
        return "red";
      } else if (number === 2) {
        return "blue";
      } else if (number === 3) {
        return "green";
      } else if (number === 4) {
        return "yellow";
      } else if (number === 5) {
        return "orange";
      } else if (number === 6) {
        return "purple";
      } else if (number === 7) {
        return "gray";
      }
    });
    setAnswer(colorArray);
  }, [randomNum]);

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
