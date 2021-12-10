export default function goalReducer(state = {
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

        default:
        return state;
    } 
}

//action switch case
//get, fetch, create, delete