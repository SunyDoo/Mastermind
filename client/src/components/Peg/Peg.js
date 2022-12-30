import React from "react";
import "./Peg.css";
function Peg({ props }) {
  return (
    <div className="guess-board">
      <div className="white"></div>
      <div className="white"></div>
      <div className="white"></div>
      <div className="white"></div>
      <button>Check</button>
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
