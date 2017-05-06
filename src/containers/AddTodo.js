import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../styles/AddTodo.css'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form className="new-task" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <input hidden type="submit"/>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo