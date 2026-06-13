import { useState } from "react";
import UserInput from "./component/UserInput";
import Header from "./component/Header";
import Result from "./component/Result";
const labels = ["Initial Investment", "Annual Investment", "Expected Return", "Duration"];


function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })
    const inputIsValid=userInput.duration>=1;
    function handleChange(inputIdentifier, newValue) {
      console.log(inputIdentifier, newValue, typeof newValue);
        setUserInput((prevInputValue) => {
            return {
                ...prevInputValue,
                [inputIdentifier]: Number(newValue),
            };
        });
    }
  return (
    <>
    <Header></Header>
    <UserInput userinfo={userInput} update={handleChange}></UserInput>
    
    {!inputIsValid 
     ?<p className="center">Enter Valid Input</p>  
     :<Result userinfo={userInput}></Result>}
    </>
  )
}

export default App
