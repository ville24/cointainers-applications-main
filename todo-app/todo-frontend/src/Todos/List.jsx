import React from 'react'

import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.map(todo => {
        return (
          <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        )
      }).reduce((acc, cur) => [...acc, <hr key={Math.random()} />, cur], [])}
    </>
  )
}

export default TodoList
