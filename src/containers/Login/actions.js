export const LOGIN_ACTIONS = {
    LOGIN: "login",
    LOGOUT: "logout"
}

export const setLogged = () => {
    localStorage.setItem(LOGIN_ACTIONS.LOGIN, "true")
}

export const getLogged = () => {
    return localStorage.getItem(LOGIN_ACTIONS.LOGIN) === "true"
}