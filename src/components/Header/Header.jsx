import React from "react";
import {Nav, Navbar} from "react-bootstrap"
import "./Styles.css"
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LOGIN_ACTIONS} from "../../containers/Login/actions";
import { useHistory } from "react-router-dom"

export const Header = ({disableSearch, searchTodo}) => {
    const [text, setText] = React.useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    React.useEffect(() => {
        if (text.length === 0) {
            disableSearch()
        }
    }, [text, disableSearch])

    const onChangeTodo = (event) => {
        setText(event.target.value)

    }

    const logOut = () => {
        dispatch({type: LOGIN_ACTIONS.LOGOUT})
        localStorage.clear()
        history.replace("/login")
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
                    <Nav.Link>
                        <Link to={"/dashboard"}>Dashboard</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/remote"}>Remote</Link>
                    </Nav.Link>
                </Nav>


                <div className="flex-row d-flex ml-auto">
                    <input placeholder={"Search Todo"}
                           onSubmit={() => searchTodo(text)}
                           onChange={onChangeTodo}
                           value={text}
                           className={"searchInput form-control"}/>

                    <Button
                        onClick={() => searchTodo(text)}
                        disabled={text.length === 0}
                    >
                        {"Search"}
                    </Button>

                    <Button
                        className="ml-3"
                        onClick={logOut}
                    >
                        {"LogOut"}
                    </Button>
                </div>
            </Navbar>
        </>
    )
}