import {useImperativeHandle, useRef} from 'react';
import { createPortal } from 'react-dom';

export default function ResultModal({ref,onReset,targetTime,remainingTime}){
    const dialog=useRef();
    const userLost= remainingTime<=0;
    const formattedRemainingTime=(remainingTime/1000).toFixed(2);
    const score= Math.round((1-  remainingTime/(targetTime*1000))*100);
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal" >
           {userLost ? <h2>You Lost</h2> : <h2>{`You Won & Scored: ${score}`}</h2> }
            <p>Target Time <strong>{targetTime} Seconds.</strong></p>
           { userLost ?  <p>Auto Stopped at <strong>0 Seconds</strong></p> : <p>You stopped timer within <strong>{`${formattedRemainingTime} seconds left`}</strong></p>}
            <form method="dialog" onSubmit={onReset} onClose={onReset}>
                <button >Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    )
}