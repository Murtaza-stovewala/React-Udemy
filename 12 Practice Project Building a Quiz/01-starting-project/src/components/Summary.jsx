import CompletedImg from "../assets/quiz-complete.png";



export default function Summary() {
  return (
    <div id="summary">
      <img src={CompletedImg} alt="Quiz Completed" />
      <h2>Quiz is Completed </h2>
      <div id="summary-stats">
        <p>
            <span className="number">10%</span>
            <span className="text">Skipped</span>
        </p>
         <p>
            <span className="number">10%</span>
            <span className="text">Answered Correctly</span>
        </p>
         <p>
            <span className="number">10%</span>
            <span className="text">Answered InCorrectly</span>
        </p>
      </div>
    </div>
  );
}
