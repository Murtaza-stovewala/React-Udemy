import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  function handleclick() {
    setSubmitted(true);
  }
  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value)
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "Unknown Entity"}</h2>
      <p>
        <input type="text" onChange={handleChange } value={enteredPlayerName} />
        <button onClick={handleclick}>Set Name</button>
      </p>
    </section>
  );
}
