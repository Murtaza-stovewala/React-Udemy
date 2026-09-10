import React from 'react'
function App() {
    const select=React.useRef();
    function handleClick(){
        select.current.click();
    }
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input ref={select}  data-testid="file-picker" type="file" accept="image/*" />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
