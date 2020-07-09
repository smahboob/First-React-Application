import React, { Component } from 'react'

class AddNewItem extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addNewItem(this.state.title);
        this.setState({ title: " "});
    }

  render() {
    return (
        <form onSubmit = {this.onSubmit} style  = {{display: 'flex', marginTop: '10px'}}>
            <input 
                style = {textStyle} 
                type = "text"
                name = 'title'
                placeholder= "Enter new Task"
                value = {this.state.title}
                onChange = {this.onChange} >
                
            </input>
            <input 
                style = {buttonStyle} 
                type = "submit"
                value= "Submit"
                className = "btn">
            </input>

        </form>
    )
  }
}

const buttonStyle = {
    flex: '1',
    cursor: 'pointer',
    backgroundColor: '#555',
    color:  'white'
}

const textStyle = {
    flex: '10',
    padding: '10px',
}

export default AddNewItem
