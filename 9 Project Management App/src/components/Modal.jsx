import { createPortal } from "react-dom";
import { useImperativeHandle,useRef } from "react";
export default function Modal({children,ref,...props}){
const dialog=useRef();
    useImperativeHandle(ref,()=>{
        return {open(){
            dialog.current.showModal();
        }}
    })

    return createPortal(
    <dialog  ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" >
        {children}
    </dialog>,document.getElementById('modal-root'))
}