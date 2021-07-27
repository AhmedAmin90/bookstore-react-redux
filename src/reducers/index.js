/* eslint-disable */
import { combineReducers } from "redux";
import booksReducer from "./books";

const allReducers = combineReducers({
    allBooks: booksReducer
})

export default allReducers;