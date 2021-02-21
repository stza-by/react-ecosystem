import {
    getTodos,
    createTodo,
    deleteTodo,
    completeTodo,
    uncompleteTodo,
} from "../services/todosService";

// ACTIONS

export const NEW_TODO_CREATED = 'NEW_TODO_CREATED';
export const TODO_DELETED = 'TODO_DELETED';
export const TODO_COMPLETED = 'TODO_COMPLETED';
export const TODO_UNCOMPLETED = 'TODO_UNCOMPLETED';

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';

// ACTION CREATORS

const newTodoCreated = (todo) => ({
    type: NEW_TODO_CREATED,
    payload: { todo },
});

const todoDeleted = (todo) => ({
    type: TODO_DELETED,
    payload: {todo},
});

const todoCompleted = (todo) => ({
    type: TODO_COMPLETED,
    payload: {todo},
});

const todoUncompleted = (todo) => ({
    type: TODO_UNCOMPLETED,
    payload: {todo},
});

const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
});

const loadTodosSuccess = (todos) => ({
    type: LOAD_TODOS_SUCCESS,
    payload: {todos},
});

const loadTodosFailure = (errorMessage) => ({
    type: LOAD_TODOS_FAILURE,
    payload: {error: errorMessage}
});

// THUNKS

export const loadTodos = () => async (dispatch, getState) => {
    dispatch(loadTodosInProgress());
    try {
        const todos = await getTodos();
        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure(e.message));
    }
};

export const addTodoRequest = (text) => async (dispatch, getState) => {
    try {
        const createdTodo = await createTodo(text);
        dispatch(newTodoCreated(createdTodo));
    } catch (e) {
        console.log(e.message);
    }
}

export const deleteTodoRequest = (id) => async (dispatch) => {
    try {
        const deletedTodo = await deleteTodo(id);
        dispatch(todoDeleted(deletedTodo));
    } catch (e) {
        console.log(e.message);
    }
}

export const completeTodoRequest = (id) => async (dispatch) => {
    try {
        const completedTodo = await completeTodo(id);
        dispatch(todoCompleted(completedTodo))
    } catch (e) {
        console.log(e.message);
    }
}

export const uncompleteTodoRequest = (id) => async (dispatch) => {
    try {
        const uncompletedTodo = await uncompleteTodo(id);
        dispatch(todoUncompleted(uncompletedTodo))
    } catch (e) {
        console.log(e.message);
    }
}
