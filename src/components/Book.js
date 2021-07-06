import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, handleRemoveBook } = props;

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" name="button" value={book} onClick={() => handleRemoveBook(book)}>Delete</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
