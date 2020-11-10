import React from 'react';

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className="todo-list">
      {
        todos.map(({ id, text }) =>
         <li key={id} className="todo-item">
         <span >{text}</span> 
         <button className="btn btn-delete" onClick={() => onDelete(id)}>Delete</button>
          </li>
        )
      }
    </ul>
  );
};
export default TodoList;
