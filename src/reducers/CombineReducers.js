import { combineReducers } from "redux";
import goalTodoReducer from "./GoalTodoReducer";

const mainReducer = combineReducers ({
    goalTodoReducer
})

export default mainReducer;