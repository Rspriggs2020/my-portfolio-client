import React, { Component } from "react";

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
    }

    render(){
        return (
            <from>
                
            </from>
        )

    }
}

export default GoalForm;