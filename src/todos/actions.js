import {v4 as uuid} from 'uuid';

export const CREATE_TODO = 'CREATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const UNCOMPLETE_TODO = 'UNCOMPLETE_TODO';

export const createTodo = (text) => ({
    type: CREATE_TODO,
    payload: {text, id: uuid()},
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: {id},
});

export const completeTodo = (id) => ({
    type: COMPLETE_TODO,
    payload: {id},
});

export const uncompleteTodo = (id) => ({
    type: UNCOMPLETE_TODO,
    payload: {id},
});
