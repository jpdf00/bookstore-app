import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';
import { CATEGORIES } from '../components/CategoryFilter';
import '../assets/stylesheets/BooksForm.css';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');
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
    <form onSubmit={handleSubmit} className="formContainer">
      <div className="lineHorizontal" />
      <h2 className="formTitle">
        ADD NEW BOOK
      </h2>
      <input type="text" name="title" value={title} className="inputPanel" onChange={handleChangeTitle} placeholder="BOOK TITLE" />
      <select name="category" value={category} className="selectPanel" onChange={handleChangeCategory} placeholder="CATEGORY">
        {CATEGORIES.map((category) => (
          <option key={uuidv4()} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit" name="button" className="submitButton">ADD BOOK</button>
    </form>
  );
};

export default BooksForm;
