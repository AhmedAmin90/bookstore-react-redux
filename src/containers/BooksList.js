import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import * as actions from '../actions/index';

function BooksList() {
  const allBooks = useSelector((state) => state.allBooks);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(actions.REMOVE_BOOK(book));
  };

  const books = allBooks.map((book) => (
    <Book
      key={book.id}
      handleClick={handleRemoveBook}
      book={{ id: book.id, title: book.title, category: book.category }}
    />
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
