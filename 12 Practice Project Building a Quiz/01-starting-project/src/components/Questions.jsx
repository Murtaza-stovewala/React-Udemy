import QuizTimer from "./QuizTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions";
import { useState } from "react";

export default function Questions({
  index,
  onSelectAnswers,
  //   answeredState,
  onSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswers: "",
    isCorrect: null,
  });
  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswers: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswers: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswers(answer);
      }, 2000);
    }, 1000);
  }
  let answeredState = "";

  if (answer.selectedAnswers && answer.isCorrect !== null) {
    answeredState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswers) {
    answeredState = "answered";
  }

  return (
    <div id="questions">
      <QuizTimer
        onTimeout={onSkipAnswer}
        timeout={10000}
        // key={activeQuestionIndex}
      />
     {/* <h2>{`Q.(${index + 1}) ${QUESTIONS[index].text}`}</h2> */}
     <h2>Q.{index + 1}- {QUESTIONS[index].text}</h2>
      <Answers
        // key={activeQuestionIndex}
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswers}
        answersState={answeredState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
