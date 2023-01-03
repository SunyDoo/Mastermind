import React, { useEffect, useState } from "react";
import ColorBoard from "../ColorBoard/ColorBoard";
import Peg from "../Peg/Peg";
import "./Board.css";

function Board({}) {
  const [currentColor, setCurrentColor] = useState("white");
  const [randomNum, setRandomNum] = useState("");
  // const [attempts, setAttempts] = useState(10);
  const [answer, setAnswer] = useState("");
  // let answer = [];
  useEffect(() => {
    fetch(
      "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new"
    )
    .then(res => res.text())
    .then(text => text.trim().split("\n").map(n => Number(n)))
    .then(arr => setRandomNum(arr));
  }, []);

  function generateAnswer(arr) {
    let correctColors=[]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "0") {
        correctColors.push("white");
      } else if (arr[i] === "1") {
        correctColors.push("red");
      } else if (arr[i] === "2") {
        correctColors.push("blue");
      } else if (arr[i] === "3") {
        correctColors.push("green");
      } else if (arr[i] === "4") {
        correctColors.push("yellow");
      } else if (arr[i] === "5") {
        correctColors.push("orange");
      } else if (arr[i] === "6") {
        correctColors.push("purple");
      } else if (arr[i] === "7") {
        correctColors.push("gray");
      }      
    }
    setAnswer(correctColors)
  }
console.log(randomNum)
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
