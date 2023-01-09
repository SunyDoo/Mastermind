import React from "react";
import "./WinScreen.css";

function WinScreen({ refreshPage, attempts, seconds }) {
  return (
    <div className="modal-Background">
      <div className="modalContainer">
        <div className="title">
          <h1>Congratulations, You Win!</h1>
        </div>
        <div className="-body">
          <p>You Guessed Correctly in {10 - attempts} Tries</p>
          <p>in {seconds} Seconds!</p>
        </div>
        <div className="footer">
          <button onClick={refreshPage}>Play Again</button>
        </div>
      </div>
    </div>
  );
}

export default WinScreen;
