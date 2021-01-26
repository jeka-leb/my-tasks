import React, { Component } from 'react';

import AppHeader from '../appHeader';
import SearchPannel from '../searchPannel';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';
import AddItem from '../addItem';
import './app.css';

export default class App extends Component {
  constructor () {
    super();
    this.maxId = 100;

        this.createTodoItem = (label) => {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId ++
       }
     };

     this.state = {
       data: [
        this.createTodoItem ( 'Drink cofee' ),
        this.createTodoItem ( 'Develope app'),
        this.createTodoItem ('Have fun time')
       ],
       search: '',
       filter: 'all'
      };

    this.onSearchFunctionState = (search) => {
      this.setState({search})
    }
    this.onSearchFunction = (data, search) => {
        if (search.length === 0) {return data};  
           return data.filter(el => {
             return el.label
                    .toUpperCase()
                    .indexOf(search.toUpperCase()) >= 0;
            });        
    }

    this.onFilter= (filter) => {
      this.setState({filter})
    }

    this.optionFunction = (data, filter) => {
      switch (filter) {
      case 'all':
        return data;
      case 'active':
        return data.filter((el) => !el.done);
      case 'done':
        return data.filter((el) => el.done);
      default: 
        return data; 
      }
    }
    
   
    this.deleteItem = (id) => {
      this.setState (({data}) => {
        let ind = data.findIndex((el) => el.id === id);
        let newData = [
          ...data.slice(0, ind), 
          ...data.slice(ind + 1)
        ];
        return {
          data: newData
        }
      }

      );
     };

    
    this.addItem = (text) => {
     const newEl = this.createTodoItem(text);
     console.log(newEl.id);
     this.setState(({data}) => {
           
            const newData = [...data, newEl];
            return {
              data: newData
            }
          
       });
    };

    this.toggleProperty = (arr, id, property) => {
      const indx = arr.findIndex( (el) => el.id === id);
      const oldItem = arr[indx];
      const newItem = {...oldItem,
          [property]: !oldItem[property]};
      return [
          ...arr.slice(0, indx),
          newItem,
          ...arr.slice(indx + 1)
        ];
    }

    this.toggleImportant = (id) => {
      this.setState(({data}) => {
        return {
          data: this.toggleProperty(data, id, 'important')
        }
      });
    };

    this.toggleDone = (id) => {
      this.setState (({data}) => {
        
        return {
           data: this.toggleProperty(data, id, 'done')          
        }
      });
    };

  }
  render() {
    const {data, search, filter} = this.state;
    const doneCount = data.filter((el) => el.done).length;
    const todoCount = data.length - doneCount;
    const filterData = this.optionFunction(this.onSearchFunction(data, search), filter);
    
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
           <div className="top-panel d-flex">
          <SearchPannel 
          onSearchItem={this.onSearchFunctionState}/>
          <ItemStatusFilter 
          onFilterChange={this.onFilter}
          filter={filter}
          />
          </div>
        <TodoList 
        todos={filterData}
        onDelete={this.deleteItem}
        onToggleImportant={this.toggleImportant}
        onToggleDone={this.toggleDone}
         />
        <AddItem 
        onAdd={this.addItem}
        
        />
      </div>
    );
  } 
}

