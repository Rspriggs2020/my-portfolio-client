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
            <div>
                <TodoForm goal={this.props.goal} />
                <h1>What I plan To Do:</h1>
                <TodoDisplay
                key={this.props.goal.id}
                todos={this.props.goal.todos}
                deleteTodo={this.props.deleteTodo}
                goal={this.props.goal}
                />
            </div>
        )
    }
}

export default connect(null, { deleteTodo, fetchGoalId })(TodoContainer);