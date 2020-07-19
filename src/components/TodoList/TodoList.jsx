import React from "react";
import {Button, ListGroup} from "react-bootstrap"
import {TodoItem} from "../TodoItem";

export const TodoList = ({todos, removeTodo, clearAllTodos}) => {

    const renderList = () => {
        if (todos.length === 0) {
            return (
                <div className="w-100 d-flex justify-content-center align-items-center">
                    <span>{"No Todos"}</span>
                </div>
            )
        }
        return (
            <div className="border-primary border p-2">
                <Button className="mb-3" variant="danger" onClick={clearAllTodos}>{"clear"}</Button>
                <ListGroup>
                    {todos.map((value, index) => (<TodoItem title={value.title}
                                                            id={value.id}
                                                            index={index}
                                                            removeTodo={removeTodo}
                    />))}
                </ListGroup>
            </div>
        )
    }

    return (
        <div className={"w-100 p-5"}>
            {renderList()}
        </div>
    )
}