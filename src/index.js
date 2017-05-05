import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const persistedState = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {}
const store = createStore(reducer, persistedState)

store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState()))
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
