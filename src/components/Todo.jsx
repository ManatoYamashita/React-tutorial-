import React from 'react';

const Todo = ({ todo, toggleTodo }) => {

    const hanndleTodoClick = () => {
        toggleTodo (todo.id);
    }

    return (
        <div>
            <label>
            <input 
                type="checkbox"
                checked={ todo.completed } 
                readOnly 
                onChange={hanndleTodoClick} 
            />
            </label>
            <small>{ todo.id }</small>
            <p>{ todo.name }</p>
        </div>
    );
};

export default Todo;