import {
    CREATE_TODO,
    REMOVE_TODO,
    COMPLETE_TODO,
    UNCOMPLETE_TODO,
} from './actions';

export const todos = (state = [], action) => {

    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO:
            return state.concat({
                id: payload.id,
                text: payload.text,
                isCompleted: false,
            });

        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== payload.id);

        case COMPLETE_TODO:
            return state.map((todo) => todo.id === payload.id ? {...todo, isCompleted: true} : todo)

        case UNCOMPLETE_TODO:
            return state.map((todo) => todo.id === payload.id ? {...todo, isCompleted: false} : todo)

        default:
            return state;
    }
}
