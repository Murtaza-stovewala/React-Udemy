import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../questions";
import Questions from "./Questions";
import Summary from "./Summary";

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
      <Summary/>
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
