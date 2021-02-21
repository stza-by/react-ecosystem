import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {todos, isLoading } from "./todos/reducer";

const reducers = {
    todos,
    isLoading,
};

const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
)

export default configureStore;
