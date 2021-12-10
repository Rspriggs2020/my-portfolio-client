export const getGoals = () => {
    return(dispatch) => {
        dispatch({ type: 'GET_GOALS'})
        return fetch()    ///--> /api/goals?
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
        return fetch() ///-->`/api/goals/${id}
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

export const deleteGoal = () => { //destroy
    
}

//delete goalwith id
