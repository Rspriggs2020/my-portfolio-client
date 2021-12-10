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
//get id

export const createGoal = () => {

}

//create goal

export const deleteGoal = () => {
    
}

//delete goalwith id
