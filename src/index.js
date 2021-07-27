/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import * as actions from '../src/actions/index'

export const initialState = {
  defaultBook: [
    {
      id: 1,
      title: "Test One",
      category: "Learning"
    },
    {
      id: 2,
      title: "Test Two",
      category: "Kids"
    },
    {
      id: 3,
      title: "Test Three",
      category: "Horror"
    },
    {
      id: 4,
      title: "Test Four",
      category: "History"
    },
    {
      id: 5,
      title: "Test Five",
      category: "Action"
    },
    {
      id: 6,
      title: "Test six",
      category: "Sci-Fi"
    }
  ]
}

const store = createStore(allReducers ,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


initialState.defaultBook.map(book=> store.dispatch((actions.CREATE_BOOK(book))));

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
