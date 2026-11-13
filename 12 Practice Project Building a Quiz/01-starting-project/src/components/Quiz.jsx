import { useState } from "react";


export default function Quiz(){
    const[activeQuestionsIndex, setActiveQuestionsIndex]=useState(0);
    const [userAnswers,setUserAnswers]=useState([]);
    return(
        <p>Currently active answers</p>
    )
}