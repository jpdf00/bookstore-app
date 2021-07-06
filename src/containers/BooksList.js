import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import { CategoryFilter } from '../components/CategoryFilter';

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
      <CategoryFilter filter={filter} handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksList;
