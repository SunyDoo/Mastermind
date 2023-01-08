import React from "react";
import "./LoseScreen.css";

function LoseScreen({ refreshPage }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>Sorry, You Lost</h1>
        </div>
        <div className="body">
          <p>You Ran Out Of Guesses!</p>
        </div>
        <div className="footer">
          <button onClick={refreshPage}>Try Again</button>
        </div>
      </div>
    </div>
  );
}

export default LoseScreen;
