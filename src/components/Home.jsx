import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home route</h2>
    <Link to="/app">Go to the App</Link>
  </div>
)

export default Home