import {LOGIN_ACTIONS} from "./actions";

export const loginReducer = (state, action) => {
    const newState = Object.assign({}, state)
    switch (action.type) {
        case LOGIN_ACTIONS.LOGIN:
            newState.loggedIn = true
            break
        case LOGIN_ACTIONS.LOGOUT:
            newState.loggedIn = false
            break
        default:
            break
    }
    return newState
}