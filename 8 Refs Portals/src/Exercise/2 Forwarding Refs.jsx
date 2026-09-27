
import { forwardRef } from 'react';
import React from 'react'


const Input = React.forwardRef(function Input({label, ...otherProps},ref) {
  // Todo: Accept forwarded ref and "connect" it to the <input> element
  return (
    <p className="control">
      <label>{label}</label>
      {/* Todo: "Forward" remaining props to <input> element */}
      <input ref={ref} { ...otherProps} />
    </p>
  );
});
export default Input;

import Input from './Input';
import React from 'react'
export const userData = {
  name: '',
  email: '',
};

export function App() {
    const nameInput=React.useRef();
    const emailInput=React.useRef();
    const [name,setName]=React.useState("Your Name");
    const [email,setEmail]=React.useState("Your E-Mail");
    
  function handleSaveData() {
    userData.name = nameInput.current.value;
    userData.email = emailInput.current.value;
    setName(`Name: ${userData.name}`);
    setEmail(`Email: ${userData.email}`);
    console.log(userData);
    
  }

  return (
    <div id="app">
      <Input type="text" ref={nameInput} label={name} />
      <Input type="email" ref={emailInput} label={email} />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}

