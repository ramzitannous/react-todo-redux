import {applyMiddleware, compose, createStore} from "redux"
import RootReducer from "./reducers";
import thunkMiddleware from 'redux-thunk'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware),
);
const store = createStore(RootReducer, enhancer)
export default store
