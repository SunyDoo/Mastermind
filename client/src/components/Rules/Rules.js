import React from "react";
import "./Rules.css";

function Rules({ setOpenRules }) {
  return (
    <div className="modal-Background">
      <div className="modalContainer">
        <div className="title">
          <h1>Welcome to MasterMind</h1>
        </div>
        <div className="">
          <p>
            You have 10 attempts to correctly guess the sequence of colors in
            the correct order.
          </p>
          <p>
            After submitting a guess, you will be presented with clues as to
            whether you are close to the correct answer.
          </p>
          <p>
            If all colors are incorrect then "all incorrect" will be displayed.
          </p>
          <p>
            "Correct" refers to the number of colors that are correct and also
            in the correct position.
          </p>
          <p>
            "Partial" refers to the number of colors that are correct but not in
            the correct position in the pattern.
          </p>
          <p>Note: Colors can repeat in the pattern</p>
        </div>
        <div className="footer">
          <button onClick={() => setOpenRules(false)}>Return to Game</button>
        </div>
      </div>
    </div>
  );
}

export default Rules;
