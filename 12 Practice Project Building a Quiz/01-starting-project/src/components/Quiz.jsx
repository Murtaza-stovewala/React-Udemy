import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions";
import Completed from "../assets/quiz-complete.png";
import Questions from "./Questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answeredState, setAnsweredState] = useState("");

  const activeQuestionIndex =
    answeredState === "" ? userAnswers.length : userAnswers.length - 1;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(SelectedAnswer) {
      setAnsweredState("answered");
      setUserAnswers((prevSelectedAnswer) => {
        return [...prevSelectedAnswer, SelectedAnswer];
      });
      setTimeout(() => {
        if (SelectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnsweredState("correct");
        } else {
          setAnsweredState("wrong");
        }

        setTimeout(() => {
          setAnsweredState("");
        }, 1000);
      }, 1000);
    },
    [activeQuestionIndex],
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;
  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={Completed} alt="Quiz Completed" />
        <h2>Quiz is Completed </h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswers={handleSelectAnswer}
        selectedAnswer={userAnswers[activeQuestionIndex]}
        answeredState={answeredState}
        onSkipAnswers={handleSkipAnswer}
      />
    </div>
  );
}

//   function handleSelectAnswer(answer){
//     setUserAnswers((prevSelectedAnswer)=>{
//         const updatedAnswer=[...prevSelectedAnswer];
//         updatedAnswer.push(answer);
//         return updatedAnswer;
//     })
//   }
