/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import allReducers from './reducers';
import * as actions from './actions/index';

const initialState = {
  defaultBook: [
    {
      id: 1,
      title: 'Test One',
      category: 'Learning',
      percent: 50,
    },
    {
      id: 2,
      title: 'Test Two',
      category: 'Kids',
      percent: 43,
    },
    {
      id: 3,
      title: 'Test Three',
      category: 'Horror',
      percent: 45,
    },
    {
      id: 4,
      title: 'Test Four',
      category: 'History',
      percent: 60,
    },
    {
      id: 5,
      title: 'Test Five',
      category: 'Action',
      percent: 50,
    },
    {
      id: 6,
      title: 'Test six',
      category: 'Sci-Fi',
      percent: 50,
    },
  ],
};

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

initialState.defaultBook.map((book) => store.dispatch((actions.CREATE_BOOK(book))));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
