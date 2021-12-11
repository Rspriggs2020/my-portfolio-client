import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react'
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
        return(
            <Form className="todo-form" onSubmit={(event) => this.handleSubmit(event)}>
                <Form.Field>
                    <label className="todo-title">What I Plan To Work On:</label>
                    <input
                        id="title"
                        value={this.state.title}
                        onChange={(event) => this.handleChange(event)}
                    />
                </Form.Field>
                <Button type="submit" value="submit">Add</Button>
            </Form>
        )
    }
}

export default connect(null, { addTodo })(TodoForm);