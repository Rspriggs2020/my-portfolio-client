export const fetchGoals = () => {
    console.log("c")
    return dispatch => {
        fetch("http://localhost:3000/goals") 
        .then(res => {
            console.log("e")
           return res.json()
        })
        .then(goals => dispatch({
            type: 'FETCH_GOALS',
            payload: goals
        }))
    }
console.log("d")
}

export const fetchGoalId = id => {
    return dispatch => {
        fetch(`http://localhost:3000/goals/${id}`) 
        .then(res => res.json())
        .then(goal => dispatch({
            type: 'FETCH_GOAL',
            payload: goal
        }))
    }
}

export const createGoal = (goalInput) => { 
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

export const deleteGoal = (id) => { 
    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }   
    }
    return dispatch => {
        fetch(`http://localhost:3000/goals/${id}`, data)
        .then(res => res.json())
        .then(goal => dispatch({
            type: 'DELETE_GOAL',
            payload: goal
        }))
    }
}


