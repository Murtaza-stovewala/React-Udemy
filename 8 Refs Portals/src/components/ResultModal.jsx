import {useImperativeHandle, useRef} from 'react';

export default function ResultModal({ref,onReset,targetTime,remainingTime}){
    const dialog=useRef();
    const userLost= remainingTime<=0;
    const formattedRemainingTime=(remainingTime/1000).toFixed(2);
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        };
    });

    return(
        <dialog ref={dialog} className="result-modal" >
           {userLost ? <h2>You Lost</h2> : <h2>{`You Won by ${formattedRemainingTime} Seconds`}</h2> }
            <p>Target Time <strong>{targetTime} Seconds.</strong></p>
           { userLost ?  <p>Auto Stopped at <strong>0 Seconds</strong></p> : <p>You stopped timer with <strong>{`${formattedRemainingTime} second left`}</strong></p>}
            <form method="dialog" onSubmit={onReset}>
                <button >Close</button>
            </form>
        </dialog>
    )
}