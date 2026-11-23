import { useState } from "react";

export function useInput(defaultValue,validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid=validationFn(enteredValue) 

  function handleInputChange( event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
    // setEnteredValue((prevValues) => ({
    //   ...prevValues,
    //   [identifier]: value,
    // }));
    // setDidEdit((prevVal) => ({
    //   ...prevVal,
    //   [identifier]: false,
    // }));
  }

  function handelInputBlur() {
    setDidEdit(true);
    // setDidEdit((prevVal) => ({
    //   ...prevVal,
    //   [identifier]: true,
    // }));
  }
  return{
    value:enteredValue,
    didEdit:didEdit,
    handelInputBlur,
    handleInputChange,
    hasError:didEdit && !valueIsValid,

  }
}
