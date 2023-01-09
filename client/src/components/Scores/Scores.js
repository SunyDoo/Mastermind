import React, { useState } from "react";

function Scores({ onAddScore, attempts, seconds }) {
  const [name, setName] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setDisableButton(true);
    const score = {
      name: name,
      attempts: attempts,
      time: seconds,
    };
    console.log("first", score);
    fetch("/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(score),
    })
      .then((r) => r.json())
      .then((newScore) => onAddScore(newScore));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            maxLength={3}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br></br>
        <button disabled={disableButton} type="submit">
          Submit Score
        </button>
      </form>
    </div>
  );
}

export default Scores;
