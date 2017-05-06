import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../styles/AddTodo.css'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="addtodo">
      <form className="new-task" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input 
          ref={node => {
            input = node
          }}
          placeholder="Add task & push enter"  
        />
        <input hidden type="submit"/>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo