import { useState } from "react";
import UserInput from "./component/UserInput";
import Header from "./component/Header";
const labels = ["Initial Investment", "Annual Investment", "Expected Return", "Duration"];


function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })
    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevInputValue) => {
            return {
                ...prevInputValue,
                [inputIdentifier]: newValue,
            };
        });
    }
  return (
    <>
    <Header></Header>
    <UserInput userInput={userInput} onchange={handleChange}></UserInput>
    </>
  )
}

export default App
