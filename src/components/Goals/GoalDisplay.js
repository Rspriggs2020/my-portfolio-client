import React, { Component } from 'react';
import Goal from './Goal'
//display goal list
class GoalDisplay extends Component {
    render() {

        const { goals } = this.props

        const goalIndex = goals.map(goal => {
            return (
                <Goal key={goal.id} goal={goal} />
            )
        })

        return (
            <li>
                <h1 className="goal-list">Goals:</h1>
                {goalIndex}
            </li>
        )

    }
}

export default GoalDisplay;