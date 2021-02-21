import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import NewTodoForm from "./NewTodoForm";
import TodoListItem from './TodoListItem';
import {
    loadTodos,
    deleteTodoRequest,
    completeTodoRequest,
    uncompleteTodoRequest,
} from './actions';

import './TodoList.scss'

const loadingMessage = (
    <div>
        Loading todos...
    </div>
);

const TodoList = (props) => {

    const {
        todos,
        loadTodos,
        removeTodo,
        completeTodo,
        uncompleteTodo,
        isLoading
    } = props

    useEffect(() => {
        loadTodos();
    }, []);

    if (isLoading) return loadingMessage;

    return (
        <div className='todo-list-wrapper'>
            <NewTodoForm/>
            <div className='todo-list'>

                <div className='uncompleted-list'>
                    {todos
                        .filter(todo => !todo.isCompleted)
                        .map(todo =>
                            <TodoListItem
                                key={todo.id}
                                todo={todo}
                                removeListItem={removeTodo}
                                completeTodo={completeTodo}
                            />
                        )}
                </div>

                <div className='completed-list'>
                    {todos
                        .filter(todo => todo.isCompleted)
                        .map(todo =>
                            <TodoListItem
                                key={todo.id}
                                todo={todo}
                                removeListItem={removeTodo}
                                uncompleteTodo={uncompleteTodo}
                            />
                        )}
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
    loadTodos: () => dispatch(loadTodos()),
    removeTodo: (id) => dispatch(deleteTodoRequest(id)),
    completeTodo: (id) => dispatch(completeTodoRequest(id)),
    uncompleteTodo: (id) => dispatch(uncompleteTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
