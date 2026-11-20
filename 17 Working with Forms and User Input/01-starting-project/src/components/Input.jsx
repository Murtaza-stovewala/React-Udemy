export default function Input({label,id,error,...props}) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        
        {...props}
      />
      <div className="control-error">
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
/*
<div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={()=>handelInputBlur("email")}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid Email.</p>}
          </div>
        </div>
*/
