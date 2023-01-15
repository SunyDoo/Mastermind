import React, { useEffect, useState } from "react";
import ColorBoard from "../ColorBoard/ColorBoard";
// import Peg from "../Peg/Peg";
import "./Board.css";
import WinScreen from "../WinScreen/WinScreen";
import LoseScreen from "../LoseScreen/LoseScreen";
import Rules from "../Rules/Rules";
import ScoreList from "../ScoreList/ScoreList";
import PegBoard from "../PegBoard/PegBoard";

function Board() {
  const [currentColor, setCurrentColor] = useState("white");
  const [answer, setAnswer] = useState([]);
  const [randomNum, setRandomNum] = useState([]);
  const [pegCount, setPegCount] = useState(1);
  const [attempts, setAttempts] = useState(10);
  const [openWinScreen, setOpenWinScreen] = useState(false);
  const [openScoreList, setOpenScoreList] = useState(false);
  const [openRules, setOpenRules] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

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
    fetch("/scores")
      .then((res) => res.json())
      .then((data) => setHighScores(data));
  }, []);

  useEffect(() => {
    const colorObj = {
      0: "white",
      1: "red",
      2: "blue",
      3: "green",
      4: "yellow",
      5: "orange",
      6: "purple",
      7: "gray",
    };
    const colorArray = randomNum.map((number) => colorObj[number]);
    setAnswer(colorArray);
  }, [randomNum]);

  function addPeg() {
    setPegCount((pegCount) => pegCount + 1);
  }

  function decrementAttempts() {
    setAttempts((attempts) => attempts - 1);
  }

  function didPlayerWin(str) {
    if (str === "You win!") {
      setOpenWinScreen(true);
      recordWin();
    }
  }

  function recordWin() {
    if (setOpenWinScreen) setIsActive(false);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  function onAddScore(newScore) {
    const updatedScores = highScores.map((score) => {
      if (score.id === newScore.id) {
        return newScore;
      } else {
        return score;
      }
    });
    setHighScores(updatedScores);
    console.log(newScore);
    console.log(highScores);
  }

  return (
    <>
      <div style={{ padding: "10px", margin: "5rem" }}>
        <button disabled={openRules} onClick={() => setOpenRules(true)}>
          Rules
        </button>
        <button disabled={openScoreList} onClick={() => setOpenScoreList(true)}>
          High Scores
        </button>
      </div>
      <div className="game-wrapper">
        {openScoreList && (
          <ScoreList
            highScores={highScores}
            setOpenScoreList={setOpenScoreList}
          />
        )}
        {openRules && <Rules setOpenRules={setOpenRules} />}
        {openWinScreen && (
          <WinScreen
            refreshPage={refreshPage}
            setOpenWinScreen={setOpenWinScreen}
            attempts={attempts}
            seconds={seconds}
            onAddScore={onAddScore}
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
        <p>Elapsed Time: {seconds} seconds</p>
        <p>Attempts remaining: {attempts} </p>
      </div>
      <div
        style={{
          padding: "10px",
          margin: "5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
      </div>

        <div className="game-board">
          <PegBoard
            pegCount={pegCount}
            currentColor={currentColor}
            answer={answer}
            addPeg={addPeg}
            decrementAttempts={decrementAttempts}
            didPlayerWin={didPlayerWin}
          />
        </div>
      </div>
    </>
  );
}

export default Board;
