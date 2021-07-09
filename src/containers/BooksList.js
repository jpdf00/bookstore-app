import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import { CategoryFilter } from '../components/CategoryFilter';
import userIcon from '../assets/imgs/user-solid.svg';
import '../assets/stylesheets/BooksList.css';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const filteredBooks = books.filter((book) => book.category === filter || filter === 'All');

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  const handleFilterChange = (e) => {
    const data = e.target.value;
    dispatch(changeFilter(data));
  };

  return (
    <>
      <div className="bookstoreContainer">
        <h1 className="bookstoreTitle">Bookstore CMS</h1>
        <p className="books">BOOKS</p>
        <CategoryFilter filter={filter} handleFilterChange={handleFilterChange} />
        <div className="userIcon">
          <img src={userIcon} alt="User Icon" className="icon" />
        </div>
      </div>
      <div>
        {filteredBooks.map((book) => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </div>
    </>
  );
};

export default BooksList;
