import {
    NEW_TODO_CREATED,
    TODO_DELETED,
    TODO_COMPLETED,
    TODO_UNCOMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from './actions';

const defaultState = {
    data: [],
    isLoading: false,
};

export const todos = (state = defaultState, action) => {

    const {type, payload} = action;

    switch (type) {
        case NEW_TODO_CREATED:
            const {todo: createdTodo} = payload;
            return {
                ...state,
                data: state.data.concat(createdTodo)
            };

        case TODO_DELETED:
            const {todo: removedTodo} = payload;
            return {
                ...state,
                data: state
                    .data
                    .filter((todo) => todo.id !== removedTodo.id)
            };

        case TODO_COMPLETED:
            const {todo: completedTodo} = payload;
            return {
                ...state,
                data: state
                    .data
                    .map((todo) => todo.id === completedTodo.id
                        ? completedTodo
                        : todo
                    )
            }
        case TODO_UNCOMPLETED:
            const {todo: uncompletedTodo} = payload;
            return {
                ...state,
                data: state
                    .data
                    .map((todo) => todo.id === uncompletedTodo.id
                        ? {...todo, isCompleted: false}
                        : todo
                    )
            }
        case LOAD_TODOS_SUCCESS:
            const {todos: loadedTodos} = payload;
            return {
                ...state,
                data: loadedTodos,
                isLoading: false,
            };
        case LOAD_TODOS_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            }
        case LOAD_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}
