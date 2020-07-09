import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component{


  render(){
      return this.props.todos.map((todoItem) => (

       <TodoItem 
       
       key = {todoItem.id} todoItem = {todoItem} 
       markComplete = {this.props.markComplete}
       deleteItem = {this.props.deleteItem}
       
       >
    

       </TodoItem>

      ));
  }
}

//Prop-Types
Todos.propType = {
  todos: PropTypes.array.isRequired
}

export default Todos;