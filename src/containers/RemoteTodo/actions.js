export const ACTION_TYPES = {
    FETCH_STARTED: "fetch-start",
    FETCH_END: "fetch-end"
}

export const startFetching = () => {
    return {
        type: ACTION_TYPES.FETCH_STARTED
    }
}

export const endFetch = (jsonResponseTodo) => {
    return {
        type: ACTION_TYPES.FETCH_END,
        payload: jsonResponseTodo
    }
}