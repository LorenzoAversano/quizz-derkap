import { useState, useEffect } from "react";
import QuestionsAnswers from "./QuestionsAnswers";
function GameInProgress(props) {
  const [currentScore, setCurrentScore] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);  
  const [timer, setTimer] = useState(0);
  const timeInMinutes = Math.floor(timer / 60);
  let intervalId = 0;


  function resetData() {
    props.setQuestionsList([]);
    setCurrentScore(0);
    setTimer(0);
    setIsGameEnded(false);
  }

  function returnHome() {
    resetData();
    props.setDifficulty("");
    props.setCategory("");
    props.setIsGameStarted(false);
  }

  function restartGame() {
    resetData();
    props.getQuestionsData();
  }
  


  useEffect(() => {
    if (!isGameEnded) {
    intervalId = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
    }, [isGameEnded]);
    

    

  return (
    <div className="GameInProgress">
      {!isGameEnded ? (
        <QuestionsAnswers
          setCurrentScore={setCurrentScore}
          currentScore={currentScore}
          setTimer={setTimer}
          setIsGameEnded={setIsGameEnded}
          questionsList={props.questionsList}
        />
      ) : (
        <div>
          <div className="font-bold text-2xl mb-4 text-center">
            <p>Quizz is finished !</p>
            <p>
              Your score is: {currentScore} / {props.questionsList.length}
            </p>
            <p>Time Elapsed: {timeInMinutes} minutes {timer % 60} seconds</p>
          </div>
          <div className="flex justify-center">
            <button className="m-2" onClick={() => returnHome()}>
              Home
            </button>
            <button className="m-2" onClick={() => restartGame()}>
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameInProgress; 