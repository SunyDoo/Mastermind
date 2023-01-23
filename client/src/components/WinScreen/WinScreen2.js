import React from "react";
import "./WinScreen.css";

function WinScreen({ refreshPage, attempts, seconds }) {
  return (
    <div className="win-modal-Background">
    <div className="win-modalContainer">
      <div className="title">
        <h1>Congratulations, You Win!</h1>
      </div>
      <br></br>
      <div className="body">
      <p>You Guessed Correctly in:</p><br></br><p> {10 - attempts} Tries
          And {seconds} Seconds!</p>
      </div>
      <div className="footer">
        <button onClick={refreshPage}>Play Again</button>
      </div>
    </div>
  </div>
  );
}

export default WinScreen;


{/* <h4>You Guessed Correctly in {10 - attempts} Tries</h4>
          <h4>in {seconds} Seconds!</h4> */}