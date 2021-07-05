import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = (props) => {
  const { filter, handleFilterChange } = props;
  const FILTERS = ['All', ...CATEGORIES];

  return (
    <select name="filter" value={filter} onChange={handleFilterChange}>
      {FILTERS.map((category) => (
        <option key={uuidv4()} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = { filter: PropTypes.string.isRequired };
CategoryFilter.propTypes = { handleFilterChange: PropTypes.func.isRequired };

export { CATEGORIES, CategoryFilter };
