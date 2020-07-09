import React, { Component } from 'react';
import './App.css';
import Todos from './Todos/Todos';
import AddNewItem from './Todos/AddNewItem';
import LoadDate from './Todos/LoadDate';


class App extends Component{
  state = {
    todos:[
      {
        id:Math.floor((Math.random() * 500) + 1),
        title: "Finish Computer Science Homework",
        completed:false
      },
      {
        id:Math.floor((Math.random() * 500) + 1),
        title: "Email Professor Glazer",
        completed:false
      },
      {
        id:Math.floor((Math.random() * 500) + 1),
        title: "Cook dinner for tonight",
        completed:false
      }
    ]
  }

  //toggle the check box to mark complete or in complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map ( todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }
  
  //delet that item from the state
  deleteItem = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addNewItem = (title) =>{
    const newTodo = {
      id: Math.floor((Math.random() * 500) + 1),
      title:title,
      completed:false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });

  }
  
  
  render(){
    return ( 
      <div className="App">
          <h1 style = {headingStyle} >Task Manager</h1>
          <div style = {date}>
            Date:    
            <LoadDate/>
          </div>
          <AddNewItem addNewItem = {this.addNewItem}/>            
          <Todos 
          todos = {this.state.todos}
          markComplete = {this.markComplete}
          deleteItem = {this.deleteItem}
          />
      </div>
    );
    
  }
}

const date = {
  display: 'inline',
  font: '30px solid',
  fontFamily: 'Monospace'
}

const headingStyle = {
  backgroundColor: 'black',
  color: 'white',
  height: '60px', 
  padding: '10px',
  textAlign: 'center',
  marginTop: '0px',
  marginBotton:'5px',
}
export default App;