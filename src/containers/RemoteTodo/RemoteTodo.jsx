import {Header} from "../../components/Header";
import {AddTodo} from "../../components/AddTodo/AddTodo";
import {TodoList} from "../../components/TodoList";
import React from "react";
import {Spinner} from "react-bootstrap";
import {addTodo, clearAll, disableSearch, removeTodo, searchTodo} from "../Dashboard/actions";
import {connect} from "react-redux";
import {getTodos} from "./reducers";

const ProgressContainer = () => (
    <div className="w-100 p-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant={"primary"} />
    </div>
)
export const RemoteTodoContainer = (props) => {
    React.useEffect(() =>
    {
        props.fetchTodo()
    }, [props.fetchTodo])

    return (
        <div>
            <Header disableSearch={props.disableSearch} searchTodo={props.searchTodo}/>
            <AddTodo addTodo={props.addTodo}/>
            {props.loading ? <ProgressContainer/> :  <TodoList clearAllTodos={props.clearAllTodos}
                                                               removeTodo={props.removeTodo}
                                                               todos={props.todos}/>}

        </div>
    )
}
const mapStates = ({remoteTodo}) => {
    return {
        todos: remoteTodo.responseBody,
        loading: remoteTodo.loading
    }
}

const mapDispatches = (dispatch) => ({
    addTodo: (text) => dispatch(addTodo(text)),
    searchTodo: text => dispatch(searchTodo(text)),
    disableSearch: () => dispatch(disableSearch()),
    removeTodo: (index) => dispatch(removeTodo(index)),
    clearAllTodos: () => dispatch(clearAll()),
    fetchTodo: () => dispatch(getTodos()),
})

export const RemoteTodo = connect(mapStates, mapDispatches)(RemoteTodoContainer)