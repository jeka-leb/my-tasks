import React, { Component } from 'react';
import './searchPannel.css';


export default class SearchPannel extends Component {
    
    onSearch = (e) => {
        this.props.onSearchItem(e.target.value)
    }
   
    render () {
     
      return (
        <input type="text"
              className="form-control search-input"
              placeholder="type to search"
              onChange={this.onSearch}
              />
      );
    }
};

