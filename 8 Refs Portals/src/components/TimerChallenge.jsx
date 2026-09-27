import { useState, useRef } from "react";
import ResultModal from "./ResultModal";




export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog =useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, SetTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            SetTimerExpired(true);
            setTimerStarted(false);
            dialog.current.showModal();
        }, targetTime * 1000);
        setTimerStarted(true);
    }
    function handleStop() {
        clearTimeout(timer.current);
        setTimerStarted(false);
    }
    return (

        <>
            {/* {timerExpired && <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />} */}
            <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />
            <section className="challenge">
                <h2>{title}</h2>

                <p className="challenge-time">
                    {targetTime} Second{targetTime > 1 ? 's' : ''}
                </p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
                <p className={timerStarted ? "active" : undefined}>
                    {timerStarted ? "timer is running... " : "timer is inactive"}
                </p>
            </section>
        </>

    )
}