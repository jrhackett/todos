import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import Root from './components/Root'
import configureStore from './configureStore'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
