import { useRef, useState } from "react";

export default function Login() {
  const mailId = useRef();
  const pwd = useRef();
  const [user, setUser] = useState({});
  function handleSubmit(event) {
    event.preventDefault();
    setUser({
      mail: mailId.current.value,
      password: pwd.current.value,
    });
    mailId.current.value = "";
    pwd.current.value = "";
  }
  console.log(user.mail,user.password);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" ref={mailId} type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" ref={pwd} type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
