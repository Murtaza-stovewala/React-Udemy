import { useRef, useState } from "react";

export default function Login() {
  // const mailId = useRef();
  // const pwd = useRef();
  // const [user, setUser] = useState({});
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setUser({
  //     mail: mailId.current.value,
  //     password: pwd.current.value,
  //   });
  //   mailId.current.value = "";
  //   pwd.current.value = "";
  // }

  const email = useRef();
  const password = useRef();

  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false)
  }

  // console.log(user.mail, user.password);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" ref={email} type="email" name="email" />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid Email.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" ref={password} type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
