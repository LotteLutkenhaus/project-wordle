import React from "react";

function GuessInput() {
  [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Additional check as minLength and maxLength HTML validation doesn't
    // actually work. `pattern` works as a substitute, but it requires regex
    // which isn't too readable and the error message can't be customized.
    if (guess.length !== 5) {
      window.alert("Please make sure your guess has exactly 5 letters 🫶");
    }

    console.log({ guess });
    setGuess("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          id="guess-input"
          value={guess}
          type="text"
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
