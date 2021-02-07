import {createStore, combineReducers} from "redux";
import {todos} from "./todos/reducer";
import {APP_MODE} from "./utils/constants";

const reducers = {todos};

const rootReducer = combineReducers(reducers);

const configureStore = (mode) => createStore(
    rootReducer,
    mode === APP_MODE.DEV ? (
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    ) : null
)

export default configureStore;

