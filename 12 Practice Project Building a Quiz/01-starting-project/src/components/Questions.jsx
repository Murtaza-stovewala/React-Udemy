import QuizTimer from "./QuizTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions";

export default function Questions({
  questionText,
  answers,
  onSelectAnswers,
  selectedAnswer,
  answeredState,
  onSkipAnswers,
}) {
  return (
    <div id="questions">
      <QuizTimer
        onTimeout={onSkipAnswers}
        Timer={10000}
        // key={activeQuestionIndex}
      />
      <h2>{questionText}</h2>
      <Answers
        // key={activeQuestionIndex}
        answers={answers}
        selectedAnswer={selectedAnswer}
        answersState={answeredState}
        onSelect={onSelectAnswers}
      />
    </div>
  );
}
