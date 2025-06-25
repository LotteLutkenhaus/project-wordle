import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Banner({ guessResults, answer }) {
  let gameStatus = "running";

  if (guessResults.length > 0) {
    const lastGuess = guessResults[guessResults.length - 1];

    if (lastGuess.value === answer) {
      gameStatus = "won";
    } else if (guessResults.length >= NUM_OF_GUESSES_ALLOWED) {
      gameStatus = "lost";
    }
  }

  let className;
  let bannerContent = null;

  if (gameStatus === "won") {
    className = "happy banner";
    bannerContent = (
      <>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guessResults.length} guesses</strong>
      </>
    );
  }

  if (gameStatus === "lost") {
    className = "sad banner";
    bannerContent = (
      <>
        Sorry, the correct answer is <strong>{answer}</strong>
      </>
    );
  }

  return (
    bannerContent && (
      <>
        <div className={className}>
          <p>{bannerContent}</p>
        </div>
      </>
    )
  );
}

export default Banner;
