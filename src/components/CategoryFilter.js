/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './CategoryFilter.css'

function CategoryFilter({ handleFilter }) {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleChange = ({ target }) => {
    handleFilter(target.value);
  };
  return (
    <div className="CategoryFilter">
      <div className="CategoryFilter-left">
      <h1 className="CategoryFilter-title ">Bookstore CMS</h1>
      <label htmlFor="fiter-category" className="CategoryFilter-select">
        Filter By Category <select onChange={handleChange} name="category" id="fiter-category">
          <option>All</option>
          {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </label>
      </div>
      <div className="CategoryFilter-right">
      <i className="fas fa-user"></i>
      </div>
    </div>
  );
}

CategoryFilter.defaultProps = {
  handleFilter: () => {},
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func,
};

export default CategoryFilter;
