import React from 'react'
import {connect} from 'react-redux';
import NewTodoForm from "./NewTodoForm";
import TodoListItem from './TodoListItem';
import {removeTodo, completeTodo, uncompleteTodo} from './actions';

import './TodoList.scss'

const TodoList = ({todos, removeTodo, completeTodo, uncompleteTodo}) => {
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
});

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => dispatch(removeTodo(id)),
    completeTodo: (id) => dispatch(completeTodo(id)),
    uncompleteTodo: (id) => dispatch(uncompleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
