import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import '../styles/TodoList.css'

const TodoList = ({ todos, onTodoClick, onRemove }) => (  
  <div className="container todolist">                                      
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onRemove={() => onRemove(todo.id)}
        />
      )}
    </ul>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default TodoList