import PropTypes from 'prop-types';
import React from 'react';

function Book({ book, handleClick }) {
  const deleteBook = () => {
    handleClick(book);
  };
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={deleteBook}>Remove This Book</button></td>
    </tr>

  );
}

Book.defaultProps = {
  book: {
    id: 0,
    title: '',
    category: '',
  },
  handleClick: () => {},
};

Book.propTypes = {
  book: PropTypes.objectOf(Object),
  handleClick: PropTypes.func,
};

export default Book;
