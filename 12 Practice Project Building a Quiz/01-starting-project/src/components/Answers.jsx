import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answersState,onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answersState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answersState === "correct" || answersState === "wrong") &&
          isSelected
        ) {
          cssClass = answersState;
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              onClick={() => onSelect(answer)}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
