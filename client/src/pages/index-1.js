import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import history from './history'
import App from './app'
import store from './store'

// establishes socket connection

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
