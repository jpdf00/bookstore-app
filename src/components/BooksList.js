import React from 'react';

const BooksList = () => (
  <table>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <tr>
      <Book />
    </tr>
  </table>
);

export default BooksList;
