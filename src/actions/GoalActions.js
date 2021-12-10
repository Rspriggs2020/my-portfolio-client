export const getGoals = () => {
    return(dispatch) => {
        dispatch({ type: 'GET_GOALS'})
        return fetch('/api/goals')    ///--> /api/goals?
        .then(res => res.json())
        .then(goals => dispatch({
            type: 'FETCH_GOALS',
            payload: goals
        }))
    }

}
//get goal

export const getGoalId = id => {
    return(dispatch) => {
        dispatch({ type: 'GET_GOALS'})
        return fetch(`/api/goals/${id}`) ///-->`/api/goals/${id}
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
        fetch('/api/goals', data)
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
        fetch(`/api/goals/${goal_id}`, data)
        .then(res => res.json())
        .then(goal => dispatch({
            type: 'DELETE_GOAL',
            payload: goal
        }))
    }
}

//delete goalwith id
