import {Button} from "react-bootstrap"
import React from "react";

export const AddTodo = ({addTodo}) => {
    const [text, setText] = React.useState("")

    const changeText = event => {
        setText(event.target.value)
    }

    const addTodoToList = () => {
        addTodo(text)
        setText("")
    }


    return (
        <div className="p-5">
            <div className="form-group">
                <label className="form-check-label">{"Add Todo"}</label>
                <input value={text} className="form-control" placeholder="Enter A Todo" onChange={changeText} />
            </div>
            <Button onClick={addTodoToList}
                    disabled={text.length === 0}>Add</Button>
        </div>
)
}