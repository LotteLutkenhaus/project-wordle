import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ guessResults }) {
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((index) => (
          <Guess key={`guess-${index}`} guess={guessResults[index]} />
        ))}
      </div>
    </>
  );
}

export default GuessResults;
