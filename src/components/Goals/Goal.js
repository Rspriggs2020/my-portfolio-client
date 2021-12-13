import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteGoal } from '../../actions/GoalActions'
import { Button } from 'react-bootstrap';
import TodoContainer from '../../containers/TodoContainer'

class Goal extends Component {

    handleClick() {
        this.props.deleteGoal(this.props.goal.id)
    }

    render() {
        const { goal }  = this.props
        return (
            <div className='goals'>
                Goal: {goal.title}
                <br></br>
                <br></br>
                Description: {goal.description}
                <br></br>
                <br></br>
                <Button onClick={ () => this.handleClick() }>Delete Goal</Button>
                <br></br>
                <br></br>
                <TodoContainer goal={goal} />
                
            </div>
        )

    }
}

export default connect(null, { deleteGoal })(Goal);