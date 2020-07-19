import {ACTION_TYPES} from "./actions";

// get the new state based on action and previous state
export const localTodoReducer = (state, action) => {
    let newState = Object.assign({}, state)
    newState.searchMode = false
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO:
            const todo = {title: action.payload, id: newState.todoList.length}
            newState.todoList = [...newState.todoList, todo]
            break
        case ACTION_TYPES.REMOVE_TODO:
            const arr = [...newState.todoList]
            arr.splice(action.index, 1)
            newState.todoList = arr
            break
        case ACTION_TYPES.CLEAR_TODO:
            newState.todoList = []
            break
        case ACTION_TYPES.SEARCH_TODO:
            newState.filteredList = newState.todoList.filter(todo => todo === action.payload)
            newState.searchMode = true
            break
        case ACTION_TYPES.DISABLE_SEARCH:
            break;
        default:
            newState.todoList = []
            break;
    }
    return newState
}
