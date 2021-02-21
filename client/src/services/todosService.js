import axios from "axios";

const URL_BASE = 'http://localhost:5000';

const getTodos = async () => {
    const response = await axios.get(`${URL_BASE}/todos`);

    return response.data;
}

const createTodo = async (text) => {
    const response = await axios.post(`${URL_BASE}/todos`, {text});

    return response.data;
}

const deleteTodo = async (id) => {
    const response = await axios.delete(`${URL_BASE}/todos/${id}`);

    return response.data;
}

const completeTodo = async (id) => {
    const response = await axios.post(`${URL_BASE}/todos/${id}/completed`);

    return response.data;
}

const uncompleteTodo = async (id) => {
    const response = await axios.post(`${URL_BASE}/todos/${id}/uncompleted`);

    return response.data;
}

export {
    getTodos,
    createTodo,
    deleteTodo,
    completeTodo,
    uncompleteTodo,
};
