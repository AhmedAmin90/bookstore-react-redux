import PropTypes from 'prop-types';
import React from 'react';

function Book({ book }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>

  );
}

Book.defaultProps = {
  book: {
    id: 0,
    title: '',
    category: '',
  },
};

Book.propTypes = {
  book: PropTypes.objectOf(Object),
};

export default Book;
