import {Button, ListGroup} from "react-bootstrap";
import React from "react";

export const TodoItem = ({title, id, removeTodo, index}) => {
    return (
        <ListGroup.Item key={`${title}-${id}`}>
            <div className="d-flex flex-row justify-content-between">
                <span>{`${id + 1}. ${title}`}</span>
                <Button onClick={() => removeTodo(index)}>Delete</Button>
            </div>
        </ListGroup.Item>
    )
}