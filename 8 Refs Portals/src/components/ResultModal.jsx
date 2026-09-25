

export default function ResultModal({result,targetTime}){
    return(
        <dialog className="result-modal" open>
            <h2>You {result}</h2>
            <p>Target Time <strong>{targetTime} Seconds.</strong></p>
            <p>You stopped timer with <strong>X second left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}