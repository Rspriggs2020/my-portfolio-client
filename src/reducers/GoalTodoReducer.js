let goalTodo
export default function goalTodoReducer(state = {
    goals: [],
}, action) {
    switch(action.type){
        case 'CREATE_GOAL':
            return {...state, goals:[...state.goals, action.payload]}
        case 'GET_GOALS':
            return {...state, loading: true}
        case 'FETCH_GOALS':
            return {...state, loading: false, goals: action.payload}
        case 'DELETE_GOAL':
            return{...state, loading: false, goals: state.goals.filter(goal => goal.id !== action.payload.id)}
        case 'FETCH_TODOS':
            return {...state, todos: action.payload.todos}
        case 'CREATE_TODOS':
            goalTodo = {...action.payload.goal, todos: [...action.payload.goal.todos, action.payload.todo]}
            return {...state, 
                goals: [...state.goals.filter(x => x.id !== action.payload.goal.id).concat(goalTodo)]}
        case 'DELETE_TODOS':
            goalTodo = {...action.payload.goal, todos: action.payload.goal.todos.filter(i => i.id !== action.payload.todo.id)}
            return {...state, 
                goals: [...state.goals.filter(x => x.id !== action.payload.goal.id).concat(goalTodo)]}

        default:
        return state;
    } 
}

//action switch case
//get, fetch, create, delete