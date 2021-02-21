import {
    NEW_TODO_CREATED,
    TODO_DELETED,
    TODO_COMPLETED,
    TODO_UNCOMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from './actions';

export const todos = (state = [], action) => {

    const {type, payload} = action;

    switch (type) {
        case NEW_TODO_CREATED:
            const { todo: createdTodo } = payload;
            return state.concat(createdTodo);

        case TODO_DELETED:
            const { todo: removedTodo } = payload;
            return state.filter((todo) => todo.id !== removedTodo.id);

        case TODO_COMPLETED:
            const { todo: completedTodo } = payload;
            return state
                .map((todo) => todo.id === completedTodo.id
                    ? completedTodo
                    : todo
                );

        case TODO_UNCOMPLETED:
            const { todo: uncompletedTodo } = payload;
            return state
                .map((todo) => todo.id === uncompletedTodo.id
                    ? {...todo, isCompleted: false}
                    : todo
                );

        case LOAD_TODOS_SUCCESS:
            const {todos} = payload;
            return todos;
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE:
        default:
            return state;
    }
}

export const isLoading = (state = false, action) => {
    const {type} = action;

    switch (type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_FAILURE:
        case LOAD_TODOS_SUCCESS:
            return false;
        default:
            return state;
    }
}
