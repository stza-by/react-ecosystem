import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import NewTodoForm from "./NewTodoForm";
import TodoListItem from './TodoListItem';
import {
    getIsTodosLoading,
    getCompletedTodos,
    getIncompleteTodos,
} from "./selectors";
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
        completedTodos,
        incompletedTodos,
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
                    <h2>Incomplete:</h2>
                    {incompletedTodos.map(todo =>
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            removeListItem={removeTodo}
                            completeTodo={completeTodo}
                        />
                    )}
                </div>

                <div className='completed-list'>
                    <h2>Completed:</h2>
                    {completedTodos.map(todo =>
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
    completedTodos: getCompletedTodos(state),
    incompletedTodos: getIncompleteTodos(state),
    isLoading: getIsTodosLoading(state),
});

const mapDispatchToProps = dispatch => ({
    loadTodos: () => dispatch(loadTodos()),
    removeTodo: (id) => dispatch(deleteTodoRequest(id)),
    completeTodo: (id) => dispatch(completeTodoRequest(id)),
    uncompleteTodo: (id) => dispatch(uncompleteTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
