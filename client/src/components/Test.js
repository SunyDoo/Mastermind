// First implementation of useEffect
useEffect(() => {
  const colorArray = randomNum.map((number) => {
    if (number === 0) {
      return "white";
    } else if (number === 1) {
      return "red";
    } else if (number === 2) {
      return "blue";
    } else if (number === 3) {
      return "green";
    } else if (number === 4) {
      return "yellow";
    } else if (number === 5) {
      return "orange";
    } else if (number === 6) {
      return "purple";
    } else if (number === 7) {
      return "gray";
    } else return null;
  });
  setAnswer(colorArray);
}, [randomNum]);

// useEffect refactor
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

// first implementation of game logic
function handleClick(e) {
  e.preventDefault();

  let guess = [className1, className2, className3, className4];
  let wrong = 0;
  let rightInWrongSpot = 0;
  let right = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      right++;
    } else if (answer.includes(guess[i])) {
      rightInWrongSpot++;
    } else {
      wrong++;
    }
  }
  setClue(true);
  setCorrectInCorrectSpot(right);
  setCorrectInIncorrectSpot(rightInWrongSpot);
  setIncorrect(wrong);
}

// 2nd Implementation (with splice)
function handleClick(e) {
  e.preventDefault();

  let guess = [className1, className2, className3, className4];
  console.log("answer", answer);
  let correctColors = 0;
  let correctPositions = 0;
  let answerCopy = [...answer];

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answerCopy[i]) {
      correctColors++;
      correctPositions++;
    } else if (answerCopy.includes(guess[i])) {
      correctColors++;
      let index = answerCopy.indexOf(guess[i]);

      if (index > -1) {
        answerCopy.splice(index, 1);
      }
    }
  }

  let response = "";
  if (correctPositions === 4) {
    response += "You win!";
  } else if (correctColors === 0) {
    response += "all incorrect";
  } else
    response += `Correct:${correctPositions}, Partial:${
      correctColors - correctPositions
    }`;
  setHint(response);
  setClue(true);
  addPeg();
  decrementAttempts();
  didPlayerWin(response);
}

// 3rd Implementation
function handleClick(e) {
  e.preventDefault();

  let guess = [className1, className2, className3, className4];
  console.log("answer", answer);
  let correctColors = 0;
  let correctPositions = 0;
  // let answerCopy = [...answer];

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      correctColors++;
      correctPositions++;
    } else if (answer.includes(guess[i])) {
      correctColors++;
    }
  }

  let response = "";
  if (correctPositions === 4) {
    response += "You win!";
  } else if (correctColors === 0) {
    response += "all incorrect";
  } else
    response += `Correct:${correctPositions}, Partial:${
      correctColors - correctPositions
    }`;
  setHint(response);
  setClue(true);
  addPeg();
  decrementAttempts();
  didPlayerWin(response);
}

