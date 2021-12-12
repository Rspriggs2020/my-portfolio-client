import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteGoal } from '../../actions/GoalActions'
import { Button } from 'react-bootstrap';
import { Card } from 'react-mdl';
import TodoContainer from '../../containers/TodoContainer'
//display goal.id

class Goal extends Component {

    handleClick() {
        this.props.deleteGoal(this.props.goal.id)
    }

    render() {
        const { goal }  = this.props
        return (
            <div className='goals'>
        
                <h1>Goal: {goal.title}</h1>
                <br>
                </br>
                <h2>Description: {goal.description}</h2>
                <br>
                </br>
                <Button onClick={ () => this.handleClick() }>Delete Goal</Button>
                
                <TodoContainer goal={goal} />
                
            </div>
        )

    }
}

export default connect(null, { deleteGoal })(Goal);