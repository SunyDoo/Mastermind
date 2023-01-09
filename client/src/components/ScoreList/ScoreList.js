import React from "react";

function ScoreList({ setOpenScoreList, highScores }) {
  let sortedScores = highScores.sort((a, b) => {
    if (a.attempts !== b.attempts) {
      // Sort by attempts if the attempts are different
      return a.attempts - b.attempts;
    } else {
      // Sort by time if the attempts are the same
      return b.time - a.time;
    }
  });

  const top10Scores = sortedScores.reverse().slice(0, 10);

  return (
    <div className="modal-Background">
      <div className="modalContainer">
        <div className="title">
          <h1>High Scores</h1>
        </div>
        <div className="body">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Guesses</th>
                <th>Seconds</th>
              </tr>
            </thead>
            <tbody>
              {top10Scores.map((score) => (
                <tr key={score.id}>
                  <td>{score.name}</td>
                  <td>{10 - score.attempts}</td>
                  <td>{score.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="footer">
          <button onClick={() => setOpenScoreList(false)}>
            Return to Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScoreList;
