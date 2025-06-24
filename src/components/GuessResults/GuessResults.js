import React from "react";

function GuessResults({ guessResults }) {
  return (
    <>
      <div className="guess-results">
        {guessResults.map(({ id, result }) => (
          <p className="guess" key={id}>
            {result}
          </p>
        ))}
      </div>
    </>
  );
}

export default GuessResults;
