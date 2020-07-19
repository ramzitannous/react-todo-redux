import React from "react";
import {Nav, Navbar} from "react-bootstrap"
import "./Styles.css"
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export const Header = ({disableSearch, searchTodo}) => {
    const [text, setText] = React.useState("")


    React.useEffect(() => {
        if (text.length === 0) {
            disableSearch()
        }
    }, [text, disableSearch])

    const onChangeTodo = (event) => {
        setText(event.target.value)

    }

    return (
        <>
            <Navbar bg="light" >
                <Navbar.Brand href="#home">
                    <img
                        src="/logo512.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Brand>{"Todo APP"}</Navbar.Brand>

                <Nav>
                    <Nav.Link to={"/dashboard"}>Dashboard</Nav.Link>
                    <Nav.Link to={"/remote"}>Remote</Nav.Link>
                </Nav>


                <div className="flex-row d-flex ml-auto">
                    <input placeholder={"Search Todo"}
                           onSubmit={() => searchTodo(text)}
                           onChange={onChangeTodo}
                           value={text}
                           className={"searchInput form-control"}/>

                    <Button
                        className={"searchBtn"}
                        onClick={() => searchTodo(text)}
                        disabled={text.length === 0}
                    >
                        {"Search"}
                    </Button>
                </div>
            </Navbar>
        </>
    )
}