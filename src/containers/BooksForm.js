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
    category: categories[0],
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
    if (book.title.trim() === '') { alert('Please Add The Book Title !'); } else {
      dispatch(actions.CREATE_BOOK(
        { id: book.id, title: book.title.trim(), category: book.category },
      ));
      const nexId = book.id + 1;
      setBook({
        id: nexId,
        title: '',
        category: categories[0],
      });
    }
  };

  return (
    <div className="BooksForm">
      <form onSubmit={handleClick}>
        <label htmlFor="title-id">
          Add The Book Title
          <input type="text" id="title-id" value={book.title} placeholder="Book Title" name="title" onChange={handleChange} />
        </label>
        <label htmlFor="select-id">
          Category
          <select id="select-id" name="category" value={book.category} onChange={handleChange}>
            <option defaultValue disabled>Select Category</option>
            {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </label>

        <input type="submit" value="Add New Book" />
      </form>
    </div>
  );
};

export default BooksForm;
