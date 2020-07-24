import {getLogged, LOGIN_ACTIONS} from "./actions";
import {makeReducer} from "redux-toolbelt"

export const loginReducer = makeReducer({
    [LOGIN_ACTIONS.LOGIN.TYPE]: (state, {payload}) => ({...state, loggedIn: true, username: payload.username}),
    [LOGIN_ACTIONS.LOGOUT.TYPE]: (state, _) => ({...state, loggedIn: false, username: null}),
}, {
    defaultState: {loggedIn: getLogged()}
})
