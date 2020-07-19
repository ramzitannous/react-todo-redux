import {combineReducers} from "redux";
import {localTodoReducer} from "./containers/Dashboard/reducers";
import {remoteTodoReducer} from "./containers/RemoteTodo/reducers";

const RootReducer = combineReducers({
    localTodo: localTodoReducer,
    remoteTodo: remoteTodoReducer
})

export default RootReducer;