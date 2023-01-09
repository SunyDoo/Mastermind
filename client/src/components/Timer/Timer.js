import React, { useState, useEffect } from "react";

function Timer({ isActive }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

//   function toggle() {
//     setIsActive(!isActive);
//   }

//   function reset() {
//     setSeconds(0);
//     setIsActive(false);
//   }

  return (
    <div>
      {seconds} seconds
    </div>
  );
}

export default Timer;
