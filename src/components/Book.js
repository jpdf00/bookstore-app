import React from 'react';

const Book = (props) => (
  <tr>
    <td>{props.book.id}</th>
    <td>{props.book.title}</th>
    <td>{props.book.category}</th>
  </tr>
);

export default Book;
