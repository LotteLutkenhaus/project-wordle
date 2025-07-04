import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(guess) {
    const newGuessResults = [
      ...guessResults,
      { value: guess, id: crypto.randomUUID() },
    ];
    setGuessResults(newGuessResults);

    if (guess === answer) {
      setGameStatus("won");
      return;
    }

    if (newGuessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
      return;
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isFinished={gameStatus !== "running"}
      />
      <Banner
        guessResults={guessResults}
        answer={answer}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
