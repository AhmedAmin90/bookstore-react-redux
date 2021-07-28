import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter({ handleFilter }) {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleChange = ({ target }) => {
    handleFilter(target.value);
  };
  return (
    <div>
      <label htmlFor="fiter-category">
        Filter By Category
        <select onChange={handleChange} name="category" id="fiter-category">
          <option>All</option>
          {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </label>
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
