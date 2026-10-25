import { useRef, useState } from 'react';
import Input from './Input.jsx';
import Modal from './Modal.jsx';
import Button from './Button.jsx';

export default function ShowProject({ project, isSaved, isDelete }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const [isEdit, setIsEdit] = useState(false);
    function handleEdit() {
        setIsEdit(prevedit => !prevedit);
    }

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }
        handleEdit();
        isSaved({
            id: project.id,
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }
    function handleDelete() {
        modal.current.open();
    }
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    let content;
    if (isEdit) {
        content = <div>
            <Input type="text" ref={title} label="Title" defaultValue={project.title} />
            <Input ref={description} label="Description" textarea defaultValue={project.description} />
            <Input type="date" ref={dueDate} label="Due Date" defaultValue={project.dueDate} />
        </div>
    }
    else {
        content = <div className="flex flex-col gap-4">
            <header className="pb-4 border-b-2 border-stone-300">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <p className="text-stone-400 text-sm">{project.dueDate}</p>
            </header>
            <p className="text-stone-600 whitespace-pre-wrap leading-relaxed capitalize">
                {project.description}
            </p>
        </div>
    }

    return (
        <>
            <Modal ref={modal}>
                {isEdit ?
                    <>
                        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                        <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
                        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
                        <form method="dialog" className="mt-4 text-right">
                            <button className="px-4 py-2 bg-stone-700 text-stone-200 hover:bg-stone-800 rounded-md">
                                Close
                            </button>
                            {/* <Button>Close</Button> */}
                        </form>
                    </>
                    :
                    <>
                        <h2 className="text-xl font-bold text-stone-700 my-4">Delete the project</h2>
                        <p className="text-stone-600 mb-4">Are you sure.You have to Delete the selected project.</p>
                        <p className="text-stone-600 mb-4">This action is irreversible.</p>
                        <form method="dialog" className="mt-4 text-right">
                            <button className="px-4 py-2 text-stone-600 hover:text-stone-900 rounded-md">
                                Cancel
                            </button>
                            <button onClick={isDelete}  className="px-4 py-2 bg-red-600 text-stone-50 hover:bg-red-700 rounded-md">
                                Delete
                            </button>
                            {/* <Button>Close</Button> */}
                        </form>
                    </>
                }
            </Modal>

            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={handleEdit}>
                            {isEdit ? 'Cancel' : 'Edit'}
                        </button>
                    </li>
                    <li>
                        <button onClick={isEdit ? handleSave : ()=>modal.current.open()}
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                            {isEdit ? 'Save' : 'Delete'}
                        </button>
                    </li>
                </menu>
                {content}
            </div>
        </>
    );
}