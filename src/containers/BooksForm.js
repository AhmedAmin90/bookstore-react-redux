import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions/index';
import './BooksForm.css';

const BooksForm = () => {
  const allBooks = useSelector((state) => state.allBooks);
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const lastId = allBooks.length;

  const [book, setBook] = useState({
    id: lastId + 1,
    title: '',
    category: 'Category',
  });

  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    setBook((pre) => ({
      ...pre,
      [target.name]: target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (book.title.trim() === '') {
      alert('Please Add The Book Title !');
    } else if (book.category === 'Category') {
      alert('Please Select Book Category');
    } else {
      dispatch(actions.CREATE_BOOK(
        { id: book.id, title: book.title.trim(), category: book.category },
      ));
    }

    const nexId = book.id + 1;
    setBook({
      id: nexId,
      title: '',
      category: categories[0],
    });
  };

  return (
    <div className="container">
      <div className="BooksForm">
        <hr />
        <form onSubmit={handleClick}>
          <div className="BooksForm-title-div">
            <p className="BooksForm-title"> ADD NEW BOOK </p>
            <input className="BooksForm-title-input" type="text" id="title-id" value={book.title} placeholder="Book Title" name="title" onChange={handleChange} />
          </div>

          <select className="BooksForm-select" id="select-id" name="category" value={book.category} onChange={handleChange}>
            <option defaultValue disabled> Category</option>
            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>

          <input className="BooksForm-btn" type="submit" value="Add New Book" />
        </form>
      </div>
    </div>
  );
};

export default BooksForm;
