import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from './Checkbox'
import '../styles/Todo.css'

const Todo = ({ onClick, completed, text, onRemove }) => (
  <div className="todo">
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <button onClick={onRemove}>Remove Todo</button>
    <Checkbox onClick={onClick} completed={completed} />
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo