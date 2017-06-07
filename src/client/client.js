import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import reducer from '../common/reducers/index'
import App from '../common/UIcomponents/App'

const initialState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension ? window.devToolsExtension() : undefined,
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)
