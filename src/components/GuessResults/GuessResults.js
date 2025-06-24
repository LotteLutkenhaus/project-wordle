import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guessResults, answer }) {
  function renderGuess({ guess, index }) {
    const checkedGuess = checkGuess(guess, answer);
    return (
      <Guess
        key={`guess-${index}`}
        checkedGuess={checkedGuess ? checkedGuess : undefined}
      />
    );
  }

  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((index) => {
          const guess = guessResults[index]
            ? guessResults[index].value
            : undefined;
          return renderGuess({ guess, index });
        })}
      </div>
    </>
  );
}

export default GuessResults;
