import React from 'react'

const TodoListItem = ({todo, removeListItem, completeTodo, uncompleteTodo}) => {
    return (
        <div className='todo-list-item-container'>
            <h2>{todo.text}</h2>

            <div className='button-container'>

                {todo.isCompleted ?
                    (
                        <button
                            className='completed-button'
                            onClick={() => uncompleteTodo(todo.id)}
                        >
                            <img src="static/icons/close.png"/>
                        </button>
                    )
                    :
                    (
                        <button
                            className='completed-button'
                            onClick={() => completeTodo(todo.id)}
                        >
                            <img src="static/icons/complete.png"/>
                        </button>
                    )
                }

                <button
                    className='remove-button'
                    onClick={() => removeListItem(todo.id)}
                >
                    <img src="static/icons/delete.png"/>
                </button>
            </div>

        </div>
    )
}

export default TodoListItem
