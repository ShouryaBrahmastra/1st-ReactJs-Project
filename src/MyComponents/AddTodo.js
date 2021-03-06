import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can't be blank");
        }
        else {
            addTodo(title, desc);
            setTitle();
            setDesc();
        }
    }
    return (
        <div className="container my-5 mb-3 mt-4">
            <h3>Add a new Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-5">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Add your todo title above.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-outline-success">Add Todo</button>
            </form>
        </div>
    )
}
