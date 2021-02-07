import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import {
    getTodos,
    createTodo,
    insertNewTodo,
    editTodo,
    deleteTodo,
} from "./fakeData";

const PORT = 5000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

// The route for getting a list of all todos
app.get('/todos', (req, res) => {
    res.status(200).json(getTodos());
});

// The route for getting a list of all todos, but with a delay
// (to display the loading component better)
app.get('/todos-delay', (req, res) => {
    setTimeout(() => res.status(200).json(getTodos()), 2000);
});

// The route for creating new todoList items
app.post('/todos', (req, res) => {
    const {text} = req.body;
    console.log(req.body);
    if (text) {
        const insertedTodo = insertNewTodo(createTodo(text))
        res.status(200).json(insertedTodo);
    } else {
        res.status(400).json({message: 'Request body should have a text property'});
    }
});

// The route to complete todoList item
app.post('/todos/:id/completed', (req, res) => {
    const {id} = req.params;

    const updatedTodo = editTodo(id, {isCompleted : true});

    if (updatedTodo) {
        res.status(200).json(updatedTodo);
    } else {
        res.status(400).json({message: 'There is no todo with that id'});
    }
});

// The route to complete todoList item
app.post('/todos/:id/uncompleted', (req, res) => {
    const {id} = req.params;

    const updatedTodo = editTodo(id, {isCompleted : false});

    if (updatedTodo) {
        res.status(200).json(updatedTodo);
    } else {
        res.status(400).json({message: 'There is no todo with that id'});
    }
});

// The route for deleting a todoList item
app.delete('/todos/:id', (req, res) => {
    const {id} = req.params;

    const deletedTodo = deleteTodo(id);

    if(deletedTodo) {
        res.status(200).json(deletedTodo);
    } else {
        res.status(400).json({message: 'There is no todo with that id'});
    }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
