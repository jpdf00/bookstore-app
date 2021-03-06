import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import '../assets/stylesheets/CategoryFilter.css';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = (props) => {
  const { filter, handleFilterChange } = props;
  const FILTERS = ['All', ...CATEGORIES];

  return (
    <select name="filter" value={filter} onChange={handleFilterChange} className="categories">
      {FILTERS.map((category) => (
        <option key={uuidv4()} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export { CATEGORIES, CategoryFilter };
