import React from 'react'
import AddTodo from '../containers/AddTodo'
import Brand from './Brand'
import '../styles/Header.css'

const Header = () => (
  <div className="header">
    <div className="container">
      <Brand />
      <AddTodo />
    </div>
  </div>
)

export default Header