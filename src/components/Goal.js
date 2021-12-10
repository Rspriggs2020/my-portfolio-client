import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteGoal } from '../actions/GoalActions'

class Goal extends Component {

    handleClick() {
        this.props.deleteGoal(this.props.goal.id)
    }

    render() {

        const { goal}  = this.props
        return (
            <div>
                <h1>Goal: {goal.title}</h1>
                <br>
                </br>
                Description: {goal.description}
                <br>
                </br>
                <Button onClick={ () => this.handleClick() }>Delete Goal</Button>
            </div>

        )

    }
}

export default connect(null, { deleteGoal})(Goal);