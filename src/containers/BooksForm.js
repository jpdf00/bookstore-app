import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleChangeTitle = (e) => {
    const data = e.target.value;
    setTitle(data);
  };

  const handleChangeCategory = (e) => {
    const data = e.target.value;
    setCategory(data);
  };

  const handleSubmit = (e) => {
    const book = {
      id: uuidv4(),
      title,
      category,
    };
    dispatch(createBook(book));
    setTitle('');
    setCategory('');
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input type="text" name="title" value={title} onChange={handleChangeTitle} />
      </label>
      <label htmlFor="title">
        Category
        <select name="category" value={category} onChange={handleChangeCategory}>
          {CATEGORIES.map((category) => (
            <option key={uuidv4()} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" name="button">Submit</button>
    </form>
  );
};

export default BooksForm;
