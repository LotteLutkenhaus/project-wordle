import React from "react";

function GuessResults({ guessResults }) {
  return (
    <>
      <div className="guess-results">
        {guessResults.map(({ id, value }) => (
          <p className="guess" key={id}>
            {value}
          </p>
        ))}
      </div>
    </>
  );
}

export default GuessResults;
