import { useState } from "react";
import React from "react";

export const TodoForm = ({addTodo}) => {
    const [val, setVal] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();

        addTodo(val);

        setVal("");
    }

    return (
        <div className="">
            <form className="TodoForm" onSubmit={handleSubmit}>
                <input type='text' className='todoinput'
                value = {val}
                onChange = {(e) => setVal(e.target.value)}
                placeholder='Enter Task'/>
                <label> </label>
                <button type='submit' className='todobtn'> create task </button>
            </form>
        </div>
    )
}