import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index.js';
import App from './components/App.jsx';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const dom = (
  <Provider store={store}>
    <App />
  </Provider>
)

const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
root.render(dom);
