import {Header} from "../../components/Header";
import {AddTodo} from "../../components/AddTodo/AddTodo";
import {TodoList} from "../../components/TodoList";
import React from "react";
import {addTodo, clearAll, disableSearch, removeTodo, searchTodo} from "./actions"
import {connect} from "react-redux";

const DashboardContainer = (props) => {
    return (
        <div>
            <Header disableSearch={props.disableSearch} searchTodo={props.searchTodo}
                    username={props.username}/>
            <AddTodo addTodo={props.addTodo}/>
            <TodoList clearAllTodos={props.clearAllTodos} removeTodo={props.removeTodo}
                      todos={props.todos}/>
        </div>
    )
}

const mapStates = ({localTodo, login}) => {
    return {
        todos: localTodo.searchMode ? localTodo.filteredList: localTodo.todoList,
        username: login.username
    }
}

const mapDispatches = (dispatch) => ({
    addTodo: (text) => dispatch(addTodo(text)),
    searchTodo: text => dispatch(searchTodo(text)),
    disableSearch: () => dispatch(disableSearch()),
    removeTodo: (index) => dispatch(removeTodo(index)),
    clearAllTodos: () => dispatch(clearAll())
})

export const Dashboard = connect(mapStates, mapDispatches)(DashboardContainer)