import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteGoal } from '../../actions/GoalActions'
import { Button } from 'react-bootstrap';
import { Card, Grid } from 'react-mdl';
import TodoContainer from '../../containers/TodoContainer'
//display goal.id
class Goal extends Component {

    handleClick() {
        this.props.deleteGoal(this.props.goal.id)
    }

    render() {
        const { goal }  = this.props
        return (
            <Card>
                <Card.Content>
                <h1>Goal: {goal.title}</h1>
                <br>
                    Description: {goal.description}
                </br>
                <Button onClick={ () => this.handleClick() }>Delete Goal</Button>
                </Card.Content>
                <br>
                </br>
                <Card.Content extra>
                    <TodoContainer goal={goal} />
                </Card.Content>
            </Card>
        )

    }
}

export default connect(null, { deleteGoal })(Goal);