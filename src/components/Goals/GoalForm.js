import React, { Component } from "react";
import { connect } from 'react-redux'
import { createGoal } from '../../actions/GoalActions'
import { Button } from 'semantic-ui-react';

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
            [event.target.id]: event.target.value
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
                <label className="goal-title" >Title</label>
                <br></br>
                <br></br>
                <input
                placeholder="Ex.) CLI, Sinatra, Rails"
                id="title"
                value={this.state.title}
                onChange={(event) => this.handleChange(event)}
                />
                <br></br>
                <br></br>
                <label className="goal-description">Description</label>
                <br></br>
                <br></br>
                <textarea
                placeholder="Ex.) Add More Feautures"
                id="description"
                value={this.state.description}
                onChange={this.handleChange} />
                <br>
                </br>
                <Button type="submit">Add Goal</Button>
               
            </form>
        )
    }
}

export default connect(null, { createGoal })(GoalForm);