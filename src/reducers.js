import {combineReducers} from "redux";
import {localTodoReducer} from "./containers/Dashboard/reducers";

const RootReducer = combineReducers({
    localTodo: localTodoReducer,
    remoteTodo: undefined
})

export default RootReducer;