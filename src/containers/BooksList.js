import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import * as actions from '../actions/index';

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
          book={{
            id: book.id, title: book.title, category: book.category, percent: book.percent,
          }}
          percent={book.percent}
        />
      ));
    }
    const books = allBooks.filter((book) => book.category === category);
    return books.map((book) => (
      <Book
        key={book.id}
        handleClick={handleRemoveBook}
        book={{ id: book.id, title: book.title, category: book.category }}
        percent={book.percent}
      />
    ));
  };

  return (
    <div className="BookList">
      <CategoryFilter handleFilter={handleFilterChange} />
      <div className="container">
        {selectedBooks(selectedCategory)}
      </div>
    </div>
  );
}

export default BooksList;
