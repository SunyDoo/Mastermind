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
