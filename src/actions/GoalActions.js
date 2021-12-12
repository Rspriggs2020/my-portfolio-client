export const fetchGoals = () => {
    return dispatch => {
        fetch('http://localhost:3000/goals')    ///--> /api/goals?
        .then(res => res.json())
        .then(goals => dispatch({
            type: 'FETCH_GOALS',
            payload: goals
        }))
    }

}

//get goal

export const fetchGoalId = id => {
    return dispatch => {
        fetch(`http://localhost:3000/goals/${id}`) ///-->`/api/goals/${id}
        .then(res => res.json())
        .then(goal => dispatch({
            type: 'FETCH_GOAL',
            payload: goal
        }))
    }
}
//get id

export const createGoal = (goalInput) => {  //post 
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(goalInput)
    }
    return dispatch => {
        fetch('http://localhost:3000/goals', data)
        .then(res => res.json())
        .then(goal => dispatch({
            type: 'CREATE_GOAL',
            payload: goal
        }))
    }
}

//create goal

export const deleteGoal = (goal_id) => { //destroy
    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }   
    }
    return dispatch => {
        fetch(`http://localhost:3000/goals/${goal_id}`, data)
        .then(res => res.json())
        .then(goal => dispatch({
            type: 'DELETE_GOAL',
            payload: goal
        }))
    }
}

//delete goalwith id
