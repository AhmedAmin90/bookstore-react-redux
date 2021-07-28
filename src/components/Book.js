/* eslint-disable */
import PropTypes from 'prop-types';
import React from 'react';
import './Book.css'

function Book({ book, handleClick }) {
  const deleteBook = () => {
    handleClick(book);
  };
  return (
    <div className="Book">

      <div className="Book-card-left">
        <div>
          <p className="Book-category">{book.category}</p>
          <h4 className="Book-title">{book.title}</h4>
          <p className="Book-author">Author Name</p>
        </div>
          <ul className="Book-action-list">
            <li>Comment</li>
            <li className="Book-remove-li" type="button" onClick={deleteBook}>Remove</li>
            <li>Edit</li>
          </ul>
      </div>

      <div className="Book-card-right">
        <div className="Book-percentage">
          <div className="Book-percentage-circle"></div>
          <div className="Book-percentage-text">
            <h3>8%</h3>
            <p>Completed</p>
          </div>
        </div>
        <div className="Book-card-line"></div>
        <div>
          <p className="Book-chapter-current">Current Chapter</p>
          <p className="Book-chapter-name">Chapter One: Introduction</p>
          <button className="Book-update-btn">update progress</button>
        </div>
      </div>
    </div>


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
