import React from "react";
import { range } from "../../utils";

function Guess({ checkedGuess }) {
  function createCell({ cellIndex, letter, status }) {
    return (
      <span key={`letter-${cellIndex}`} className={`cell ${status}`}>
        {letter ? letter : ""}
      </span>
    );
  }

  return (
    <p className="guess">
      {checkedGuess
        ? checkedGuess.map(({ letter, status }, cellIndex) => {
            return createCell({ cellIndex, letter, status });
          })
        : range(0, 5, 1).map((cellIndex) => {
            return createCell({ cellIndex });
          })}
    </p>
  );
}

export default Guess;
