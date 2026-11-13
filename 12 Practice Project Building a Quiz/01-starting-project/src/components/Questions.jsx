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
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswers(answer);
      }, 2000);
    }, 1000);
  }
  let answeredState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answeredState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answeredState = "answered";
  }

  return (
    <div id="questions">
      <QuizTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answeredState}
        // key={activeQuestionIndex}
      />
      {/* <h2>{`Q.(${index + 1}) ${QUESTIONS[index].text}`}</h2> */}
      <h2>
        Q.{index + 1}- {QUESTIONS[index].text}
      </h2>
      <Answers
        // key={activeQuestionIndex}
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answersState={answeredState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
