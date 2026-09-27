import Form from './Form';
import React from 'react'


// Don't change the name of the 'App' 
// function and keep it a named export

export function App() {
    const form=React.useRef();
    
  function handleRestart() {
      form.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={form}/>
    </div>
  );
}

//----------------------------------------------------------------------------------------------------------------------------------

import React from 'react'


const Form=React.forwardRef(function Form({onSelect},ref) {
    const form=React.useRef();
    React.useImperativeHandle(ref,()=>{
        return{
            clear(){
                form.current.reset();
            }
        };
    });
  return (
    <form ref={form}>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button onClick={onSelect}>Save</button>
      </p>
    </form>
  );
})
export default Form;