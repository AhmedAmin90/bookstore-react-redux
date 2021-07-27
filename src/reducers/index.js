import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const allReducers = combineReducers({
  allBooks: booksReducer,
  filterdBooks: filterReducer,
});

export default allReducers;
