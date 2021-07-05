import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = () => {
  const FILTERS = ['All', ...CATEGORIES];

  return (
    <select name="filter" value="">
      {FILTERS.map((category) => (
        <option key={uuidv4()} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export { CATEGORIES, CategoryFilter };
