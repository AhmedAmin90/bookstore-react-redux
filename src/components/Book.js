import PropTypes from 'prop-types';
import React from 'react';
import './Book.css';

function Book({ book, handleClick, percent }) {
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
          <li className="Book-remove-li"><button type="button" onKeyDown={deleteBook} onClick={deleteBook}>Remove</button></li>
          <li>Edit</li>
        </ul>
      </div>

      <div className="Book-card-right">
        <div className="Book-percentage">
          <div className="Book-percentage-circle" />
          <div className="Book-percentage-text">
            <h3>
              {percent}
              %
            </h3>
            <p>Completed</p>
          </div>
        </div>
        <div className="Book-card-line" />
        <div>
          <p className="Book-chapter-current">Current Chapter</p>
          <p className="Book-chapter-name">Chapter One: Introduction</p>
          <button type="button" className="Book-update-btn">update progress</button>
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
  percent: 0,
};

Book.propTypes = {
  book: PropTypes.objectOf(Object),
  handleClick: PropTypes.func,
  percent: PropTypes.number,
};

export default Book;
