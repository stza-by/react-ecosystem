import {v4 as uuid} from "uuid";

const fakeTodos = [
    {
        id: 'ae06181d-92c2-4fed-a29d-fb53a6301eb9',
        text: 'Learn about React Ecosystems',
        isCompleted: false,
        createdAt: new Date(),
    }, {
        id: 'cda9165d-c263-4ef6-af12-3f1271af5fb4',
        text: 'Get together with friends',
        isCompleted: false,
        createdAt: new Date(Date.now() - 86400000 * 7),
    }, {
        id: '2e538cc5-b734-4771-a109-dfcd204bb38b',
        text: 'Buy groceries',
        isCompleted: true,
        createdAt: new Date(Date.now() - 86400000 * 14),
    }
];

const getTodos = () => fakeTodos;

const createTodo = (text) => ({
    id: uuid(),
    createdAt: Date.now(),
    isCompleted: false,
    text,
});

const insertNewTodo = (todo) => {
    fakeTodos.push(todo);
    return todo;
}

const editTodo = (id, todo) => {
    const todoIndex = fakeTodos.findIndex((todo) => todo.id === id);

    if (!todoIndex) return null;

    const updatedTodo = {
        ...fakeTodos[todoIndex],
        ...todo,
    };

    fakeTodos[todoIndex] = updatedTodo;

    return updatedTodo;
}

const deleteTodo = (id) => {
    const todoIndex = fakeTodos.findIndex((todo) => todo.id === id);

    if(!todoIndex < 0) return null;

    return fakeTodos.splice(todoIndex, 1)[0];
}

export {
    getTodos,
    createTodo,
    insertNewTodo,
    editTodo,
    deleteTodo,
}


