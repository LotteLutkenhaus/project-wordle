import React from "react";

function Banner({ guessResults, answer, gameStatus }) {
  let className;
  let bannerContent = null;

  if (gameStatus === "won") {
    className = "happy banner";
    bannerContent = (
      <>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessResults.length} guess{guessResults.length > 1 ? "es" : ""}
        </strong>
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
