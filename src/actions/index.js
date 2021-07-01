const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = book => {
  return {
    type: CREATE_BOOK,
    payload: book,
  }
}

const removeBook = book => {
  return {
    type: REMOVE_BOOK,
    payload: book,
  }
}

export { createBook, removeBook };
