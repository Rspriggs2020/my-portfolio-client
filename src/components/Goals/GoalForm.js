import React, { Component } from "react";
import { connect } from 'react-redux'
import { createGoal } from '../../actions/GoalActions'

//goal input form
class GoalForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = event => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createGoal(this.state)
        this.setState({
            title: '',
            description: ''
        })
        
    }

    render(){
        return (
            <form className="new-goal" onSubmit={this.handleSubmit}>
                <label className="goal-title">Title</label>
                <input
                id="title"
                value={this.state.title}
                onChange={(event) => this.handleChange(event)}
                />
                <br>
                </br>
                <label className="goal-description">Description</label>
                <textarea
                id="description"
                value={this.state.description}
                onChange={this.handleChange} 
                />
            </form>
        )
    }
}

export default connect(null, { createGoal })(GoalForm);