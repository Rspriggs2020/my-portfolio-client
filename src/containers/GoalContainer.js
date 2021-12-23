import React, { Component } from "react";
import { connect } from 'react-redux';
import GoalDisplay from "../components/Goals/GoalDisplay";
import GoalForm from '../components/Goals/GoalForm'
import { fetchGoals } from '../actions/GoalActions'


class GoalContainer extends Component {

    componentDidMount(){
        console.log("a")
        this.props.fetchGoals()
        console.log("b")
    }

    render(){
        return (
            <div>
                <GoalForm />
                <br></br>
                <GoalDisplay goals={this.props.goals} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        goals: state.goalTodoReducer.goals
    })
}

export default connect(mapStateToProps, { fetchGoals })(GoalContainer);