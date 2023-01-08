import React, { useEffect, useState } from "react";
import ColorBoard from "../ColorBoard/ColorBoard";
import Peg from "../Peg/Peg";
import "./Board.css";
import WinScreen from "../WinScreen/WinScreen";
import LoseScreen from "../LoseScreen/LoseScreen";

function Board() {
  const [currentColor, setCurrentColor] = useState("white");
  const [answer, setAnswer] = useState([]);
  const [randomNum, setRandomNum] = useState([]);
  const [pegCount, setPegCount] = useState(1);
  const [attempts, setAttempts] = useState(10);
  const [playerCorrect, setPlayerCorrect] = useState("");
  const [openWinScreen, setOpenWinScreen] = useState(false);


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
      } else return null;
    });
    setAnswer(colorArray);
  }, [randomNum]);

  function addPeg() {
    setPegCount((pegCount) => pegCount + 1);
  }

  function decrementAttempts() {
    setAttempts((attempts) => attempts - 1);
  }

  function didPlayerWin(num) {
    setPlayerCorrect(num);
    checkWin(num);
  }

  function checkWin(num) {
    if (num === 4) setOpenWinScreen(true);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <button>Rules</button>
      <button>High Scores</button>
      <div className="game-wrapper">
        {openWinScreen && (
          <WinScreen
            refreshPage={refreshPage}
            setOpenWinScreen={setOpenWinScreen}
            attempts={attempts}
          />
        )}
        {pegCount >= 11 && !openWinScreen && (
          <LoseScreen refreshPage={refreshPage} />
        )}
        <div className="color-board">
          <h2>Select Color</h2>
          <ColorBoard handleClick={setCurrentColor} />
          <p>Selected Color: </p>
          <div className="select-box">
            <div className={currentColor}></div>
          </div>
          <p>Attempts remaining: {attempts} </p>
        </div>
        <div className="game-board">
          <h1>MasterMind</h1>
          <Peg
            disabled
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
      </div>
    </div>
  );
}

export default Board;
