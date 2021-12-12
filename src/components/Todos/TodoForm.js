import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react'
import { createTodo } from '../../actions/TodoActions'

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            project_title: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            project_title: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createTodo({project_title: this.state.project_title}, this.props.goal)
        this.setState({
            project_title: ''
        })
    }

    render() {
        return(
            <Form className="todo-form" onSubmit={(event) => this.handleSubmit(event)}>
                <Form.Field>
                    <label className="todo-title">Future Plans:</label>
                    <br></br>
                    <br></br>
                    <input
                        placeholder="Ex.) Expand, Redesign."
                        id="project_title"
                        value={this.state.project_title}
                        onChange={(event) => this.handleChange(event)}
                    />
                </Form.Field>
                <br></br>
                <Button type="submit" value="submit">Add</Button>
            </Form>
        )
    }
}

export default connect(null, { createTodo })(TodoForm);