import React from 'react';
import TodoListitem from '../todoListItem';
import './todoList.css';


const TodoList = ({ todos, onDelete,
    onToggleImportant, onToggleDone }) => {
        const result = todos.map((item) => {
            const {id, ...other} = item;
        return (
        <li key={id} className="list-group-item ">
             < TodoListitem {...other}
             onDelete={ () => onDelete(id) }
             onToggleDone={ () => onToggleDone (id)}
             onToggleImportant={ () => onToggleImportant (id)}
             />
        </li>
    );
    });
    console.log(result);
    return (
        <ul className="list-item todo-list">    
          {result}
       </ul> 
    );
}; 

export default TodoList;