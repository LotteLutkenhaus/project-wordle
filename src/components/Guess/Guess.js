import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  function createCell({ cellIndex, letter }) {
    return (
      <span key={`letter-${cellIndex}`} className="cell">
        {letter ? letter : ""}
      </span>
    );
  }

  return (
    <p className="guess">
      {guess
        ? guess.value.split("").map((letter, cellIndex) => {
            return createCell({ cellIndex, letter });
          })
        : range(0, 5, 1).map((cellIndex) => {
            return createCell({ cellIndex });
          })}
    </p>
  );
}

export default Guess;
