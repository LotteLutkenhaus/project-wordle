import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  return (
    <span className={`cell ${status ? status : ""}`}>
      {letter ? letter : ""}
    </span>
  );
}

function Guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((cellIndex) => {
        return (
          <Cell
            key={`letter-${cellIndex}`}
            letter={checkedGuess ? checkedGuess[cellIndex].letter : undefined}
            status={checkedGuess ? checkedGuess[cellIndex].status : undefined}
          />
        );
      })}
    </p>
  );
}

export default Guess;
