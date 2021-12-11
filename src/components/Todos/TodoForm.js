import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/TodoActions'

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = () => {

    }

    handleSubmit = () => {

    }
    
    render() {

    }
}

export default TodoForm;