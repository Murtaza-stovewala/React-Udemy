import { useState } from "react";




export default function TimerChallenge({ title, targetTime }) {
    const[timerStarted,setTimerStarted]=useState(false);

    const[timerExpired, SetTimerExpired]= useState(false);

    function handleStart() {
        setTimeout(() => {
            SetTimerExpired(true);
         }, targetTime*1000);
         setTimerStarted(true);
    }
    function handleStop(){
        
    }
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost</p>}
            <p className="challenge-time">
                {targetTime} Second{targetTime > 1 ? 's' : ''}
            </p>
            <button onClick={handleStart}>
                {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
            <p className={timerStarted? "active" :undefined}>
                {timerStarted ? "timer is running... ": "timer is inactive"}
            </p>
        </section>
    )
}