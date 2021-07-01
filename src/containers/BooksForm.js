import React from 'react';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <form>
    <label htmlFor="title">
      Title
      <input type="text" name="title" value="" />
    </label>
    <label htmlFor="title">
      Category
      <select name="category">
        <option value={CATEGORIES[0]}>{CATEGORIES[0]}</option>
        <option value={CATEGORIES[1]}>{CATEGORIES[1]}</option>
        <option value={CATEGORIES[2]}>{CATEGORIES[2]}</option>
        <option value={CATEGORIES[3]}>{CATEGORIES[3]}</option>
        <option value={CATEGORIES[4]}>{CATEGORIES[4]}</option>
        <option value={CATEGORIES[5]}>{CATEGORIES[5]}</option>
        <option value={CATEGORIES[6]}>{CATEGORIES[6]}</option>
      </select>
    </label>
    <button type="submit" name="button">Submit</button>
  </form>
);

export default BooksForm;
