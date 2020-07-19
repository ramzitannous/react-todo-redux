export const ACTION_TYPES = {
    ADD_TODO: "add-todo",
    REMOVE_TODO: "remove-todo",
    CLEAR_TODO: "clear-todo",
    SEARCH_TODO: "search-todo",
    DISABLE_SEARCH: "disable-search"
}


export const addTodo = todo => ({
    type: ACTION_TYPES.ADD_TODO,
    payload: todo
})

export const removeTodo = index => ({
    type: ACTION_TYPES.REMOVE_TODO,
    index
})

export const clearAll = () => ({
    type: ACTION_TYPES.CLEAR_TODO
})

export const searchTodo = (text) => ({
    type: ACTION_TYPES.SEARCH_TODO,
    payload: text

})

export const disableSearch = () => ({
    type: ACTION_TYPES.DISABLE_SEARCH
})