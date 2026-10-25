import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project doesn't have any task yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ol className="p-4 mt-8 rounded-md bg-stone-100 ">
            {tasks.map((task,index)=><li key={task.id}className="flex justify-between my-4 rounded-xl h-8 px-6 border-stone-300 border-b-2">
                 <span className="mr-2">{index + 1}.</span>
               <span> {task.text}</span>
               <button className="text-stone-700 hover:text-red-500" onClick={()=>onDelete(task.id)}>Clear</button>
            </li>)}
        </ol>
      )}
    </section>
  );
}
