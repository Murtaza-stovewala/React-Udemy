import Toast from './Toast';
import React from 'react'
function App() {
    const [show,setShow]=React.useState(false);
  function handleEnrol() {
   setShow(true);

    setTimeout(() => {
     setShow(false);
    }, 3000);
  }
  const message="You successfully enrolled into a course"

  return (
    <div id="app">
      {show && <Toast message={message}></Toast>}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;


import ReactDOM from 'react-dom'

export default function Toast({ message }) {
  return ReactDOM.createPortal(
    <aside className="toast" data-testid="toast">
      <p>{message}</p>
    </aside>,
    document.querySelector('body')
  );
}
