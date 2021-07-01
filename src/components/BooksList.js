import React from 'react';
import Book from './Book';

const BooksList = () => (
  <table>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <Book book={state.book} />
  </table>
);

export default BooksList;
