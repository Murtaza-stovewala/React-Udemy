import { useState } from "react";
import QUESTIONS from "../questions";
import Completed from '../assets/quiz-complete.png';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  //   function handleSelectAnswer(answer){
  //     setUserAnswers((prevSelectedAnswer)=>{
  //         const updatedAnswer=[...prevSelectedAnswer];
  //         updatedAnswer.push(answer);
  //         return updatedAnswer;
  //     })
  //   }
  function handleSelectAnswer(answer) {
    setUserAnswers((prevSelectedAnswer) => {
      return [...prevSelectedAnswer, answer];
    });
  }

   const quizIsCompleted=activeQuestionIndex===QUESTIONS.length;
  if(quizIsCompleted){
    return <div id="summary">
        <img src={Completed} alt="Quiz Completed" />
        <h2>Quiz is Completed </h2>
    </div>
  }

  const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswer.sort(() => Math.random() - 0.5);

 


  return (
    <div id="quiz">
      <div id="questions">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswer.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
