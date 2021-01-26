import React, {Component} from 'react';
import './todoListItem.css';


export default class TodoListitem extends Component {   

  render() {
    const {label, onDelete,
           onToggleImportant, onToggleDone,
           done, important} = this.props;
    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }
    return (
      <span  className={classNames}>
        <span   
              className="todo-list-item-label" 
              onClick={onToggleDone}
        >
      { label } 
        </span>
      <span>
    <button type="button" 
            className="btn btn-outline-success btn-sm float-right"
            onClick={onToggleImportant}
            >
        <i className="fa fa-exclamation " aria-hidden="true"> </i>
    </button>    
    <button type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDelete}
            >
        <i className="fa fa-trash-o" aria-hidden="true"> </i>
    </button>  
      </span>
      </span>
    );
  }
}
