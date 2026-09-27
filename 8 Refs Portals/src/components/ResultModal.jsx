import {useImperativeHandle, useRef} from 'react';

export default function ResultModal({ref,result,targetTime}){
    const dialog=useRef();

    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        };
    });

    return(
        <dialog ref={dialog} className="result-modal" >
            <h2>You {result}</h2>
            <p>Target Time <strong>{targetTime} Seconds.</strong></p>
            <p>You stopped timer with <strong>X second left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}