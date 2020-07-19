import React from "react";
import {Button, ListGroup} from "react-bootstrap"

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
                    {todos.map((value, index) => (
                        <ListGroup.Item key={`${value}-${index}`}>
                            <div className="d-flex flex-row justify-content-between">
                                <span>{`${index+1}. ${value}`}</span>
                                <Button onClick={() => removeTodo(index)}>Delete</Button>
                            </div>
                        </ListGroup.Item>
                    ))}
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