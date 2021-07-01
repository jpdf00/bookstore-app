import React from 'react';
import Book from '../components/Book';

const TEST = {
  id: 1,
  title: 'Harry Potter',
  category: 'Action',
};

const BooksList = () => (
  <table>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <Book book={TEST} />
  </table>
);

export default BooksList;
