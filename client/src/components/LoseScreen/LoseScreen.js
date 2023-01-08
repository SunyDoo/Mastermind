import React from "react";
import "./LoseScreen.css";

function LoseScreen({ refreshPage }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>You Ran Out Of Guesses!</h1>
        </div>
        <div className="body">
          <p>Sorry, You Lost</p>
        </div>
        <div className="footer">
          <button onClick={refreshPage}>Try Again</button>
        </div>
      </div>
    </div>
  );
}

export default LoseScreen;
