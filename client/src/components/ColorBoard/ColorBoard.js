import React from "react";
import "./ColorBoard.css";

const ColorBoard = ({ handleClick }) => {
  return (
    <div className="board">
      <div className="red" onClick={()=>handleClick('red')}></div>
      <div className="blue" onClick={()=>handleClick('blue')}></div>
      <div className="green" onClick={()=>handleClick('green')}></div>
      <div className="yellow" onClick={()=>handleClick('yellow')}></div>
      <div className="orange" onClick={()=>handleClick('orange')}></div>
      <div className="purple" onClick={()=>handleClick('purple')}></div>
      <div className="gray" onClick={()=>handleClick('gray')}></div>
    </div>
  );
};

export default ColorBoard;
