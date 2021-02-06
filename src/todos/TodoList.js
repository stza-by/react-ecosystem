import React from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.scss'

const TodoList = ({ todos }) => {
  return (
        <div className='todo-list-wrapper'>
            {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
        </div>
  )
}

export default TodoList
