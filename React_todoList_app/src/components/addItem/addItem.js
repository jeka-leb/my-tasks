import React, { Component } from 'react';
import './addItem.css';

export default class AddItem extends Component {

    state = {
      label: ''
  }
    onLabelChange = (e) => {
        console.log(e.target.value)
        this.setState({
            label: e.target.value
        });
  }
  
   onLabelSubmit = (e) => {
       e.preventDefault();
       this.props.onAdd(this.state.label) 
       this.setState({
           label: ''
       })
       
   }
  render () {
        return (
        <form className="addItem d-flex"
              onSubmit={this.onLabelSubmit}>
          <input className="form-control"
                 type="text"
                 placeholder="Please, add new task"
                 onChange={this.onLabelChange} 
                 value={this.state.label}
                 />
          <button 
          className="btn btn-light btn-outline-secondary"
          >
            Add Item
          </button>   
        </form>
    ) 
  }
}