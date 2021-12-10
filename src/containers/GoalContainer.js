import React, { Component } from "react";
import { connect } from 'react-redux';
import Goal from '../components/Goal'
import GoalForm from '../components/GoalForm'
import { getGoals } from '../actions/GoalActions'


class GoalContainer extends Component {

    componentDidMount(){
        this.props.getGoals()
    }

    render(){

    }
}

mapStateToProps = (state) => {
    
}

export default GoalContainer;