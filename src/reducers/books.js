import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const bookReducer = (state = [], action) => {
  let newState = [...state];
  let index = 0;
  switch (action.type) {
    case CREATE_BOOK:
      newState = [...newState, action.payload];
      return newState;
    case REMOVE_BOOK:
      index = newState.findIndex((item) => item.id === action.payload.id);
      newState.splice(index, 1);
      return newState;
    default:
      return newState;
  }
};

export default bookReducer;
