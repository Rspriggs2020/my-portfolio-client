//add toto

export const createTodo = (todo, goal ) => {
    let data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }
    return dispatch => {
        fetch("http://localhost:3000/goals/id/todos", data)  //fetch request route, data
        .then(response = response.json())
        .then(todo => {
            let res = {todo, goal}
            dispatch({
                type: 'CREATE_TODO',
                payload: res
            })
        })
    }

}

//delete todo

export const deleteTodo = ( todo, goal) => {
    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }
    return dispatch => {
        fetch("http://localhost:3000/goals/id/todos")  //fetch request route, data
        .then(response = response.json())
        .then(todo => {
            let res = {todo, goal}
            dispatch({
                type: 'DELETE_TODO',
                payload: res
            })
        })
    }

}

