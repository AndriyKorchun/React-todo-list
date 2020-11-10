import React from 'react';
import './todo-footer.styles.scss';

const ToDoFooter = ({counter}) => (
 
    <footer>
      <div className="footer">{`Todos: ${counter}`}</div>
    </footer>
);

export default ToDoFooter;