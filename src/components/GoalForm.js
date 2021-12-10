import React, { Component } from "react";
import { connect } from 'react-redux'
import { createGoal } from '../actions/GoalActions'

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
            <from>

            </from>
        )

    }
}

export default connect(null, { createGoal })(GoalForm);