import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../styles/global.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
