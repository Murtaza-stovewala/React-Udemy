import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef();
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === '') {
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-center text-stone-700 my-4">Task Not Entered!</h2>
        <p className="text-stone-600 text-center mb-4">
          Oops... looks like you forgot to enter a Task.
        </p>
        <p className="text-stone-600 text-center mb-4">
          Please make sure you entered a Task.
        </p>
        <form method="dialog" className="mt-4 text-right">
          <button className="px-4 py-2 bg-stone-700 text-stone-200 hover:bg-stone-800 rounded-md">
            Close
          </button>
        </form>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          type="text"
          value={enteredTask}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
