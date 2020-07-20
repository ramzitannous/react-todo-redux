import {Button, Form, Toast} from "react-bootstrap"
import React from "react";
import {useDispatch} from "react-redux";
import {getLogged, LOGIN_ACTIONS, setLogged} from "./actions";
import { useHistory } from "react-router-dom"

export const Login = () => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    React.useEffect(() => {
        if(getLogged()) {
            dispatch({type: LOGIN_ACTIONS.LOGIN})
            history.replace("/dashboard")
        }
    }, [])

    const login = () => {
        if (username === "ramzi" && password === "1234") {
            setError(false)
            dispatch({type: LOGIN_ACTIONS.LOGIN})
            setLogged()
            history.replace("/dashboard")
        } else {
            setError(true)
        }
    }

    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            {
                error && <Toast style={{
                    position: "absolute",
                    bottom: 5,
                    right: 5
                }} show={error}>
               <Toast.Body>{"Wrong Credentials !"}</Toast.Body>
            </Toast>
            }

            <Form className="d-flex flex-column justify-content-center align-items-center border border-primary p-5">
                <img src="/logo192.png"/>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={username} type="username"
                                  onChange={e => setUsername(e.target.value)}
                                  placeholder="Enter Username" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control  value={password} type="password"
                                   onChange={e => setPassword(e.target.value)}
                                   onSubmit={login}
                                   placeholder="Enter Password" />
                </Form.Group>

                <Button variant="primary"
                        disabled={!username.length > 0 || !password.length > 0}
                        onClick={login}
                >
                    Login
                </Button>
            </Form>
        </div>
    )
}