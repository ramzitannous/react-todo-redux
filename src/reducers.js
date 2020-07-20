import {combineReducers} from "redux";
import {localTodoReducer} from "./containers/Dashboard/reducers";
import {remoteTodoReducer} from "./containers/RemoteTodo/reducers";
import {loginReducer} from "./containers/Login/reducers";

const RootReducer = combineReducers({
    localTodo: localTodoReducer,
    remoteTodo: remoteTodoReducer,
    login: loginReducer
})

export default RootReducer;