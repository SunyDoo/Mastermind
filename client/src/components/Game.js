import React, { useState } from "react";

const Game = () => {
  const [guess, setGuess] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

  const handleGuess = (event) => {
    const selectedColor = event.target.value;
    setGuess((prevGuess) => [...prevGuess, selectedColor]);
  };

  const handleSubmit = () => {
    // Compare the guess to the correct answer and update the feedback array with the appropriate response
    // If the guess is correct, set gameOver to true
  };

  const renderColors = () => {
    return numbers.map((number) => (
      <button key={number} value={number} onClick={handleGuess}>
        {number}
      </button>
    ));
  };

  return (
    <div>
      <div>{renderColors()}</div>
      <div>
        {guess.map((color) => (
          <span key={color}>{color}</span>
        ))}
      </div>
      <div>
        {feedback.map((response) => (
          <span key={response}>{response}</span>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      {gameOver && <div>You won!</div>}
    </div>
  );
};

export default Game;
