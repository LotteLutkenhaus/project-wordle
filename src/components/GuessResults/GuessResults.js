import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ guessResults, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((index) => {
          const guess = guessResults[index]
            ? guessResults[index].value
            : undefined;
          return (
            <Guess key={index} guess={guess} index={index} answer={answer} />
          );
        })}
      </div>
    </>
  );
}

export default GuessResults;
