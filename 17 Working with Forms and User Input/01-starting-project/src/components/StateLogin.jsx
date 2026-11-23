import Input from "./Input";
import { isEmail, hasMinLength, isNotEmpty } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handelInputBlur: handleEmailBlur,
    hasError: emailIsInvalid,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handelInputBlur: handlePasswordBlur,
    hasError: passwordIsInvalid,
  } = useInput("", (value) => !hasMinLength(value, 6) && isNotEmpty(value));

  // const emailIsInvalid =
  //   didEmailEdit &&
  //   !isEmail(emailValue) &&
  //   !isNotEmpty(emailValue);

  // const passwordIsInvalid =
  //   didEdit.password &&
  //   !hasMinLength(enteredValues.password,6) &&
  //   isNotEmpty(enteredValues.password);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("enteredValues");
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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailIsInvalid && "Please enter a valid email!"}
        />
        <Input
          id={"password"}
          label={"Password"}
          type={"password"}
          name={"password"}
          onBlur={handlePasswordBlur}
          onChange={handleEmailChange}
          value={passwordValue}
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

/*
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


*/
