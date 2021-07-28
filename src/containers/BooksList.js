/* eslint-disable */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import * as actions from '../actions/index';
import './BookList.css';

function BooksList() {
  const allBooks = useSelector((state) => state.allBooks);
  const selectedCategory = useSelector((state) => state.filterdBooks);

  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(actions.REMOVE_BOOK(book));
  };

  const handleFilterChange = (category) => {
    dispatch(actions.CHANGE_FILTER(category));
  };

  const selectedBooks = (category) => {
    if (category === 'All') {
      return allBooks.map((book) => (
        <Book
          key={book.id}
          handleClick={handleRemoveBook}
          book={{ id: book.id, title: book.title, category: book.category }}
        />
      ));
    }
    const books = allBooks.filter((book) => book.category === category);
    return books.map((book) => (
      <Book
        key={book.id}
        handleClick={handleRemoveBook}
        book={{ id: book.id, title: book.title, category: book.category }}
      />
    ));
  };

  return (
    <div className="BookList">
      <CategoryFilter handleFilter={handleFilterChange} />
      {selectedBooks(selectedCategory)}
    </div>)
   
}

export default BooksList;
