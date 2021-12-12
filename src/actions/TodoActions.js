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
        fetch(`/http://localhost:3000/goals/${goal.id}/todos`, data)  //fetch request route, data
        .then(res = res.json())
        .then(todo => {
            let result = {todo, goal}
            dispatch({
                type: 'CREATE_TODOS',
                payload: result
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
        fetch(`/http://localhost:3000/goals/${goal.id}/todos/${todo.id}`)  //fetch request route, data
        .then(res = res.json())
        .then(todo => {
            let result = {todo, goal}
            dispatch({
                type: 'DELETE_TODOS',
                payload: result
            })
        })
    }

}

