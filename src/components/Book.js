import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, category } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = { id: PropTypes.number.isRequired };
Book.propTypes = { title: PropTypes.string.isRequired };
Book.propTypes = { category: PropTypes.string.isRequired };

export default Book;
