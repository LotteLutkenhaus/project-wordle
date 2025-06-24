import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  [guessResults, setGuessResults] = React.useState([]);

  function handleSubmitGuess(guess) {
    const newGuessResults = [
      ...guessResults,
      { value: guess, id: crypto.randomUUID() },
    ];
    setGuessResults(newGuessResults);
  }

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
