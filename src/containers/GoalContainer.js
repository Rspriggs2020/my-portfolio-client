import React, { Component } from "react";
import { connect } from 'react-redux';
import Goal from '../components/Goals/Goal'
import GoalForm from '../components/Goals/GoalForm'
import { fetchGoals } from '../actions/GoalActions'


class GoalContainer extends Component {

    componentDidMount(){
        this.props.fetchGoals()
    }

    render(){
        return (
            <div>
            <GoalForm />
            <Goal goal={this.props.goal} />
            </div>
           
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        goal: state.goalTodoReducers.goal
    })
}

export default connect(mapStateToProps, { fetchGoals })(GoalContainer);