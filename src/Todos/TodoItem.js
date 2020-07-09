import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () =>{
        return{
            backgroundColor:'#f4f4f4',
            padding:'10px',
            bottomBorder: '2px #ccc dotted',
            border: '1px solid black',
            textAlign: 'center',
            textDecoration : 
            this.props.todoItem.completed? 'line-through' : 'none'
        }
    }

  render() {
    const { id, title } = this.props.todoItem;

    return (
      <div style = {this.getStyle()}>
        <p>
            <input type = "checkbox" name = "checkbox" style = {checkBoxStyle} 
            onChange = {this.props.markComplete.bind(this, id)} />
            {title}
            <button onClick = {this.props.deleteItem.bind(this,id)} style = {btnStyle}>-</button>
        </p>
      </div>
    )
  }
}


const checkBoxStyle = {
    cursor: 'pointer',
    float: 'left',
}

const btnStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '5px, 10px',
    borderRadius: '50%',
    border: 'none',
    float: 'right',
    cursor: 'pointer',
}


TodoItem.propType = {
    todoItem: PropTypes.object.isRequired,
    markComplete: PropTypes.object.isRequired,
    deleteItem: PropTypes.object.isRequired,
  }

export default TodoItem
