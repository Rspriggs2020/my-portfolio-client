import React, { Component } from "react";
import { connect } from 'react-redux';
import Goal from '../components/Goals/Goal'
import GoalForm from '../components/Goals/GoalForm'
import { getGoals } from '../actions/GoalActions'


class GoalContainer extends Component {

    componentDidMount(){
        this.props.getGoals()
    }

    render(){
        return (
            <div>
            <GoalForm />
            <Goal goals={this.props.goal} />
            </div>
           
        )
    }
}

mapStateToProps = (state) => {
    return ({
        goals: state.goalreducers.goals
    })
}

export default connect(mapStateToProps, { getGoals })(GoalContainer);