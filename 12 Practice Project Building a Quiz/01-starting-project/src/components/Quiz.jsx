import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions";
import Completed from "../assets/quiz-complete.png";
import Questions from "./Questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(SelectedAnswer) {
      setUserAnswers((prevSelectedAnswer) => {
        return [...prevSelectedAnswer, SelectedAnswer];
      });
    },
    [],
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
        index={activeQuestionIndex}
        onSelectAnswers={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
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
