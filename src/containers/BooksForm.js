import React from 'react';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const KEY = 0;

const BooksForm = () => (
  <form>
    <label htmlFor="title">
      Title
      <input type="text" name="title" value="" />
    </label>
    <label htmlFor="title">
      Category
      <select name="category">
        {CATEGORIES.map((category) => (
          <option key={KEY + 1} value={category}>{category}</option>
        ))}
      </select>
    </label>
    <button type="submit" name="button">Submit</button>
  </form>
);

export default BooksForm;
