import React from 'react';

function StartGame({ email, QUESTIONS_AMOUNT, setIsGameStarted }) {
  return (
    <div className="StartGame flex flex-col items-center justify-center text-center">
      <p className="mb-8 text-xl font-medium">
        Welcome to the Derkap Quizz, <br /> You'll have to answer {QUESTIONS_AMOUNT} questions, {email}.
      </p>
      <button
        onClick={() => {
          setIsGameStarted(true);
        }}
      >
        Start the game
      </button>
    </div>
  );
}

export default StartGame;