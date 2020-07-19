import {ACTION_TYPES, endFetch, startFetching} from "./actions";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos"

export const getTodos = () => {
    return function (dispatch) {
        dispatch(startFetching())
        fetch(BASE_URL).then(res => res.json()).then(res => {
            dispatch(endFetch(res))
        })
    }
}
export const remoteTodoReducer = (state, action) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
        case ACTION_TYPES.FETCH_STARTED:
            newState.loading = true
            break
        case ACTION_TYPES.FETCH_END:
            newState.loading = false
            newState.responseBody = action.payload
            break
        default:
            newState.responseBody = []
            newState.loading = false
    }
    return newState
}
