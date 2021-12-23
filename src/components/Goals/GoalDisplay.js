import React, { Component } from 'react';
import Goal from './Goal'

class GoalDisplay extends Component {
    render() {

        const { goals } = this.props

        const goalIndex = goals.map(goal => {
            return (
                <Goal key={goal.id} goal={goal} />
            )
        })

        return (
            <div>
                {goalIndex}
            </div>
            
        )

    }   
}

export default GoalDisplay;