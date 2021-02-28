import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {todos} from "./todos/reducer";

const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
)

export default configureStore;
