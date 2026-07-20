import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
// const ControlContainer = styled.div`display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;`



export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div /*id='auth-inputs'*/ className=" align- w-full max-w-md p-8 mx-auto rounded-lg shadow-xl bg-gradient-to-b from-[#474232] to-[#28271c]">
      <div className='flex flex-col gap-2 mb-16'>
         {/* <ControlContainer> */}
          <Input
            label='Email'
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? '#fed2d2':'#d1d5db'
            // }}
            //className={emailNotValid ? 'invalid' : 'undefined'} 
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          <Input
            label='Password'
            type="password"
            invalid={passwordNotValid}
            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        {/* <p>
          <Label $invalid={emailNotValid}
          //className={`label ${emailNotValid ? 'invalid' : undefined}`}
          >Email</Label>
          <Input
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? '#fed2d2':'#d1d5db'
            // }}
            //className={emailNotValid ? 'invalid' : 'undefined'} 
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label
            $invalid={passwordNotValid}
          // className={`label ${passwordNotValid ? 'invalid' : undefined}`}
          >Password</Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p> */}
        {/* </ControlContainer> */}
      </div>
      <div /*className="actions"*/ className="flex justify-end gap-4">
        <button type="button" /*className="text-button"*/ className="px-8 py-4  font-semibold uppercase rounded text-old-800 text-[#f0b322] hover:text-[#f0920e]">
          Create a new account
        </button>
        <Button
        // className='button'
         onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
