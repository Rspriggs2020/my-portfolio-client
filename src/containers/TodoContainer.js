import React, { Component } from "react";
import { connect } from 'react-redux';
import TodoDisplay from '../components/Todos/TodoDisplay'
import TodoForm from '../components/Todos/TodoForm'
import { fetchGoalId } from '../actions/GoalActions'
import { deleteTodo } from '../actions/TodoActions'

class TodoContainer extends Component {

    componentDidMount() {
        this.props.fetchGoalId(this.props.goal.id)
    }
    render(){
        return(
            <div>hi</div>
        )
    }
}

export default connect(null, { fetchGoalId })(TodoContainer);