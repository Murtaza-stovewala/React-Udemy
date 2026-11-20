import { useState } from "react";
import Input from "./Input";
import { isEmail, hasMinLength, isNotEmpty } from "../util/validation";

export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');\

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
    
  const passwordIsInvalid =
    didEdit.password &&
    hasMinLength(enteredValues.password) &&
    isNotEmpty(enteredValues.password);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevVal) => ({
      ...prevVal,
      [identifier]: false,
    }));
  }

  function handelInputBlur(identifier) {
    setDidEdit((prevVal) => ({
      ...prevVal,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id={"email"}
          label={"Email"}
          type={"email"}
          name={"email"}
          onBlur={() => handelInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email!"}
        />
        <Input
          id={"password"}
          label={"Password"}
          type={"password"}
          name={"password"}
          onBlur={() => handelInputBlur("password")}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={enteredValues.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
