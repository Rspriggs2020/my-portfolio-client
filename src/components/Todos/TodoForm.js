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

    handleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo({title: this.state.title}, this.props.goal)
        this.setState({
            title: ''
        })
    }

    render() {

    }
}

export default connect(null, { addTodo })(TodoForm);