import {makeActionCreator} from "redux-toolbelt";

export const LOGIN_ACTIONS = {
    LOGIN: makeActionCreator("login"),
    LOGOUT: makeActionCreator("logout")
}


export const setLogged = () => {
    localStorage.setItem(LOGIN_ACTIONS.LOGIN.TYPE, "true")
}

export const getLogged = () => {
    return localStorage.getItem(LOGIN_ACTIONS.LOGIN.TYPE) === "true"
}
