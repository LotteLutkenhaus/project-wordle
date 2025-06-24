import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  [guessResults, setGuessResults] = React.useState([]);

  function handleSubmitGuess(guess) {
    if (guessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert("GAME OVER!");
      return;
    }

    const newGuessResults = [
      ...guessResults,
      { value: guess, id: crypto.randomUUID() },
    ];
    setGuessResults(newGuessResults);
  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
