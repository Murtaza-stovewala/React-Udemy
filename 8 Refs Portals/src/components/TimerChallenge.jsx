import { useState, useRef } from "react";
import ResultModal from "./ResultModal";




export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog =useRef();
    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, SetTimerExpired] = useState(false);
    const [timeRemaining,setTimeRemaining]=useState(targetTime*1000);
    const timerIsActive=timeRemaining>0 && timeRemaining<targetTime*1000;
    if(timeRemaining<=0){
    //    clearInterval(timer.current);
    //     dialog.current.open();  
    handleStop();
    }
    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }
    function handleStart() {
        // setTimeRemaining(targetTime*1000);
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining =>prevTimeRemaining-10);
            // SetTimerExpired(true);
            // setTimerStarted(false);
            // // dialog.current.showModal();
            // dialog.current.open();
        }, 10);
        // setTimerStarted(true);
    }
    function handleStop() {
        clearInterval(timer.current);
        // setTimerStarted(false);
        // setTimeRemaining(targetTime*1000);
        dialog.current.open();

        
    }
    return (

        <>
            {/* {timerExpired && <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />} */}
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>

                <p className="challenge-time">
                    {targetTime} Second{targetTime > 1 ? 's' : ''}
                </p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "timer is running... " : "timer is inactive"}
                </p>
            </section>
        </>

    )
}